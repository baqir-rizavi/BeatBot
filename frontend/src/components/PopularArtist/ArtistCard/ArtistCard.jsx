import React from 'react'
import './ArtistCard.css'

export default function ArtistCard(props) {
  return (
    <>
        <div className="artist-card-container">
            <div className="artist-card-wrapper">
                <img src={props.path} alt="" />
                
                <div className="artist-card-wrapper-text">
                    <h2>{props.name}</h2>
                    <p>{props.desc}</p>
                </div>

                <a className='pa-anchor' href={props.album} target='_blank'>
                    <h2>Click Here to view Gallery</h2>
                </a>

            </div>
        </div>
    </>
  )
}
