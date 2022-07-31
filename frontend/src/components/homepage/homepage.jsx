import React, {useState, useEffect} from 'react';
import {Buffer} from 'buffer';
import './homepage.css';
import playlist from './dummydata';

import Playlist from './Playlist/Playlist'
import Popularsong from './popularsong/popularsong'
import MasterPlayer from './masterplayer/masterplayer'

import IconButton from '@mui/material/IconButton';


export default function homepage() {
    
    const [profileData, setProfileData] = useState(null);
    // profileData will be {"name": ..., "pic_src": ...}

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    };

    const requestfile = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    };
  
    async function getProfile() {
            await fetch("/profile", requestOptions).then(
                result => result.json()
            ).then(
                data => {
                    setProfileData(data);  
                }
            )
    };

    useEffect(() => {
        getProfile();
    }, []);

  return (
    <>
    <header>
        <div className="menu_side">
            <h1>Play List</h1>
            <div className="playlist">
                <h4 className="active"><span></span><i className="bi bi-music-note-beamed"></i>Playlist</h4>
                <h4><span></span><i className="bi bi-music-note-beamed"></i>Last Listening</h4>
                <h4><span></span><i className="bi bi-music-note-beamed"></i>Recommendation</h4>
            </div>

        {playlist.map((e) => (<Playlist key={e.id} n={e.n} path={e.path} songName={e.songName} singerName={e.singerName} />))}
        
        </div>
        <div className="song_side">
            <nav>
                <ul>
                    <li>Discover <span></span></li>
                    <li>My Library</li>
                    <li>Radio</li>
                </ul>
                <div className="search">
                    <i className="bi bi-search"></i>
                    <input type="text" placeholder="Search Music........" />
                </div>
                { 
                profileData &&
                    <div>
                        <h2>{profileData.name}</h2>
                    </div>
                }
                {
                    <div className="user">
                        {/* <img src={profileData.pic_src} alt="tera baap" title="Beat Bot" /> */}
                        <img src='/images/1.jpg' alt="tera baap" title="Beat Bot" />
                    </div>
                }
           </nav>
            <div className="content">
                <h1>Your Music Partner</h1>
                <p>
                    You were the shadow to my light Did you feel us another start You fade
                    <br />
                    Away afraid our aim is out of sight wanna see us Alive
                </p>
            </div>
            <Popularsong />
        </div> 
        <MasterPlayer />
    </header>
    </>
  )
}
