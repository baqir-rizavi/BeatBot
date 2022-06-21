from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
import os
import json

app = Flask(__name__)

config = json.load(open(os.path.join(app.root_path, "config.json")))

app.config['SQLALCHEMY_DATABASE_URI'] = config["db_uri"]
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = config["secret_key"]

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)

# login_manager.login_view = 'login page'
ppath = app.root_path


import beatbot.models
import beatbot.routes


@login_manager.user_loader
def load_user(user_id):
    return models.User.query.get(int(user_id))
