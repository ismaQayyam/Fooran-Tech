// src/Components/Common/Loader.jsx
import React from 'react'

const Loader = ({ gifPath = '/Image/loader.gif', size = 150, backgroundColor = '#fff' }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: backgroundColor
    }}>
      <img 
        src={gifPath} 
        alt="Loading..." 
        style={{ width: size, height: size }} 
      />
    </div>
  )
}

export default Loader
