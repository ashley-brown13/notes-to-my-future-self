from .db import db


class Image(db.Model):
    __tablename__ = "images"

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    url = db.Column(db.String(256), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    user = db.relationship("User", back_populates="images")

    def to_dict(self):
        return {
            "id": self.id,
            "url": self.url,
            "userId": self.userId
        }
