from werkzeug.security import generate_password_hash
from app.models import db, Note, Tag


def seed_notes():
    tag1 = Tag.query.get(1)
    tag2 = Tag.query.get(2)
    tag3 = Tag.query.get(3)
    tag4 = Tag.query.get(4)
    tag5 = Tag.query.get(5)

    note1 = Note(title='Store Bought Cookies',
                 noteBody='Never buy pre-made cookies. They have no flavor! You have tried MANY different flavors, but they are all just super mediocre.',
                 background="https://wallpapercave.com/wp/wp3477365.jpg",
                 createdAt='2021/05/03',
                 updatedAt='2021/05/03',
                 userId=1
                 )

    note1.tags.append(tag4)
    note1.tags.append(tag3)
    db.session.add(note1)

    note2 = Note(title='Going to the Fonda',
                 noteBody='Do not go the Fonda early. The main performer does not come on until around 10:30. Your legs get tired before they even come out and you get supes hungry waiting.',
                 background="https://img.wallpapersafari.com/desktop/1920/1080/77/63/WurYBF.jpg",
                 createdAt='2019/02/21',
                 updatedAt='2019/02/21',
                 userId=1
                 )

    note2.tags.append(tag5)
    note2.tags.append(tag3)
    db.session.add(note2)

    db.session.commit()


def undo_notes():
    db.session.execute('TRUNCATE notes CASCADE;')
    db.session.commit()
