import React from 'react'
import './Slider.css'

export default function Slider() {
  return (
    <div>
        <div className="slideshow">
        <div className="slideshow-item">
            <img src="images/slider_1.jpg" alt=""/>
            <div className="slideshow-item-text">
                <h5>Music is the Food of Soul!</h5>
                <p>Just as the body needs food to grow, music is vital for the growth of the soul. Without soul there is no body but without body soul can exist that is why it is more important. Just as the body demands different variety of food, in the same way soul requires same variety of food. Sometimes it needs romance to heal its scars, sometimes it needs tragedy for the catharsis, sometimes it needs hip-hop to reincarnate itself.</p>
            </div>
        </div>

        <div className="slideshow-item">
            <img src="images/slider_2.jpg" alt=""/>
            <div className="slideshow-item-text">
                <h5>Where Words fail, Music speaks!</h5>
                <p>Words are typically used for the communication of feelings and thoughts. But there are some feelings and thoughts in this universe which cannot be conveyed through words only. This is the point where music comes and casts its spell. Music is beyond any letters or words or sentences. It is the language of the hearts and only hearts can understand them.</p>
            </div>
        </div>

        <div className="slideshow-item">
            <img src="images/slider_3.jpg" alt=""/>
            <div className="slideshow-item-text">
                <h5>Music is what Feelings sound like!</h5>
                <p>We can listen to our heart beating but we cannot translate the feelings it holds. For this very reason, music is born. Music is life that is why our hearts have beats. Or It would not be wrong to say that music puts soul in our lives. Just as our lifeline goes up and down, in the same way there are highs and lows in music which depict life.</p>
            </div>
        </div>
    </div>
    </div>
  )
}
