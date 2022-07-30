import React from 'react'
import './masterplayer.css'

import IconButton from '@mui/material/IconButton';

import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeDown from '@mui/icons-material/VolumeDown';

export default function masterplayer() {

    // const handleplay(){
        
    // }

  return (
    <>
    <div className="master_play">
            <div className="wave">
                <div className="wave1"></div>
                <div className="wave1"></div>
                <div className="wave1"></div>
            </div>
            <img src="/images/slider_2.jpg" alt="slider_2" id="poster_master_play" />
            
            <h5 id="title">On My Way <br />
                <div className="subtitle">Alan Walker</div>
            </h5>
            
            <div className="icon">
                <IconButton><SkipPreviousIcon className='bi' fontSize="large" /></IconButton>
            </div>
            <div className="icon">
                <IconButton><PlayArrowIcon className='bi' fontSize="large" /></IconButton>
            </div>
            <div className="icon">
                <IconButton><SkipNextIcon className='bi' fontSize="large" /></IconButton>
            </div>

            <span id="currentStart">0:00</span>
            <div className="bar">
                <input type="range" id="seek" min="0" value="0" max="0"></input>
                <div className="bar2" id="bar2"></div>
                <div className="dot"></div>
            </div>
            <span id="currentEnd">0:00</span>
            {/* <div className="vol">
                <div className="icon">
                    <IconButton>
                        <VolumeUpIcon className='bi' fontSize="small" />
                    </IconButton>
                </div>
                <input type="range" id="vol" min="0" value="30" max="0"></input>
                <div className="vol_bar"></div>
                <div className="dot" id="vol_dot"></div>
            </div> */}
        </div>
    </>
  )
}
