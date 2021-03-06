from flask import Blueprint, request
from flask_login import current_user
from app.models import Note, db, Tag
from app.forms import NoteForm
import datetime

note_routes = Blueprint('notes', __name__)


@note_routes.route('')
def get_notes():
    user = current_user
    notes = Note.query.filter_by(userId=user.id).all()
    textNotes = []
    playlistNotes = []
    videoNotes = []
    photoNotes = []
    for note in notes:
        fixedNote = note.to_dict()
        if note.spotifyLink:
            playlistNotes.append(fixedNote)
        elif note.videoLink:
            videoNotes.append(fixedNote)
        elif note.imageURL:
            photoNotes.append(fixedNote)
        else:
            textNotes.append(fixedNote)
    return {"textNotes": textNotes, "playlistNotes": playlistNotes, "videoNotes": videoNotes, "photoNotes": photoNotes}


@note_routes.route('/create', methods=['POST'])
def post_note():
    form = NoteForm()
    body = request.get_json()
    user = current_user
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        note = Note()
        form.populate_obj(note)
        note.userId = user.id
        note.createdAt = datetime.date.today()
        note.updatedAt = datetime.date.today()
        tagIds = body['tags']
        for tagId in tagIds:
            tag = Tag.query.get(tagId)
            note.tags.append(tag)
        db.session.add(note)
        db.session.commit()
        return note.to_dict()


@note_routes.route('/<int:id>/edit', methods=['PATCH'])
def edit_note(id):
    note = Note.query.get(id)
    body = request.get_json()
    if note:
        note.title = body['title']
        note.greeting = body['greeting']
        note.closing = body['closing']
        note.noteBody = body['noteBody']
        note.background = body['background']
        note.updatedAt = datetime.date.today()
        note.tags = []
        tagIds = body['tags']
        for tagId in tagIds:
            tag = Tag.query.get(tagId)
            note.tags.append(tag)
        if body['spotifyLink']:
            note.spotifyLink = body['spotifyLink']
        if body['videoLink']:
            note.videoLink = body['videoLink']
        db.session.add(note)
        db.session.commit()
        return note.to_dict()


@note_routes.route('/<int:id>')
def get_note(id):
    note = Note.query.get(id)
    tags = note.tags
    return {"note": note.to_dict(), "tags": [tag.to_dict() for tag in tags]}


@note_routes.route('/<int:id>/delete', methods=['DELETE'])
def delete_note(id):
    note = Note.query.get(id)
    db.session.delete(note)
    db.session.commit()
    return note.to_dict()
