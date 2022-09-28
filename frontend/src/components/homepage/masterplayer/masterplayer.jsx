import React, {useState, useRef, useEffect} from 'react'
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

export default function masterplayer(props) {
    console.log("The current song index is: ",props.currentSongIndex)
    console.log("The current playing status is: ",props.playingStatus)

    const audioEl = useRef(null);
    const progressRef = useRef(null);
    const rangeRef = useRef(null);
    const dotRef = useRef(null);
    const startRef = useRef(null);
    const endRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const volIconRef = useRef(null);
    const volRef = useRef(null);
    const volDotRef = useRef(null);
    const volBarRef = useRef(null);
    const [isVolumeHigh, setIsVolumeHigh] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    console.log("The current isPlaying state/variable is: ", isPlaying)
    
    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
            if(isMuted)
            {
                volRef.current.value = 0;
            }
        }
        else 
        {
            console.log("inside pause audioElement")
            audioEl.current.pause();
        }
    });

    const skipForward = ()=>
    {
        props.setPlayingStatus(() => {
            return false;
        });
        let temp = props.currentSongIndex;
        temp++;
        if(temp > props.playlist.length-1)
        {
            props.setCurrentSongIndex(() => {
                return 0;
            });
        }
        else{
            props.setCurrentSongIndex(() => {
                return temp;
            });
        }
        console.log(props.currentSongIndex);
        audioEl.current.currentTime = 0;
    }
    
    const checkPlay = () => {
        if(props.playingStatus)
        {
            setIsPlaying(true);
        }
    }

    const skipBack = ()=>
    {
        props.setPlayingStatus(() => {
            return false;
        });
        let temp = props.currentSongIndex;
        temp--;
        if(temp < 0)
        {
            props.setCurrentSongIndex(() => {
                temp = props.playlist.length-1;
                return temp;
            });
        }
        else{
            props.setCurrentSongIndex(() => {
                return temp;
            });
        }
        audioEl.current.currentTime = 0;
    }
    const timeUpdateFunc = () => {
        const music = audioEl.current;
        let music_curr = music.currentTime;
        let music_dur = music.duration;
    
        let min = Math.floor(music_dur/60);
        let sec = Math.floor(music_dur%60);
        if (sec < 10) {
            sec = `0${sec}`;
        }
        endRef.current.innerText = `${min}:${sec}`;
    
        let min1 = Math.floor(music_curr/60);
        let sec1 = Math.floor(music_curr%60);
        if (sec1 < 10) {
            sec1 = `0${sec1}`;
        }
        startRef.current.innerText = `${min1}:${sec1}`;
        let progressbar = parseInt((music.currentTime/music.duration)*100);
        rangeRef.current.value = progressbar;
        let seekbar = rangeRef.current.value;
        progressRef.current.style.width = `${seekbar}%`;
        dotRef.current.style.left = `${seekbar}%`;
    }

    const seekAudioFunc =() => {
        audioEl.current.currentTime = rangeRef.current.value * audioEl.current.duration/100;
    }
    const volControlFunc = () => {
        if(isPlaying){
            if(volRef.current.value>50)
            {
                setIsVolumeHigh(true);
            }
            if(volRef.current.value<=50)
            {
                setIsVolumeHigh(false);
            }
            let vol_a = volRef.current.value;
            volBarRef.current.style.width = `${vol_a}%`;
            volDotRef.current.style.left = `${vol_a}%`;
            audioEl.current.volume = vol_a/100;
        }
    }
    return (
    <>

        <div className="master_play" onLoad={checkPlay}>
            <div className={`${isPlaying ? 'wave active2' : 'wave'}`}>
                <div className="wave1"></div>
                <div className="wave1"></div>
                <div className="wave1"></div>
            </div>
            <img src={props.playlist[props.currentSongIndex].path} alt="slider_2" id="poster_master_play" />
            <audio src={props.playlist[props.currentSongIndex].musicSrc} ref={audioEl} onTimeUpdate={timeUpdateFunc} onEnded={() => setIsPlaying(!isPlaying)}></audio>
            <h5 id="title">{props.playlist[props.currentSongIndex].songName} <br />
                <div className="subtitle">{props.playlist[props.currentSongIndex].singerName}</div>
            </h5>
            
            <div className="icon">
                <IconButton onClick={skipBack}><SkipPreviousIcon className='bi' fontSize="large" /></IconButton>
            </div>
            
            <div className="icon">
                <IconButton onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ?  < PauseCircleIcon className='bi' fontSize="large"/> : < PlayArrowIcon className='bi' fontSize="large"/> }
                </IconButton>
            </div>
            <div className="icon">
                <IconButton onClick={skipForward}><SkipNextIcon className='bi' fontSize="large" /></IconButton>
            </div>

            <span id="currentStart" ref = {startRef}>0:00</span>
            <div className="bar">
                <input type="range" ref = {rangeRef} id="seek" min="0" value="0" max="100" onChange={seekAudioFunc}></input>
                <div className="bar2" ref = {progressRef} id="bar2"></div>
                <div className="dot" ref = {dotRef}></div>
            </div>
            <span id="currentEnd" ref = {endRef}>0:00</span>
            <div className="vol">
                <IconButton ref={volIconRef} onClick={() => setIsMuted(!isMuted)}>
                {isVolumeHigh 
                ? <VolumeUpIcon className='bi' fontSize="large"/>
                : <VolumeDownIcon className='bi' fontSize="large"/> } </IconButton>
                <input type="range" id="vol" min="0" value="40" max="100"  ref={volRef} onChange={volControlFunc}></input>
                <div className="vol_bar" ref={volBarRef}></div>
                <div className="dot" id="vol_dot" ref={volDotRef}></div>
            </div>
        </div>
    </>
  )
}

