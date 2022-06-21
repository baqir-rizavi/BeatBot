import os
import re
import beatbot.utils as utils
from flask import request
from flask_login import login_user
from beatbot.models import User
from beatbot import app, bcrypt, db, ppath


@app.route('/login', methods=['POST'])
def login():
    print("im called")
    acc = request.json
    print(acc['username'])
    user = User.query.filter_by(user_username=acc['username']).first()
    if user and bcrypt.check_password_hash(user.get_password(), acc['password']):
        login_user(user, remember=acc['remember_me'])
        return {"status": "logged_in", "code": "ok"}
    else:
        return {"status": "invalid_user", "code": "error"}


@app.route('/login_with_google', methods=['POST'])
def login_with_google():
    acc = request.json
    user = User.query.filter_by(user_username=acc['email']).first()
    if user:
        login_user(user, remember=acc['remember_me'])
        return {"status": "logged_in", "code": "ok"}
    else:
        return {"status": "invalid_user", "code": "error"}


@app.route("/signup", methods=["POST"])
def signup():
    acc = request.json
    user = User.query.filter_by(user_username=acc['username']).first()
    user2 = User.query.filter_by(user_email=acc['email']).first()
    if not (user or user2):
        user_path = os.path.join(ppath, 'static', acc['username'])
        os.mkdir(user_path)
        if acc['pic_link']:
            pic_path = utils.save_image(acc['pic_link'], user_path)
            u = User(acc['username'], bcrypt.generate_password_hash(acc['password']).decode("UTF-8"), acc['first_name'],
                     acc['last_name'], acc['email'], pic_path)
        else:
            u = User(acc['username'], bcrypt.generate_password_hash(acc['password']).decode("UTF-8"), acc['first_name'],
                     acc['last_name'], acc['email'])
        db.session.add(u)
        db.session.commit()
        return {"status": "account created", "code": "ok"}
    else:
        if user:
            return {"status": "username already exist", "code": "error"}
        else:
            return {"status": "account already exists on email", "code": "error"}


@app.route("/logout", methods=["POST"])
def logout():
    pass

@app.route("/profile", methods=["POST"])
def profile():
    pass