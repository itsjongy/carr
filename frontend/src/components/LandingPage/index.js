import React, { useEffect, useState } from 'react';
import './LandingPage.css'

import image1 from '../Images/img1.jpg';
import image2 from '../Images/img2.jpg';
import image3 from '../Images/img3.jpg';
import image4 from '../Images/img4.jpg';
import image5 from '../Images/img5.jpg';


const images = [image1, image2, image3, image4, image5];
const delay = 10000;

function Slideshow() {
    const [index, setIndex] = useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() =>
            setIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            ), delay);
        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className='landing-container'>
            <div className='landing-slideshow'>
                <div className='landing-slideshowSlider' style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                    {images.map((image, index) => (
                        <img className='landing-slide' key={index} src={image} alt=""></img>
                    ))}
                </div>
                {/* <div className='landing-texts'>
                    <p>Find your inspiration.</p>
                </div> */}
            </div>
        </div>
    )
}

export default Slideshow;
