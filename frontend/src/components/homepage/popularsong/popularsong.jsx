import React from 'react'
import './popularsong.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import IconButton from '@mui/material/IconButton';

export default function popularsong(props) {
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
        <div className="popularCard">
            <div className="popularCardContainer">
                <img src={props.path} alt="" className='popularCardContainerImage'/>
            </div>
            <div className="popularCardText">
                <p>{props.songName}</p>
                <IconButton onClick={clickEve}> 
                    {" "}
                    <PlayCircleIcon color="primary" fontSize="large" />
                </IconButton> 
            </div>
        </div>
    </>
  )
}

// import React from 'react'
// import './popularsong.css'
// import PlayCircleIcon from '@mui/icons-material/PlayCircle';
// import IconButton from '@mui/material/IconButton';

// export default function popularsong({path, image, title, subtitle}) {
//   return (
//     <>
//         <div className="popularCard">
//             <div className="popularCardContainer">
//                 <img src={path} alt="" className='popularCardContainerImage'/>
//             </div>
//             <div className="popularCardText">
//                 <p>{title}</p>
//                 <IconButton> 
//                     {" "}
//                     <PlayCircleIcon color="primary" fontSize="large" />
//                 </IconButton> 
//             </div>
//         </div>
//     </>
    // <>
    // <div className="popular_song">
    //             <div className="h4">
    //                 <h4>Popular Song</h4>
    //                 <div className="btn_s">
    //                     <i id="left_scroll" className="bi bi-arrow-left-short"></i>
    //                     <i id="right_scroll" className="bi bi-arrow-right-short"></i>
    //                 </div>
    //                 <div className="pop_song">
    //                 <li className="songItem">
    //                     <div className="img_play">
    //                         <img src="/images/slider_1.jpg" alt="slider_1" />
    //                     </div>
    //                     <h5>On My Way
    //                         <br />
    //                         <div className="subtitle">Alan Walker</div>
    //                     </h5>
    //                 </li>
    //                 <li className="songItem">
    //                     <div className="img_play">
    //                         <img src="/images/slider_1.jpg" alt="slider_1" />
    //                         <i className="bi playListPlay bi-play-circle-fill" id="8"></i>
    //                     </div>
    //                     <h5>On My Way
    //                         <br />
    //                         <div className="subtitle">Alan Walker</div>
    //                     </h5>
    //                 </li>
    //                 <li className="songItem">
    //                     <div className="img_play">
    //                         <img src="/images/slider_1.jpg" alt="slider_1" />
    //                         <i className="bi playListPlay bi-play-circle-fill" id="9"></i>
    //                     </div>
    //                     <h5>On My Way
    //                         <br />
    //                         <div className="subtitle">Alan Walker</div>
    //                     </h5>
    //                 </li>
    //                 <li className="songItem">
    //                     <div className="img_play">
    //                         <img src="/images/slider_1.jpg" alt="slider_1" />
    //                         <i className="bi playListPlay bi-play-circle-fill" id="10"></i>
    //                     </div>
    //                     <h5>On My Way
    //                         <br />
    //                         <div className="subtitle">Alan Walker</div>
    //                     </h5>
    //                 </li>
    //                 <li className="songItem">
    //                     <div className="img_play">
    //                         <img src="/images/slider_1.jpg" alt="slider_1" />
    //                         <i className="bi playListPlay bi-play-circle-fill" id="11"></i>
    //                     </div>
    //                     <h5>On My Way
    //                         <br />
    //                         <div className="subtitle">Alan Walker</div>
    //                     </h5>
    //                 </li>
    //                 <li className="songItem">
    //                     <div className="img_play">
    //                         <img src="/images/slider_1.jpg" alt="slider_1" />
    //                         <i className="bi playListPlay bi-play-circle-fill" id="12"></i>
    //                     </div>
    //                     <h5>On My Way
    //                         <br />
    //                         <div className="subtitle">Alan Walker</div>
    //                     </h5>
    //                 </li>
    //                 <li className="songItem">
    //                     <div className="img_play">
    //                         <img src="/images/slider_1.jpg" alt="slider_1" />
    //                         <i className="bi playListPlay bi-play-circle-fill" id="13"></i>
    //                     </div>
    //                     <h5>On My Way
    //                         <br />
    //                         <div className="subtitle">Alan Walker</div>
    //                     </h5>
    //                 </li>
    //                 <li className="songItem">
    //                     <div className="img_play">
    //                         <img src="/images/slider_1.jpg" alt="slider_1" />
    //                         <i className="bi playListPlay bi-play-circle-fill" id="14"></i>
    //                     </div>
    //                     <h5>On My Way
    //                         <br />
    //                         <div className="subtitle">Alan Walker</div>
    //                     </h5>
    //                 </li>
    //                 <li className="songItem">
    //                     <div className="img_play">
    //                         <img src="/images/slider_1.jpg" alt="slider_1" />
    //                         <i className="bi playListPlay bi-play-circle-fill" id="15"></i>
    //                     </div>
    //                     <h5>On My Way
    //                         <br />
    //                         <div className="subtitle">Alan Walker</div>
    //                     </h5>
    //                 </li>
    //                 <li className="songItem">
    //                     <div className="img_play">
    //                         <img src="/images/slider_1.jpg" alt="slider_1" />
    //                         <i className="bi playListPlay bi-play-circle-fill" id="16"></i>
    //                     </div>
    //                     <h5>On My Way
    //                         <br />
    //                         <div className="subtitle">Alan Walker</div>
    //                     </h5>
    //                 </li>
    //             </div>
    //             </div>
    //         </div>
    
    // </>
