import React, {useState, useEffect} from 'react'
import './popularsong.css'

// this is an example json
        // {    
        //     'results':[ 
        //         {   'id': 1,
        //             'name':'On My Way',
        //             'thumbnail':'/images/1.jpg',
        //             'singer': 'Alan Walker'},
        //         {   'id': 2,
        //             'name':'Alone',
        //             'thumbnail':'/images/2.jpg',
        //             'singer': 'Alan Walker'}
        //     ]
        // }

export default function popularsong() {

    const [songs, setSongs] = useState([ 
                                            {   'id': 1,
                                                'name':'On My Way',
                                                'thumbnail':'/images/1.jpg',
                                                'singer': 'Alan Walker'},
                                            {   'id': 2,
                                                'name':'Alone',
                                                'thumbnail':'/images/2.jpg',
                                                'singer': 'Alan Walker'}
                                        ]);
    const [currentPage, setCurrentPage] = useState(1);


    
    async function getSongs(page) {
        
        let requestsongs = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({'page': page})
        };

        await fetch("/popular_songs", requestsongs).then(
            result => result.json()
        ).then(
            data => {
                setSongs(data.results);  
            }
        )
    };


    useEffect(() => {
        getSongs(currentPage);
    });

    async function getSongOnPlayer(event){
        let requestsong = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({'id': event.currentTarget.id})
        };

        await fetch("/get_song", requestsong).then(
            result => result.json()
        ).then(
            data => {
                // set song player to "data.songPath"   
            }
        )
    }


  return (
    <>
    <div className="popular_song">
                <div className="h4">
                    <h4>Popular Song</h4>
                    <div className="btn_s">
                        <i id="left_scroll" className="bi bi-arrow-left-short"></i>
                        <i id="right_scroll" className="bi bi-arrow-right-short"></i>
                    </div>
                    <div className="pop_song">
                    {songs.map(song => (
                        <li className="songItem" id={song.id} onClick={getSongOnPlayer}>
                        <div className="img_play">
                            <img src={song.thumbnail} alt="slider_1" />
                        </div>
                            <h5>{song.name}
                                <br />
                                <div className="subtitle">{song.singer}</div>
                            </h5>
                        </li>
                    ))
                    }
                    </div>
                    <button onClick={()=>{setCurrentPage(currentPage+1);}}>{'next->'}</button>
                </div>
            </div>
    
    </>
  )
}
