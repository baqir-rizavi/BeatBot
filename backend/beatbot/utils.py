import secrets
import urllib.request
import os
from PIL import Image
import PIL
import glob


def save_image(pic_link, user_path):
    fname = secrets.token_hex(8)
    pic_path = os.path.join(user_path, fname)
    urllib.request.urlretrieve(pic_link, pic_path)
    fixed_height = 256
    image = Image.open(pic_path)
    height_percent = (fixed_height / float(image.size[1]))
    width_size = int((float(image.size[0]) * float(height_percent)))
    image = image.resize((width_size, fixed_height), PIL.Image.NEAREST)
    rpicpath = os.path.join(user_path, 'r' + fname)
    image.save(rpicpath)
    image.close()
    os.remove(pic_path)
    return rpicpath
