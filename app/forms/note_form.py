from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, FileField
from wtforms.validators import DataRequired


class NoteForm(FlaskForm):
    title = StringField('Note Title', validators=[DataRequired()])
    greeting = StringField('Greeting')
    closing = StringField('Closing')
    noteBody = StringField('Note Body', validators=[DataRequired()])
    background = StringField('Background', validators=[DataRequired()])
    spotifyLink = StringField('Spotify Link')
    videoLink = StringField('YouTube Link')
    imageURL = FileField('Image URL')
