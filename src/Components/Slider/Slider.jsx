import React, { useEffect, useRef } from 'react';
import './Slider.css';

import ImgOne from "../../assets/bgone.jpg"
import ImgTwo from "../../assets/bgtwo.jpg"
import ImgThree from "../../assets/bgthree.jpg"
import ImgFour from "../../assets/bgfour.jpg"
import {NavLink} from "react-router-dom"
function Slider() {
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailBorderRef = useRef(null);
  const timeRef = useRef(null);
  let runTimeOut;
  let runNextAuto;

  useEffect(() => {
    nextRef.current.onclick = () => showSlider('next');
    prevRef.current.onclick = () => showSlider('prev');

    thumbnailBorderRef.current.appendChild(thumbnailBorderRef.current.querySelector('.item'));

    runNextAuto = setTimeout(() => {
      nextRef.current.click();
    }, 7000);

    return () => {
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
    };
  }, []);

  function showSlider(type) {
    const sliderItems = sliderRef.current.querySelectorAll('.item');
    const thumbnailItems = thumbnailBorderRef.current.querySelectorAll('.item');

    if (type === 'next') {
      sliderRef.current.appendChild(sliderItems[0]);
      thumbnailBorderRef.current.appendChild(thumbnailItems[0]);
      carouselRef.current.classList.add('next');
    } else {
      sliderRef.current.prepend(sliderItems[sliderItems.length - 1]);
      thumbnailBorderRef.current.prepend(thumbnailItems[thumbnailItems.length - 1]);
      carouselRef.current.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselRef.current.classList.remove('next');
      carouselRef.current.classList.remove('prev');
    }, 3000);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      nextRef.current.click();
    }, 7000);
  }

  return (
    <>
  
   
    <div className="carousel" ref={carouselRef}>
      
    <div className="list" ref={sliderRef}>
      <div className="item">
        <img src={ImgOne} alt="Slider Item 1" />
        <div className="content">
        <div className="author">VMS </div>
          <div className="title">MARRIAGE</div>
          <div className="topic">MANAGEMENT</div>
          <div className="des">
          It's time to celebrate! the best event organizers
          </div>
          <div className="buttons">
          <button>   <NavLink to={'/userregister'}>Book Now</NavLink></button>
           
          </div>
        </div>
      </div>
      <div className="item">
        <img src={ImgTwo} alt="Slider Item 2" />
        <div className="content">
        <div className="author">VMS </div>
          <div className="title">MARRIAGE</div>
          <div className="topic">BOOKING</div>
          <div className="des">
          It's time to celebrate! the best event organizers
          </div>
          <div className="buttons">
          <button>   <NavLink to={'/userregister'}>Book Now</NavLink></button>
           
          </div>
        </div>
      </div>
      <div className="item">
        <img src={ImgThree} alt="Slider Item 3" />
        <div className="content">
        <div className="author">VMS </div>
          <div className="title">MARRIAGE</div>
          <div className="topic">BOOKING</div>
          <div className="des">
          It's time to celebrate! the best event organizers
          </div>
          <div className="buttons">
          <button>   <NavLink to={'/userregister'}>Book Now</NavLink></button>
           
          </div>
        </div>
      </div>
      <div className="item">
        <img src={ImgFour} alt="Slider Item 4" />
        <div className="content">
        <div className="author">VMS </div>
          <div className="title">MARRIAGE</div>
          <div className="topic">BOOKING</div>
          <div className="des">
          It's time to celebrate! the best event organizers
          </div>
          <div className="buttons">
          <button>   <NavLink to={'/userregister'}>Book Now</NavLink></button>
           
          </div>
        </div>
      </div>
    </div>
    <div className="thumbnail" ref={thumbnailBorderRef}>
      {/* Thumbnail Items */}
      <div className="item">
        {/* Your thumbnail item content here */}
        <img src={"https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="Thumbnail Item 1" />
      </div>
      <div className="item">
        {/* Your thumbnail item content here */}
        <img src={"https://images.pexels.com/photos/6387627/pexels-photo-6387627.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="Thumbnail Item 2" />
      </div>
      <div className="item">
        {/* Your thumbnail item content here */}
        <img src={"https://images.pexels.com/photos/1293006/pexels-photo-1293006.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="Thumbnail Item 3" />
      </div>
      <div className="item">
        {/* Your thumbnail item content here */}
        <img src={"https://images.pexels.com/photos/3865895/pexels-photo-3865895.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="Thumbnail Item 4" />
      </div>
      {/* Add more thumbnail items as needed */}
    </div>
    <div className="arrows">
      <button id="prev" ref={prevRef}>
        &lt;
      </button>
      <button id="next" ref={nextRef}>
        &gt;
      </button>
    </div>
    <div className="time" ref={timeRef}></div>
  </div>
  </>
  );
}

export default Slider;
