from flask import Blueprint, request
from flask_login import current_user
from app.models import Note, db
from app.forms import NoteForm

note_routes = Blueprint('notes', __name__)


@note_routes.route('')
def get_notes():
    user = current_user
    notes = Note.query.filter_by(userId=user.id).all()
    textNotes = []
    playlistNotes = []
    videoNotes = []
    for note in notes:
        fixedNote = note.to_dict()
        if note.spotifyLink:
            playlists.append(fixedNote)
        elif note.videoLink:
            videos.append(fixedNote)
        else:
            textNotes.append(fixedNote)
    return {"textNotes": textNotes, "playlistNotes": playlistNotes, "videoNotes": videoNotes}
