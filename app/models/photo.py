from .db import db


class Photo(db.Model):
    __tablename__ = "photos"

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    image = db.Column(db.String(256), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    note = db.relationship("Note", back_populates="photos")
    user = db.relationship("User", back_populates="photos")

    def to_dict(self):
        return {
            "id": self.id,
            "image": self.image,
            "userId": self.userId
        }
