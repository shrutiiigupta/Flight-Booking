import React from 'react'

//Import assets
import video from '../../assets/video.mp4'
import aeroplane from '../../assets/takeoff.png'

const Home = () => {
  return (
    <div className='home flex container'>
      <div className="mainText">
        <h1>Create Ever-Lasting Memories With Us</h1>
      </div>

      <div className="homeImages flex">
        <div className='homeVideo flex'>
          <video src={video} autoPlay muted loop className='video'></video>
        </div>

        <img src={aeroplane} className='plane' />
      </div>

    </div>
  )
}

export default Home