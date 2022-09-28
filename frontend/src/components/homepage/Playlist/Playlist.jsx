import {React, useEffect} from 'react'
import './Playlist.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import IconButton from '@mui/material/IconButton';
// import MasterPlayer from './../masterplayer/masterplayer'
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
export default function Playlist(props) {
    const clickEve = () => {
        console.log("inside clickEve");
        console.log(props.n);
        props.setCurrentSongIndex(() => {
            return props.n - 1;
        });
        props.setPlayingStatus(() => {
            return true;
        });
        console.log("after master player called");
    }
  return (
    <>
    <div className="menu_song">
        <li className="songItem">
            <span>{props.n}</span>
            <img src={props.path} alt="slider_2" />
            <h5>
                {props.songName}
                <div className="subtitle">{props.singerName}</div>
            </h5>
            <div className="bi">
                {/* <IconButton onClick={clickEve}>
                    {props.playingStatus ?  < PauseCircleIcon color="primary" className='bi' fontSize="large"/> : 
                    < PlayArrowIcon color="primary" className='bi' fontSize="large"/> }
                </IconButton> */}
                <IconButton onClick={clickEve}> 
                    {" "}
                    <PlayCircleIcon color="primary" fontSize="large" />
                </IconButton> 
            </div>
        </li>
    </div>
    </>
  )
}
