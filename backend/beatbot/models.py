import os
from beatbot import db, ppath
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __user_id = db.Column('user_id', db.Integer, primary_key=True)
    user_username = db.Column('user_username', db.String(40), unique=True, nullable=False)
    __user_password = db.Column('user_password', db.String(40), nullable=False)
    __user_first_name = db.Column('user_first_name', db.String(40), nullable=False)
    __user_last_name = db.Column('user_last_name', db.String(40), nullable=False)
    __user_email = db.Column('user_email', db.String(40), unique=True, nullable=False)
    __user_profile_pic = db.Column('user_profile_pic', db.String(40), nullable=False,
                                   default=os.path.join(ppath, 'static', 'default.png'))

    def __init__(self, username, password, fname, lname, email, profile_pic=None):
        self.user_username = username
        self.__user_password = password
        self.__user_first_name = fname
        self.__user_last_name = lname
        self.__user_email = email
        if profile_pic:
            self.__user_profile_pic = profile_pic

    def get_password(self):
        return self.__user_password
