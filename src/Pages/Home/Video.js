import React from 'react'
import video from './../../Components/assets/video2.mp4'
import "./Video.css"
const Video = () => {
  return (
    <header className='outer-container'>
        <div className="video-container">
            <video src={video} autoPlay loop muted/>
        </div>
        <div className="text">
            <h1>expore the world</h1>
            <a href="/tours" className='button'>explore</a>
        </div>

    </header>

  )
}

export default Video