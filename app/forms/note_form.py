from flask_wtf import FlaskForm
from wtforms import StringField, SelectField
from wtforms.validators import DataRequired


class NoteForm(FlaskForm):
    title = StringField('Note Title', validators=[DataRequired()])
    greeting = StringField('Greeting')
    closing = StringField('Closing')
    noteBody = StringField('Note Body', validators=[DataRequired()])
    background = SelectField('Background', validators=[DataRequired()], choices=[
        ('https://i.pinimg.com/originals/49/06/28/4906285407466a32cb95a5340a713c51.jpg', 'Vintage Notebook'),
        ('https://cdn.hipwallpaper.com/i/73/9/tWmv6C.jpg', 'New Notebook'),
        ('https://wallpapercave.com/wp/wp3477365.jpg', 'Rainbow'),
        ('https://i.pinimg.com/originals/66/e5/ab/66e5ab07ef0188ace7460e8f2ecc0412.jpg', 'Music'),
        ('https://cdn.wallpapersafari.com/19/95/Rs01ue.jpg', 'Film')
    ])
    spotifyLink = StringField('Spotify Link')
    videoLink = StringField('YouTube Link')
