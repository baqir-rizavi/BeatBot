import React from 'react'
import './Playlist.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import IconButton from '@mui/material/IconButton';

export default function Playlist(props) {
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
                <IconButton> 
                    {" "}
                    <PlayCircleIcon color="primary" fontSize="large" />
                </IconButton> 
            </div>
        </li>
    </div>
    </>
  )
}


// import React from 'react'
// import './Playlist.css'
// import PlayCircleIcon from '@mui/icons-material/PlayCircle';
// import IconButton from '@mui/material/IconButton';

// export default function Playlist(props) {
//   return (
//     <>
//     <div className="menu_song">
//         <li className="songItem">
//             <span>{props.n}</span>
//             <img src={props.path} alt="slider_2" />
//             <h5>
//                 {props.songName}
//                 <div className="subtitle">{props.singerName}</div>
//             </h5>
//             <div className="bi">
//                 <IconButton> 
//                     {" "}
//                     <PlayCircleIcon color="primary" fontSize="large" />
//                 </IconButton> 
//             </div>
//         </li>
//     </div>
//     </>
//   )
// }
