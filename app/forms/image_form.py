from flask_wtf import FlaskForm
from wtforms import FileField
from wtforms.validators import DataRequired


class NoteForm(FlaskForm):
    imageURL = FileField('Image URL', validators=[DataRequired()])
