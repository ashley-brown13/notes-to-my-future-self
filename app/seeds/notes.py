from werkzeug.security import generate_password_hash
from app.models import db, Note


def seed_notes():

    demo = Note(title='The time you bought cookies',
                noteBody='Never by pre-made cookies. They have no flavor!',
                background="what",
                createdAt='2021/05/03',
                updatedAt='2021/05/03',
                userId="1"
                )

    db.session.add(demo)

    db.session.commit()


def undo_notes():
    db.session.execute('TRUNCATE notes;')
    db.session.commit()
