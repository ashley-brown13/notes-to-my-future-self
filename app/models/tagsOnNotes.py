from .db import db


tagsOnNotes = db.Table(
    "tagsOnNotes",
    db.Column("tagId", db.Integer, db.ForeignKey("tags.id"), primary_key=True),
    db.Column("noteId", db.Integer, db.ForeignKey("notes.id"), primary_key=True)
)
