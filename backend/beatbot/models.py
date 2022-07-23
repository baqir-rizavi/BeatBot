import os

from sqlalchemy import ForeignKey
from beatbot import db, ppath
from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy


class User(db.Model, UserMixin):
    id = db.Column('user_id', db.Integer, primary_key=True)
    user_username = db.Column('user_username', db.String(40), unique=True, nullable=False)
    user_password = db.Column('user_password', db.String(40), nullable=False)
    user_first_name = db.Column('user_first_name', db.String(40), nullable=False)
    user_last_name = db.Column('user_last_name', db.String(40), nullable=False)
    user_email = db.Column('user_email', db.String(40), unique=True, nullable=False)
    user_profile_pic = db.Column('user_profile_pic', db.String(40), nullable=False,
                                   default=os.path.join(ppath, 'static', 'default.jpg'))
    playlists = db.relationship('Playlist',backref= 'user')
    albums = db.relationship('Album',backref= 'user')
    
    def __init__(self, username, password, fname, lname, email, profile_pic=None):
        self.user_username = username
        self.user_password = password
        self.user_first_name = fname
        self.user_last_name = lname
        self.user_email = email
        if profile_pic:
            self.user_profile_pic = profile_pic

    def get_password(self):
        return self.user_password

class Playlist(db.Model):
    playlist_id = db.Column('playlist_id', db.Integer, primary_key=True)
    playlist_name = db.Column('playlist_name', db.String(40), nullable=False)
    playlist_file_count = db.Column('playlist_file_count', db.Integer, nullable=False)
    pl_user_id = db.Column('pl_user_id', db.Integer, ForeignKey('user.user_id'))
    playlist_records = db.relationship('Playlist_Record',backref= 'playlist')

class Playlist_Record(db.Model):
    playlist_id = db.Column('playlist_id', db.Integer, ForeignKey('playlist.playlist_id'), primary_key=True)
    music_file_id = db.Column('music_file_id', db.Integer, ForeignKey('music_file.music_file_id'), primary_key=True)
    inserted_date = db.Column('inserted_date', db.Date, nullable=False)

class Music_File(db.Model):
    music_file_id = db.Column('music_file_id', db.Integer, primary_key=True)
    file_path = db.Column('file_path', db.String(40), nullable=False)
    thumbnail_path = db.Column('thumbnail_path', db.String(40), nullable=False)
    views = db.Column('views', db.Integer)
    mf_album_id = db.Column('mf_album_id', db.Integer, ForeignKey('album.album_id'))
    #playlist_records = db.relationship('Playlist_Record', backref= 'music_file')

class Album(db.Model):
    album_id = db.Column('album_id', db.Integer, primary_key=True)
    name = db.Column('name', db.String(40), nullable=False)
    al_user_id = db.Column('al_user_id', db.Integer, ForeignKey('user.user_id'))
    music_files = db.relationship('Music_File', backref= 'album')
