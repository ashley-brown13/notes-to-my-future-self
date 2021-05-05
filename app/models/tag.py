from .db import db
from .tagsOnNotes import tagsOnNotes


class Tag(db.Model):
    __tablename__ = "tags"

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    tagName = db.Column(db.String(100), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    notes = db.relationship("Note", secondary=tagsOnNotes, back_populates="tags")
    user = db.relationship("User", back_populates="tags")

    def to_dict(self):
        return {
            "id": self.id,
            "tagName": self.tagName,
            "userId": self.userId
        }
