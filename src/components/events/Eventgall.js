
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import "./Event.css"
import { useWindowWidth } from '@react-hook/window-size';
export default function Eventgall(props) {
    const onlyWidth=useWindowWidth();
    const [images, setImages] = useState(null);

    useEffect(() => {
        // Assuming props.imgs is an array of arrays
        const imagesArray = props.imgs.map(innerArray => ({
            itemImageSrc: innerArray[props.val==="1"?8:7], // Assuming 7th item is the image URL
            
        }));
    
        setImages(imagesArray);
    }, [props.imgs]);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block',borderRadius:"10px",border:"1px solid white" }} className="img_e_r"/>;
        
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="card"> 
        {onlyWidth>=960&&
            <Galleria value={images} numVisible={5} circular style={{ width: '800px',margin:"auto" }}
                showThumbnails={false} showItemNavigators autoPlay transitionInterval={2000} item={itemTemplate} thumbnail={thumbnailTemplate} />
        }
        
        {onlyWidth<960&& onlyWidth>=740&&
            <Galleria value={images} numVisible={5} circular style={{ width: '600px',margin:"auto" }}
                showThumbnails={false} showItemNavigators autoPlay transitionInterval={2000} item={itemTemplate} thumbnail={thumbnailTemplate} />
        }
        {onlyWidth<740&& onlyWidth>=360&&
            <Galleria value={images} numVisible={5} circular style={{ width: '300px',margin:"auto" }}
                showThumbnails={false} showItemNavigators autoPlay transitionInterval={2000} item={itemTemplate} thumbnail={thumbnailTemplate} />
        }
        {onlyWidth<360&&
            <Galleria value={images} numVisible={5} circular style={{ width: '200px',margin:"auto" }}
                showThumbnails={false} showItemNavigators autoPlay transitionInterval={2000} item={itemTemplate} thumbnail={thumbnailTemplate} />
        }

        </div>
    )
}
        