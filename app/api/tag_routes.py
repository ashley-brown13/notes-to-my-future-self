from flask import Blueprint, request
from flask_login import current_user
from app.models import Tag, db
from app.forms import TagForm

tag_routes = Blueprint('tags', __name__)


@tag_routes.route('')
def get_tags():
    user = current_user
    tags = Tag.query.filter_by(userId=user.id).all()
    return {"tags": [tag.to_dict() for tag in tags]}


@tag_routes.route('/create', methods=['POST'])
def post_tag():
    form = TagForm()
    user = current_user
    print(user.id)
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        tag = Tag(
            tagName=form.data['tagName'],
            userId=user.id
        )
        db.session.add(tag)
        db.session.commit()
        return tag.to_dict()


@tag_routes.route("/<int:id>/delete", methods=['DELETE'])
def delete_tag(id):
    tag = Tag.query.get(id)
    db.session.delete(tag)
    db.session.commit()
    return tag.to_dict()
