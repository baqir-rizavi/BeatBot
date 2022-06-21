import React from 'react'
import './Buttons.css'

export default function Buttons({ name, color, hover }) {
  
  function changeBackground(e){
    e.target.style.background = hover;
  }
  
  function initialBackground(e){
    e.target.style.background = color;
  }

  return (
    <>
      <button style={{background: color}} onMouseOver = {changeBackground} 
      onMouseLeave = {initialBackground}
      type="button" className="my_btn">{name}</button>
    </>
  )
}

// style={{background: color}} 