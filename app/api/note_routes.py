from flask import Blueprint, request
from flask_login import current_user
from app.models import Note, db
from app.forms import NoteForm

note_routes = Blueprint('tags', __name__)


@note_routes.route('')
def get_notes():
    user = current_user
    notes = Note.query.filter_by(userId=user.id).all()
    return {"tags": [tag.to_dict() for tag in tags]}
