import React,{useState} from 'react'
import { Routes } from 'react-router-dom';
import './App.css';
import First from './components/first/First'
import Homepage from './components/homepage/homepage'
import About from './components/Aboutus/Aboutus'
import { Route } from 'react-router-dom';
import PopularArtist from './components/PopularArtist/PopularArtist'

function App() {
  return (
    <Routes>
      <Route path='/' element={ <First /> } />
      <Route path='/homepage' element={ <Homepage /> } />
      <Route path='/Aboutus' element={ <About /> } />
      <Route path='/popularartist' element={ <PopularArtist /> } />
    </Routes>
  );
}

export default App;