import React, { useState, useEffect } from 'react';
import loader from '../loader/loader.gif'
import "../loader/loader.css"
import "./CS.css"
const CS = () => {


  return (
    <div className='loader_body flex_cs'>
    <img src={loader} alt="GIF" className='loader' style={{marginBottom:"-80px"}}/>
      <div className='cs_txt'>COMING SOON</div>
    </div>
  );
};

export default CS;
