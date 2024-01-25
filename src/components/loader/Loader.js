import React, { useState, useEffect } from 'react';
import loader from './loader.gif'
import "./loader.css"
const Loader = ({ src, duration = 10000 }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPlaying(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  return (
    <div className='loader_body'>
      {isPlaying && <img src={loader} alt="GIF" className='loader' />}
    </div>
  );
};

export default Loader;
