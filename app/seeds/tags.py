from app.models import db, User, Tag


# Adds a demo user, you can add other users here if you want
def seed_tags():
    user = User.query.filter(User.username == "Demo").first()
    data = [
            Tag(tagName="Good Times", userId=1),
            Tag(tagName="LAUGH", userId=1),
            Tag(tagName="Life Lessons", userId=1),
            Tag(tagName="Chef D", userId=1),
            Tag(tagName="Concert Nights", userId=1),
            Tag(tagName="The Restaurant Experience", userId=1),
            Tag(tagName="Chills", userId=1),
            Tag(tagName="I feel like dancing!", userId=1),
            Tag(tagName="Get moving, Chica!", userId=1)
           ]

    for tag in data:
        user.tags.append(tag)
        db.session.add(tag)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_tags():
    db.session.execute('TRUNCATE tags CASCADE;')
    db.session.commit()
