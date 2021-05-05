"""added my tables

Revision ID: 737e6738cf14
Revises: ffdc0a98111c
Create Date: 2021-05-05 09:23:40.129976

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '737e6738cf14'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('notes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=100), nullable=False),
    sa.Column('greeting', sa.String(length=100), nullable=True),
    sa.Column('closing', sa.String(length=100), nullable=True),
    sa.Column('noteBody', sa.Text(), nullable=False),
    sa.Column('background', sa.String(length=256), nullable=False),
    sa.Column('createdAt', sa.Date(), nullable=False),
    sa.Column('updatedAt', sa.Date(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('type', sa.String(length=20), nullable=True),
    sa.Column('spotifyLink', sa.String(length=256), nullable=True),
    sa.Column('videoLink', sa.String(length=256), nullable=True),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('tags',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('tagName', sa.String(length=100), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('tagsOnNotes',
    sa.Column('tagId', sa.Integer(), nullable=False),
    sa.Column('noteId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['noteId'], ['notes.id'], ),
    sa.ForeignKeyConstraint(['tagId'], ['tags.id'], ),
    sa.PrimaryKeyConstraint('tagId', 'noteId')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('tagsOnNotes')
    op.drop_table('tags')
    op.drop_table('notes')
    op.drop_table('users')
    # ### end Alembic commands ###