// import React, {useState, useRef, useEffect} from 'react'
// import './masterplayer.css'

// import IconButton from '@mui/material/IconButton';

// import SkipNextIcon from '@mui/icons-material/SkipNext';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import PauseCircleIcon from '@mui/icons-material/PauseCircle';

// import VolumeOffIcon from '@mui/icons-material/VolumeOff';
// import VolumeUpIcon from '@mui/icons-material/VolumeUp';
// import VolumeDownIcon from '@mui/icons-material/VolumeDown';
// import VolumeDown from '@mui/icons-material/VolumeDown';

// export default function masterplayer(props) {
//     const audioEl = useRef(null);
//     const progressRef = useRef(null);
//     const rangeRef = useRef(null);
//     const dotRef = useRef(null);
//     const startRef = useRef(null);
//     const endRef = useRef(null);
//     const [isPlaying, setIsPlaying] = useState(false);
//     const volIconRef = useRef(null);
//     const volRef = useRef(null);
//     const volDotRef = useRef(null);
//     const volBarRef = useRef(null);
//     const [isVolumeHigh, setIsVolumeHigh] = useState(false);
//     const [isMuted, setIsMuted] = useState(false);
//     useEffect(() => {
//         if (isPlaying) {
//             audioEl.current.play();
//             if(isMuted)
//             {
//                 volRef.current.value = 0;
//             }
//         }
//         else 
//         {
//             audioEl.current.pause();
//         }
//     });

//     const skipForward = ()=>
//     {
//         let temp = props.currentSongIndex;
//         temp++;
//         if(temp > props.playlist.length-1)
//         {
//             props.setCurrentSongIndex(() => {
//                 return 0;
//             });
//         }
//         else{
//             props.setCurrentSongIndex(() => {
//                 return temp;
//             });
//         }
//         console.log(props.currentSongIndex);
//         audioEl.current.currentTime = 0;
//     }
//     const skipBack = ()=>
//     {
//         let temp = props.currentSongIndex;
//         temp--;
//         if(temp < 0)
//         {
//             props.setCurrentSongIndex(() => {
//                 temp = props.playlist.length-1;
//                 return temp;
//             });
//         }
//         else{
//             props.setCurrentSongIndex(() => {
//                 return temp;
//             });
//         }
//         audioEl.current.currentTime = 0;
//     }
//     const timeUpdateFunc = () => {
//         const music = audioEl.current;
//         let music_curr = music.currentTime;
//         let music_dur = music.duration;
    
//         let min = Math.floor(music_dur/60);
//         let sec = Math.floor(music_dur%60);
//         if (sec < 10) {
//             sec = `0${sec}`;
//         }
//         endRef.current.innerText = `${min}:${sec}`;
    
//         let min1 = Math.floor(music_curr/60);
//         let sec1 = Math.floor(music_curr%60);
//         if (sec1 < 10) {
//             sec1 = `0${sec1}`;
//         }
//         startRef.current.innerText = `${min1}:${sec1}`;
//         let progressbar = parseInt((music.currentTime/music.duration)*100);
//         rangeRef.current.value = progressbar;
//         let seekbar = rangeRef.current.value;
//         progressRef.current.style.width = `${seekbar}%`;
//         dotRef.current.style.left = `${seekbar}%`;
//     }

