from .db import db
from .tagsOnNotes import tagsOnNotes


class Note(db.Model):
    __tablename__ = 'notes'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    title = db.Column(db.String(100), nullable=False)
    greeting = db.Column(db.String(100), nullable=True)
    closing = db.Column(db.String(100), nullable=True)
    noteBody = db.Column(db.Text, nullable=False)
    background = db.Column(db.String(256), nullable=False)
    createdAt = db.Column(db.Date, nullable=False)
    updatedAt = db.Column(db.Date, nullable=False)
    spotifyLink = db.Column(db.String(256), nullable=True)
    videoLink = db.Column(db.String(256), nullable=True)
    imageURL = db.Column(db.String(512), nullable=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    tags = db.relationship("Tag", secondary=tagsOnNotes, back_populates="notes")
    user = db.relationship("User", back_populates="notes")

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "greeting": self.greeting,
            "closing": self.closing,
            "noteBody": self.noteBody,
            "background": self.background,
            "createdAt": self.createdAt,
            "updatedAt": self.updatedAt,
            "spotifyLink": self.spotifyLink,
            "videoLink": self.videoLink,
            "imageURL": self.imageURL,
            "userId": self.userId
        }
