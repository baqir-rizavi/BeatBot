import React from 'react'
import './PopularArtist.css'
import ArtistCard from './ArtistCard/ArtistCard'
import { Link } from 'react-router-dom'
import artist from './artist-data';

export default function PopularArtist() {
  return (
    <>
      <div className='PopularArtist-container'>
        <div className="pa-upper-portion">
          <h1 className='pa-upper-portion-title'>Popular Music Artists</h1>
        </div>
        <div className="pa-navbar">
            <ul>
                <Link className='au-link' to='/popularartist'><li>Popular Artist</li></Link>
                <Link className='pa-link' to='/homepage'><li>Homepage</li></Link>
                <Link className='pa-link' to='/Aboutus'><li>About Beatbot</li></Link>
            </ul>
        </div>
        {/* <ArtistCard /> */}
        <div className="pa-artist-cards-container">
          {artist.map(
            (e => (
              <ArtistCard key={e.id} name={e.name} path={e.path} album={e.album} desc={e.desc} />
            ))
          )}
        </div>
      </div>
    </>
  )
}
