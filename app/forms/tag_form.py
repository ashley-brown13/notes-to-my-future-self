from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


class TagForm(FlaskForm):
    tagName = StringField('Tag Name', validators=[DataRequired()])
