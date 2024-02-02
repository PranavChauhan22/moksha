import React, { useState, useEffect } from 'react';
import loader from './loader.gif'
import "./loader.css"
const Loader = ({ src, duration }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  

  return (
    <div className='loader_body'>
      {isPlaying && <img src={loader} alt="GIF" className='loader' />}
    </div>
  );
};

export default Loader;
