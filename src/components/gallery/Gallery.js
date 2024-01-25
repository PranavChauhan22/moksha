import React, { useState } from "react";
import "./Gallery.css";


import { FaRegHandPointLeft } from "react-icons/fa";
import { FaRegHandPointRight } from "react-icons/fa";

function Gallery() {
  const cf="https://mokshainnovision.s3.eu-north-1.amazonaws.com/strips/cf.png";
  const vc="https://mokshainnovision.s3.eu-north-1.amazonaws.com/strips/vc.png";
  const pink =
  "https://mokshainnovision.s3.eu-north-1.amazonaws.com/bgs/pink.png";
  const strip_b="https://mokshainnovision.s3.eu-north-1.amazonaws.com/strips/gallery_ele.png";
  const strip_a="https://mokshainnovision.s3.eu-north-1.amazonaws.com/strips/gallery_strip.png";
  const [id, setid] = useState(0)
  const [arrow, setarrow] = useState(id == 0 ? 4 : 12);
  const identify=(p)=>{
    setid(p);
    if(p==0){
        setarrow(4);
    }else{
        setarrow(12);
    }
  }
  const onForward = () => {
    if (id == 0) {
      if (arrow == 11) {
        setarrow(4);
      } else {
        setarrow(arrow + 1);
      }
    } else {
      if (arrow == 14) {
        setarrow(12);
      } else {
        setarrow(arrow + 1);
      }
    }
  };
  const onBackward = () => {
    if(id==0){
    if (arrow == 4) {
      setarrow(11);
    } else {
      setarrow(arrow - 1);
    }
}else{
    if (arrow == 12) {
        setarrow(14);
      } else {
        setarrow(arrow - 1);
      }
}
  };
  return (
    <div className="gallery">
      <div className="strip_a">
        <img src={strip_b} className="strib_b_1" />
        <div className="mid_tv">
          <img src={strip_a} className="strip_a_a" />
          <div className="tv_l_r">
            <img src={vc} className="vc" onClick={()=>identify(0)} />
            <img src={require(`./vibe/${arrow}.png`)} className="img_tv" />
            <img src={cf} className="cf" onClick={()=>identify(1)} />
          </div>
          <div className="arrows_gal">
            <FaRegHandPointLeft className="icon_gal" onClick={onBackward} />
            <FaRegHandPointRight className="icon_gal" onClick={onForward} />
          </div>
        </div>
        <img src={strip_b} className="strib_b_2" />
      </div>
      <img src={pink} className="pink"/>
    </div>
  );
}

export default Gallery;
