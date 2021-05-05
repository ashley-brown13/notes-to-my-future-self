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
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    # type = db.Column(db.String(20))

    tags = db.relationship("Tag", secondary=tagsOnNotes, back_populates="notes")
    user = db.relationship("User", back_populates="notes")

    # __mapper_args__ = {
    #     'polymorphic_on': type,
    #     'polymorphic_identity': 'text'
    # }

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
            # "type": self.type,
            "spotifyLink": self.spotifyLink,
            "videoLink": self.videoLink,
            "userId": self.userId
        }


# class Playlist(Note):
#     spotifyLink = db.Column(db.String(256), nullable=True)

#     __mapper_args__ = {
#         'polymorphic_identity': 'playlist'
#     }


# class Video(Note):
#     videoLink = db.Column(db.String(256), nullable=True)

#     __mapper_args__ = {
#         'polymorphic_identity': 'video'
#     }
