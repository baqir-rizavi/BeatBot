import React, { useRef, useEffect, useState } from 'react';
import './Aboutus.css';
import ourData from './ourData';
import Card from './card/Card';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import lottie from 'lottie-web';

export default function Aboutus() {
  const musicAni = useRef(null)
    useEffect (()=> {
        lottie.loadAnimation({
          container: musicAni.current,
          renderer:'svg',
          loop: true,
          autoplay: true,
          animationData: require('../../music.json')
        })
      }, [])
  return (
    <>
    <div className='AboutUs-container'>
      <div className="au-navbar">
      <div className="au-upper-portion">
        <h1 className='au-upper-portion-title'>About Beat Bot</h1>
      </div>
          <ul>
              <Link className='au-link' to='/homepage'><li>Homepage</li></Link>
              <Link className='au-link' to='/popularartist'><li>Popular Artist</li></Link>
              <Link className='au-link' to='/Aboutus'><li>About Us</li></Link>
          </ul>
      </div>

        <h1 className='au-jour-head'>
          Our Journey to Build Something Amazing
        </h1>
      <div className='au-journey'>
        <div className='au-journey-content'>
          <p>
          Being a very avid follower of the music, it was our passion to build our very own platform in which we can play around music. Thanks to our instructor of the Web Engineering Course --- Sir Muhammad Bin Aqeel for providing us the opportunity to manifest our talent. We have started from scratch and constructed the entire framework. We have worked extensively with React JS as the main backbone of our project. The database we have used is SQLite. Other than that we have used technologies such as Flask, etc. This is a group project comprising of Baqir Rizavi , Arsalan Rizwan and Aafaq Javaid working mainly on the backend while Sheikh Abdullah Nazim and Moeez Ahmed Bakhshi as the frontend engineers. As you all know handling with mp3 or mp4 files is very tedious job. So, we challenged ourselves and we wanted to work out of the box to do something that will help us polish our expertise not at the backend but the world wide growing front end technology REACT JS. We started building a music website that will make the things easy for music lovers. With this goal in mind, we learnt many things regarding on growing technologies on web development which not only includes React JS and its different version but also the with the compatibility of React JS SQLite and Flask. Climactically, we reached our goal and we Hope you will enjoy it in just the same way as we enjoyed in making it.
          </p>
        </div>
        <div className='au-journey-ani'  ref={musicAni} style={{width:'40rem'}}>
        </div>

      </div>
      <h1 className='au-team'>Our On-Fleek Team Members</h1>
      <div className="au-cards-container">
        {ourData.map(
          (e) => (
            <Card key={e.id} Name={e.Name} path={e.path} spec={e.spec} LinkedAdd={e.LinkedAdd} />
          )
        )}
      </div>
      <Footer/>
    </div>
  </>
  )
}
