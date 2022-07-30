import React,{useState} from 'react'
import { Routes } from 'react-router-dom';
import './App.css';
import First from './components/first/First'
import Homepage from './components/homepage/homepage'
import { Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <First /> } />
      <Route path='/homepage' element={ <Homepage /> } />
    </Routes>
  );
}

export default App;