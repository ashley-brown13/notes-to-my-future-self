from werkzeug.security import generate_password_hash
from app.models import db, Note, Tag


def seed_notes():
    tag1 = Tag.query.get(1)
    tag2 = Tag.query.get(2)
    tag3 = Tag.query.get(3)
    tag4 = Tag.query.get(4)
    tag5 = Tag.query.get(5)
    tag6 = Tag.query.get(6)

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

    note3 = Note(title='Shake Shack is a good snack. At the restaurant.',
                 noteBody='Do not order Shake Shack to go. They never remember the herb ranch, and the reheated fries are not great. Also, the sandwiches are not very filling.',
                 background="https://img.wallpapersafari.com/desktop/1280/1024/63/22/yJZV4E.jpg",
                 createdAt='2019/01/18',
                 updatedAt='2019/01/18',
                 userId=1
                 )

    note3.tags.append(tag3)
    note3.tags.append(tag6)
    db.session.add(note3)

    note4 = Note(title='Chipotle Salads',
                 greeting='Hola Delilah!',
                 closing='- Love Past Delilah',
                 noteBody='Sour cream is wayyyy too watery. Everytime you add it to your salad, you regret it. Good in theory, not in execution.',
                 background="https://img.wallpapersafari.com/desktop/1280/1024/63/22/yJZV4E.jpg",
                 createdAt='2020/03/18',
                 updatedAt='2020/03/18',
                 userId=1
                 )

    note4.tags.append(tag6)
    db.session.add(note4)

    note5 = Note(title='LA Art Walk is dead.',
                 greeting='Hey there Delilah!',
                 closing='- Love Past Delilah',
                 noteBody='LA Art walk is no longer good. It has not been for the past three time you have attempted it. Remember the good times--the fire throwers, the concert that shut down the middle of the street, the wine being served freely. It was beautiful and great for a time, and now, you must lay it to rest.',
                 background="https://cdn.hipwallpaper.com/i/57/82/W15Tai.jpg",
                 createdAt='2018/07/13',
                 updatedAt='2018/07/13',
                 userId=1
                 )

    note5.tags.append(tag1)
    note5.tags.append(tag3)
    db.session.add(note5)

    note16 = Note(title='Drinking Out of Cups is Forever Funny',
                  greeting='Hello Delilah!',
                  closing='Keep Laughing! - Love Past Delilah',
                  noteBody='Remember watching this with Core One. You could not stop laughing! Think of it every time you look at your sea shell towels.',
                  background="https://img.wallpapersafari.com/desktop/1920/1080/77/63/WurYBF.jpg",
                  createdAt='2019/02/21',
                  updatedAt='2019/02/21',
                  videoLink='https://www.youtube.com/watch?v=zdU635esPpQ',
                  userId=1
                  )

    note16.tags.append(tag1)
    note16.tags.append(tag2)

    db.session.commit()


def undo_notes():
    db.session.execute('TRUNCATE notes CASCADE;')
    db.session.commit()
