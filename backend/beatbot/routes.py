import os
import re
import beatbot.utils as utils
from flask import request
from flask_login import login_user, current_user
from beatbot.models import User, Music_File
from beatbot import app, bcrypt, db, ppath

@app.route('/login', methods=['POST'])
def login():
    acc = request.json
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
        encrypted_password = bcrypt.generate_password_hash(acc['password']).decode("UTF-8")
        u = User(acc['username'], encrypted_password, acc['name'], acc['email'])

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
    # TODO: make the damn logout logic you dumbass! 
    pass

@app.route("/profile", methods=["POST"])
def profile():
    if current_user:

        return {"name": current_user.user_name}
    else:
        return {"name": "Error no user exit yet page loaded"}

@app.route('/get_song', methods=['GET'])
def get_song():
    details = request.json
    song = Music_File.query.filter_by(music_file_id=details['id']).first()
    if song:
        song.views += 1
        db.session.commit()
        return {"songPath": song.file_path}
    else:
        return {"songPath": "invalid_id", "code": "error"}

@app.route("/popular_songs", methods=["GET"])
def popular_songs():
    page = request.json['page']
    popular_songs = Music_File.query.order_by(Music_File.views).offset((page-1) * 20).limit(20).all()
    return_format_popular_songs = []
    for song in popular_songs:
        return_format_popular_songs.append({"id": song.music_file_id, 
                    "name": song.name, "thumbnail": song.thumbnail_path, "singer": song.singer})
    return { "results": return_format_popular_songs}