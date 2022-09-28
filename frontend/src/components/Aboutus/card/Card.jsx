import React from 'react';
import './card.css';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';

export default function Card(props) {
  return (
    <>
    <div className="card-main-container">
      <div className="card-inner-container">
        <div className="card-upper-portion">
          <div className="card-img-container">
            <img src={props.path} alt="person-img" className='card-image' />
          </div>
          <div className="card-content">
            <h2>{props.Name}</h2>
            <h3>{props.spec}</h3>
          </div>
        </div>
    </div>

      <div className='card-link-icon'>
        <a href={props.LinkedAdd} target='_blank'>
          
        <IconButton>
          {" "}
          <LinkedinIcon color="primary" fontSize="large" />
        </IconButton>
        </a>
      </div>
    </div>
    </>
  )
}
