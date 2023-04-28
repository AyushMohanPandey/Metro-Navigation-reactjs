import React from 'react'
import './style.css'

const Home = () => {
  return (
    <>
      <div className='Plan-Journey'>
        <div className='source'>Source</div>
        <div className='destination'>Destination</div>
        <button>Check</button>
      </div>
      <div className='Map'>
        <img src="map.png" alt="Map" />
      </div>
    </>
  )
}

export default Home