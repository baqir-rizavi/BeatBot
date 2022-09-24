import React, { useState, useEffect } from 'react'
import './homepage.css'
// import {playlist} from './dummydata';

import Playlist from './Playlist/Playlist'
import Popularsong from './popularsong/popularsong'
import MasterPlayer from './masterplayer/masterplayer'
import IconButton from '@mui/material/IconButton';

export default function homepage() {
    const [playlist] = useState([
        {
            id: 1,
            n : "01",
            path: "/pics/1.jfif",
            songName: "Tu kuja man Kuja",
            singerName: "Sheraz Uppal",
            musicSrc: "./songs/1.mp3"
        },
        {
            id: 2,
            n : "02",
            path: "/pics/2.jpg",
            songName: "O Sathi",
            singerName: "Atif Aslam",
            musicSrc: "./songs/2.mp3"
        },
        {
            id: 3,
            n : "03",
            path: "/pics/3.jpg",
            songName: "Sochta hu ky wo",
            singerName: "Batti Gul Meter Chalu",
            musicSrc: "./songs/3.mp3"
        },
        {
            id: 4,
            n : "04",
            path: "/pics/4.jpg",
            songName: "Baarish",
            singerName: "Half Girlfriend",
            musicSrc: "./songs/4.mp3"
        } ,
        {
            id: 5,
            n : "05",
            path: "/pics/5.jpg",
            songName: "Paniyonsa",
            singerName: "John Abraham",
            musicSrc: "./songs/5.mp3"
        },
        {
            id: 6,
            n : "06",
            path: "/pics/6.jpg",
            songName: "Rabta",
            singerName: "Sidharth",
            musicSrc: "./songs/6.mp3"
        }       
    ]);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(0);
       
    useEffect(() => {
        setNextSongIndex(() => {
        if (currentSongIndex + 1 > playlist.length - 1) {
            return 0;
        } else {
            return currentSongIndex + 1;
        }
        });
    }, [currentSongIndex]);
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
                profileData &&
                    <div className="user">
                        <img src={profileData.pic_link} alt="tera baap" title="Beat Bot" />
                        {/* <img src='/images/1.jpg' alt="tera baap" title="Beat Bot" /> */}
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
        <MasterPlayer 
            currentSongIndex={currentSongIndex} 
            setCurrentSongIndex={setCurrentSongIndex} 
            nextSongIndex={nextSongIndex} 
            playlist={playlist}
        />
    </header>
    </>
  )
}


// import React from 'react'
// import './homepage.css'
// import playlist from './dummydata';

// import Playlist from './Playlist/Playlist'
// import Popularsong from './popularsong/popularsong'
// import MasterPlayer from './masterplayer/masterplayer'

// import IconButton from '@mui/material/IconButton';


// export default function homepage() {
//   return (
//     <>
//     <header>
//         <div className="menu_side">
//             <h1>Play List</h1>
//             <div className="playlist">
//                 <h4 className="active"><span></span><i className="bi bi-music-note-beamed"></i>Playlist</h4>
//                 <h4><span></span><i className="bi bi-music-note-beamed"></i>Last Listening</h4>
//                 <h4><span></span><i className="bi bi-music-note-beamed"></i>Recommendation</h4>
//             </div>

//         {playlist.map((e) => (<Playlist key={e.id} n={e.n} path={e.path} songName={e.songName} singerName={e.singerName} />))}
        
//         </div>
//         <div className="song_side">
//             <nav>
//                 <ul>
//                     <li>Discover <span></span></li>
//                     <li>My Library</li>
//                     <li>Radio</li>
//                 </ul>
//                 <div className="search">
//                     <i className="bi bi-search"></i>
//                     <input type="text" placeholder="Search Music........" />
//                 </div>
//                 <div className="user">
//                     <img src="/images/slider_2.jpg" alt="slider_2" title="Beat Bot" />
//                 </div>
//             </nav>
//             <div className="content">
//                 <h1>Your Music Partner</h1>
//                 <p>
//                     You were the shadow to my light Did you feel us another start You fade
//                     <br />
//                     Away afraid our aim is out of sight wanna see us Alive
//                 </p>
//             </div>
//             <Popularsong />
//         </div> 
//         <MasterPlayer />
//     </header>
//     </>
//   )
// }
