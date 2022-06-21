import os
from beatbot import db, ppath
from flask_login import UserMixin


class User(db.Model, UserMixin):
    id = db.Column('user_id', db.Integer, primary_key=True)
    user_username = db.Column('user_username', db.String(40), unique=True, nullable=False)
    user_password = db.Column('user_password', db.String(40), nullable=False)
    user_first_name = db.Column('user_first_name', db.String(40), nullable=False)
    user_last_name = db.Column('user_last_name', db.String(40), nullable=False)
    user_email = db.Column('user_email', db.String(40), unique=True, nullable=False)
    user_profile_pic = db.Column('user_profile_pic', db.String(40), nullable=False,
                                   default=os.path.join(ppath, 'static', 'default.png'))

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
