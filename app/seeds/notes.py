from werkzeug.security import generate_password_hash
from app.models import db, Note, Tag


def seed_notes():
    tag1 = Tag.query.get(1)
    tag2 = Tag.query.get(2)
    tag3 = Tag.query.get(3)
    tag4 = Tag.query.get(4)
    tag5 = Tag.query.get(5)
    tag6 = Tag.query.get(6)
    tag7 = Tag.query.get(7)
    tag8 = Tag.query.get(8)
    tag9 = Tag.query.get(9)
    tag10 = Tag.query.get(10)

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

    note3 = Note(title='Shake Shack is an expensive, but good snack. At the restaurant.',
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
                 background="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-amber-orange-solid-color-background.jpg",
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
                 background="https://png.pngtree.com/thumb_back/fw800/background/20200805/pngtree-purple-and-blue-nebula-galaxy-background-image_386406.jpg",
                 createdAt='2018/07/13',
                 updatedAt='2018/07/13',
                 userId=1
                 )

    note5.tags.append(tag1)
    note5.tags.append(tag3)
    db.session.add(note5)

    note6 = Note(title='Take more photos!',
                 greeting='Hola Delilah!',
                 closing='- Love Past Delilah',
                 noteBody='You do not have a lot of photos of one of your favorite creatures in the world, and now you cannot take them. Remember that. Life is finite, but memories can be stored and saved for much longer. Take pictures of your loved ones. Make photo books. Put them in frames. Keep a box. However you want to store them, just make sure and do it. Seeing the photos makes you smile, makes you feel.',
                 background="https://www.ppt-backgrounds.net/thumbs/pastel-clouds-presentation-templates.jpeg",
                 createdAt='2021/01/30',
                 updatedAt='2021/01/30',
                 userId=1
                 )

    note6.tags.append(tag3)
    note6.tags.append(tag10)
    db.session.add(note6)

    note7 = Note(title='Heavy Exercise: Always Cold Showers!',
                 greeting='Hey Hey Hey!',
                 closing='- Love Past Delilah',
                 noteBody='If you go on an extensive walk or bike ride, make sure to cold shower. It sucks for 60-90 seconds and then, no soreness. It is magical!',
                 background="https://img.wallpapersafari.com/desktop/1280/1024/63/22/yJZV4E.jpg",
                 createdAt='2020/07/30',
                 updatedAt='2020/07/30',
                 userId=1
                 )

    note7.tags.append(tag3)
    note7.tags.append(tag9)
    db.session.add(note7)

    note8 = Note(title='Painting is colorful therapy',
                 greeting='Hello Miss Delilah!',
                 closing='- Love Past Delilah',
                 noteBody='When you are stressed out, take out your paint brushes. The repetitive motion of strokes on a canvas is incredibly calming. Your brain just shuts down, and all of that stress you are feeling fades away. Also, you get a lot of cool pictures for your walls.',
                 background="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-amber-orange-solid-color-background.jpg",
                 createdAt='2018/06/30',
                 updatedAt='2018/06/30',
                 userId=1
                 )

    note8.tags.append(tag3)
    db.session.add(note8)

    note9 = Note(title='Fun cups make your morning',
                 greeting='Hola Miss Delilah!',
                 closing='- Love Morning Delilah',
                 noteBody='Cups with funny or cute sayings can really make your morning. When you feel tired and you just want to shut your eyes, pulling a fun cup out of the cupboard makes you smile and gives you a little pep in your step. Ones with pictures of friends or family are especially joy bringing!',
                 background="https://wallpapercave.com/wp/wp3477365.jpg",
                 createdAt='2017/06/11',
                 updatedAt='2017/06/11',
                 userId=1
                 )

    note9.tags.append(tag3)
    db.session.add(note9)

    note11 = Note(title="All you'll hear is sound...",
                  greeting='Hey Hey!',
                  closing='- Love Past Delilah',
                  noteBody='Remember the moment when Sylvan Esso came on. You were not expecting it. You stood in the middle of the room, no one too close to you, when you first heard the opening notes. It was breathtaking. You closed your eyes, and the meaning of the song was so spot on. All you heard and felt was sound. You lived in that song! Never stop having these moments!',
                  background="https://img.wallpapersafari.com/desktop/1920/1080/77/63/WurYBF.jpg",
                  createdAt='2017/09/11',
                  updatedAt='2017/09/11',
                  spotifyLink='https://open.spotify.com/track/4R0N3Ba0QMWeuG57THGTF9?si=16862a52fdff474b',
                  userId=1
                  )

    note11.tags.append(tag5)
    note11.tags.append(tag7)
    db.session.add(note11)

    note12 = Note(title="The Kaleo Surprise",
                  greeting='Hola!',
                  closing='- Love light up shoes wearing Delilah',
                  noteBody='One of the most unexpectedly mind blowing performances of your life. You were hot from the sun, borderline dehyrated, but then you went into the tent, stood right near the center aisle, and as you cooled off, the beautiful songs began to play. It was like heaven.',
                  background="https://www.ppt-backgrounds.net/thumbs/pastel-clouds-presentation-templates.jpeg",
                  createdAt='2017/09/11',
                  updatedAt='2017/09/11',
                  spotifyLink='https://open.spotify.com/album/4he4SQup02hEIQdwhZlZlk?si=t0jXeirZSh-QZ3fJsKnl7w',
                  userId=1
                  )

    note12.tags.append(tag5)
    note12.tags.append(tag7)
    note12.tags.append(tag9)
    db.session.add(note12)

    note13 = Note(title="Morning walks to your first class",
                  greeting='Hey there gorgeous!',
                  closing='- Student teacher Delilah',
                  noteBody='Every morning walking to GHCHS these were your jams! You would legit dance your way to class, so excited to teach such an awesome group of kids. Despite it being early morning, these songs got you alert and ready for the day. Remember this crisp autumn air, the black cardigan you often wore, and the feeling of loving your path.',
                  background="https://img.wallpapersafari.com/desktop/1280/1024/63/22/yJZV4E.jpg",
                  createdAt='2015/10/11',
                  updatedAt='2015/10/11',
                  spotifyLink='https://open.spotify.com/playlist/5jH71UVgFED7sYqbnvESTo?si=23066be36cc745b7',
                  userId=1
                  )

    note13.tags.append(tag1)
    note13.tags.append(tag10)
    db.session.add(note13)

    note14 = Note(title="The Calm Song",
                  greeting='Hello, my darling!',
                  closing='- Love Past Delilah',
                  noteBody='This made you feel so damn calm! When you were having anxiety, you would put this on repeat, and the beautiful voice and lyrics would let you relax and stop thinking so hard.',
                  background="https://wallpapercave.com/wp/wp3477365.jpg",
                  createdAt='2019/11/11',
                  updatedAt='2019/11/11',
                  spotifyLink='https://open.spotify.com/playlist/3gIZjtUrPWVSmlWTsGajlp?si=59e651cda87841ae',
                  userId=1
                  )

    note14.tags.append(tag7)
    note14.tags.append(tag10)
    db.session.add(note14)

    note15 = Note(title="Out of this world",
                  greeting='Hi Hi!',
                  closing='- Love Spaceship Delilah',
                  noteBody='This intro is quite possibly the best intro you have ever heard. The story she tells is absolutely incredible. It literally gives you the chills every time you hear it. It is better through good headphones.',
                  background="https://png.pngtree.com/thumb_back/fw800/background/20200805/pngtree-purple-and-blue-nebula-galaxy-background-image_386406.jpg",
                  createdAt='2020/11/11',
                  updatedAt='2020/11/11',
                  spotifyLink='https://open.spotify.com/track/1aRtduEHwvk2AMR87ji9Tg?si=72ce3ccc81e44037',
                  userId=1
                  )

    note15.tags.append(tag7)
    note15.tags.append(tag10)
    db.session.add(note15)

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
    db.session.add(note16)

    note17 = Note(title='Filmmaking with your boo',
                  greeting='Hi Delilah!',
                  closing='-Love your past bear self',
                  noteBody='Filming this with your boo was awesome! His passion for film and just general storytelling is inspiring. Even when it is just a one minute film, he cares about crafting a good tale. Remember how much he busted up about your very "ferocious" roar. Love the sound of his unfiltered joy.',
                  background="https://www.ppt-backgrounds.net/thumbs/pastel-clouds-presentation-templates.jpeg",
                  createdAt='2011/08/22',
                  updatedAt='2011/08/22',
                  videoLink='https://www.youtube.com/watch?v=VFcIFeIOzqQ',
                  userId=1
                  )

    note17.tags.append(tag1)
    db.session.add(note17)

    note18 = Note(title='Taebo till you drop',
                  greeting='Hola my darling!',
                  closing='-Sincerly, your kickboxing past self',
                  noteBody='Billy Blanks is timeless! Your teenage self used to occasionally fall asleep immediately after doing (so it is totes okay if that happens now). It is a really intense, but awesome workout. It works!!! And Billy is super encouraging and upbeat.',
                  background="https://png.pngtree.com/thumb_back/fw800/background/20200805/pngtree-purple-and-blue-nebula-galaxy-background-image_386406.jpg",
                  createdAt='2021/04/22',
                  updatedAt='2021/04/22',
                  videoLink='https://www.youtube.com/watch?v=s1t4xIlsmH0',
                  userId=1
                  )

    note18.tags.append(tag9)
    db.session.add(note18)

    note19 = Note(title='It is never too late to learn shuffling!',
                  greeting='Hey Hey Hey!',
                  closing='-Love Past Delilah',
                  noteBody='You can pick up almost any skill at any time in your life. If you want to try shuffling again in 10 years, as Shia Lebouf once agressively said, DO IT! Use this video as inspiration because these dancers are legit. Tape on the floor helps!',
                  background="https://img.wallpapersafari.com/desktop/1280/1024/63/22/yJZV4E.jpg",
                  createdAt='2021/04/17',
                  updatedAt='2021/04/17',
                  videoLink='https://www.youtube.com/watch?v=1ZLslotBOEY',
                  userId=1
                  )

    note19.tags.append(tag8)
    note19.tags.append(tag9)
    db.session.add(note19)

    note20 = Note(title='One of the best movie dances EVER!',
                  greeting='Hello my darling!',
                  closing='-Love Past Delilah',
                  noteBody='Everything about this is awesome! The slow beat, the sensual dance moves, the looks on the faces of the main couple. Love it!',
                  background="https://wallpapercave.com/wp/wp3477365.jpg",
                  createdAt='2020/05/17',
                  updatedAt='2020/05/17',
                  videoLink='https://www.youtube.com/watch?v=efShDKp_8BQ',
                  userId=1
                  )

    note20.tags.append(tag8)
    note20.tags.append(tag10)
    db.session.add(note20)

    db.session.commit()


def undo_notes():
    db.session.execute('TRUNCATE notes CASCADE;')
    db.session.commit()
