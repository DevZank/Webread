import React, { useState } from 'react';
import Img from '../assets/Logo.jpg'

const Logo = () => {
    const imgStyle = {
        width: '80px', // Reduzir para 60%
        height: '80px', // Reduzir para 60%
        borderRadius: '50px',
        position: 'absolute',
        top: '5%', // ajustar conforme necessário
        left: '5%', // ajustar conforme necessário
        // transform: 'translate(-50%, -50%)', // centralizar o elemento com base no seu centro
    };
  return (
    <div>
        <img src={Img} style={imgStyle}/>
    </div>
  );
};

export default Logo;
// style={containerStyle}