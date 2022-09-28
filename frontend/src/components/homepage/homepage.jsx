import React, { useState, useEffect } from 'react'
import './homepage.css'
import Playlist from './Playlist/Playlist'
import Popularsong from './popularsong/popularsong'
import MasterPlayer from './masterplayer/masterplayer'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Search from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import playlist from './dummydata';

export default function homepage() {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(0);
    const [playingStatus, setPlayingStatus] = useState(false);

    const [profileData, setProfileData] = useState(null);
    // const [playlist, setplaylist] = useState([]);
    // profileData will be {"name": ..., "pic_link": ...}

    const requestOptions = {
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

    const requestOptions2 = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    
    useEffect(() => {
            fetch("/recomended_songs", requestOptions2).then(
                result => result.json()
            ).then(
                data => {
                    console.log(data.results);
                    setplaylist(data.results);
                }
            )
    });



    useEffect(() => {

        setNextSongIndex(() => {
        if (currentSongIndex + 1 > playlist.length - 1) {
            return 0;
        } else {
            return currentSongIndex + 1;
        }
        });
    });

  return (
    <>
    <header >
        <div className="menu_side"  onLoad={getProfile}>
            <h1>BeatBot</h1>
            <div className="playlist">
                <h4 className="active"><span></span><i className="bi bi-music-note-beamed"></i>Trending Songs</h4>
            </div>
            <div className='playlist-com'>
                {playlist && playlist.map((e) => (<Playlist key={e.id} n={e.n} path={e.path}
                            songName={e.songName} singerName={e.singerName}
                            setCurrentSongIndex={setCurrentSongIndex}
                            setPlayingStatus = {setPlayingStatus}
                />))}
            </div>
        </div>
        <div className="song_side">
            <nav>
                <ul>
                    <li>Discover <span></span></li>
                    <Link className='home-links' to='/popularartist'><li>Popular Artists</li></Link>
                    <Link className='home-links' to='/Aboutus'><li>About us</li></Link>
                </ul>
                <div className="search">
                    <div className="searchIcon">
                    <IconButton> 
                        {" "}
                        <SearchIcon color="primary" fontSize="large" />
                    </IconButton> 
                    </div>
                    <input className='searchInput' type="text" placeholder="Search Music........" />
                </div>
                <div>
                {
                profileData &&
                    <div className="user">
                        <h4>{profileData.name + " "}</h4>
                        {profileData.link && <img src={profileData.link} alt=""/>}
                        {!profileData.link && <img src="images/2.jpg" alt=""/>}
                    </div>
                }
                </div>
            </nav>
            <div className="content">
                <h1>Your Music Partner</h1>
                <p style={{color:'white'}}>
                    The Place where Dreams come true <br />
                    The Place where you feel the music <br />
                    The Plave where you feel connected to <br/>the World.
                </p>
            </div>
            <div className="popularSongTitle">
                <h1>Popular Songs</h1>
            </div>
            <div className="popularSongs">
                {playlist && playlist.map((e) => (< Popularsong key={e.id} n={e.n} path={e.path}
                            songName={e.songName} singerName={e.singerName}
                            setCurrentSongIndex={setCurrentSongIndex}
                            setPlayingStatus = {setPlayingStatus}
                                        />))}
            </div>  
        </div>
        <MasterPlayer 
            currentSongIndex={currentSongIndex} 
            setCurrentSongIndex={setCurrentSongIndex} 
            nextSongIndex={nextSongIndex} 
            playlist={playlist}
            playingStatus={playingStatus}
            setPlayingStatus={setPlayingStatus}
        />
    </header>
    </>
  )
}