//     const seekAudioFunc =() => {
//         audioEl.current.currentTime = rangeRef.current.value * audioEl.current.duration/100;
//     }
//     const volControlFunc = () => {
//         if(isPlaying){
//             if(volRef.current.value>50)
//             {
//                 setIsVolumeHigh(true);
//             }
//             if(volRef.current.value<=50)
//             {
//                 setIsVolumeHigh(false);
//             }
//             let vol_a = volRef.current.value;
//             volBarRef.current.style.width = `${vol_a}%`;
//             volDotRef.current.style.left = `${vol_a}%`;
//             audioEl.current.volume = vol_a/100;
//         }
//     }
//     return (
//     <>
//         <div className="master_play">
//             <div className={`${isPlaying ? 'wave active2' : 'wave'}`}>
//                 <div className="wave1"></div>
//                 <div className="wave1"></div>
//                 <div className="wave1"></div>
//             </div>
//             <img src={props.playlist[props.currentSongIndex].path} alt="slider_2" id="poster_master_play" />
//             <audio src={props.playlist[props.currentSongIndex].musicSrc} ref={audioEl} onTimeUpdate={timeUpdateFunc} onEnded={() => setIsPlaying(!isPlaying)}></audio>
//             <h5 id="title">{props.playlist[props.currentSongIndex].songName} <br />
//                 <div className="subtitle">{props.playlist[props.currentSongIndex].singerName}</div>
//             </h5>
            
//             <div className="icon">
//                 <IconButton onClick={skipBack}><SkipPreviousIcon className='bi' fontSize="large" /></IconButton>
//             </div>
            
//             <div className="icon">
//                 <IconButton onClick={() => setIsPlaying(!isPlaying) }>
//                     {isPlaying ?  < PauseCircleIcon className='bi' fontSize="large"/> : < PlayArrowIcon className='bi' fontSize="large"/> }
//                 </IconButton>
//             </div>
//             <div className="icon">
//                 <IconButton onClick={skipForward}><SkipNextIcon className='bi' fontSize="large" /></IconButton>
//             </div>

//             <span id="currentStart" ref = {startRef}>0:00</span>
//             <div className="bar">
//                 <input type="range" ref = {rangeRef} id="seek" min="0" value="0" max="100" onChange={seekAudioFunc}></input>
//                 <div className="bar2" ref = {progressRef} id="bar2"></div>
//                 <div className="dot" ref = {dotRef}></div>
//             </div>
//             <span id="currentEnd" ref = {endRef}>0:00</span>
//             <div class="vol">
//                 <IconButton ref={volIconRef} onClick={() => setIsMuted(!isMuted)}>
//                 {isVolumeHigh 
//                 ? <VolumeUpIcon className='bi' fontSize="large"/>
//                 : <VolumeDownIcon className='bi' fontSize="large"/> } </IconButton>
//                 <input type="range" id="vol" min="0" value="40" max="100"  ref={volRef} onChange={volControlFunc}></input>
//                 <div class="vol_bar" ref={volBarRef}></div>
//                 <div class="dot" id="vol_dot" ref={volDotRef}></div>
//             </div>
//         </div>
//     </>
//   )
// }


// // import React from 'react'
// // import './masterplayer.css'

// // import IconButton from '@mui/material/IconButton';

// // import SkipNextIcon from '@mui/icons-material/SkipNext';
// // import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// // import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// // import PauseCircleIcon from '@mui/icons-material/PauseCircle';

// // import VolumeOffIcon from '@mui/icons-material/VolumeOff';
// // import VolumeUpIcon from '@mui/icons-material/VolumeUp';
// // import VolumeDownIcon from '@mui/icons-material/VolumeDown';
// // import VolumeDown from '@mui/icons-material/VolumeDown';

// // export default function masterplayer() {

// //     // const handleplay(){
        
// //     // }

// //   return (
// //     <>
// //     <div className="master_play">
// //             <div className="wave">
// //                 <div className="wave1"></div>
// //                 <div className="wave1"></div>
// //                 <div className="wave1"></div>
// //             </div>
// //             <img src="/images/slider_2.jpg" alt="slider_2" id="poster_master_play" />
            
// //             <h5 id="title">On My Way <br />
// //                 <div className="subtitle">Alan Walker</div>
// //             </h5>
            
// //             <div className="icon">
// //                 <IconButton><SkipPreviousIcon className='bi' fontSize="large" /></IconButton>
// //             </div>
// //             <div className="icon">
// //                 <IconButton><PlayArrowIcon className='bi' fontSize="large" /></IconButton>
// //             </div>
// //             <div className="icon">
// //                 <IconButton><SkipNextIcon className='bi' fontSize="large" /></IconButton>
// //             </div>

// //             <span id="currentStart">0:00</span>
// //             <div className="bar">
// //                 <input type="range" id="seek" min="0" value="0" max="0"></input>
// //                 <div className="bar2" id="bar2"></div>
// //                 <div className="dot"></div>
// //             </div>
// //             <span id="currentEnd">0:00</span>
// //             {/* <div className="vol">
// //                 <div className="icon">
// //                     <IconButton>
// //                         <VolumeUpIcon className='bi' fontSize="small" />
// //                     </IconButton>
// //                 </div>
// //                 <input type="range" id="vol" min="0" value="30" max="0"></input>
// //                 <div className="vol_bar"></div>
// //                 <div className="dot" id="vol_dot"></div>
// //             </div> */}
// //         </div>
// //     </>
// //   )
// // }
