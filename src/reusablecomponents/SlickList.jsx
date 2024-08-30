import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import React, { Component } from "react";

const SlikList = () => {
      const [transform, setTransform] = useState({ x: 0, y: 0 });

    // const handleMouseMove = (e) => {
    //   const card = e.currentTarget.getBoundingClientRect();
    //   const x = e.clientX - card.left - card.width / 2;
    //   const y = e.clientY - card.top - card.height / 2;
    //   setTransform({ x: x / 5, y: y / 5});
    // };
  
    // const handleMouseLeave = () => {
    //   setTransform({ x: 0, y: 0 });
    // };
    // const style = {
    //   transform: `translate(${transform.x}px, ${transform.y}px)`,
    //   transition: 'transform 0.09s ease-in-out',
    // };
        var settings = {
          infinite: true,
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,      
          cssEase: "linear",
          pauseOnHover: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,

              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                // initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow:1.5 ,
                slidesToScroll: 1
              }
            }
          ]
        };
        return (
          <ul className="slider-container sponser-items"> 
            <Slider {...settings}>
              <li>
                <a href='!#' className='' >
                  <img src='src/assets/images/sponsor_logo_1.png'/>
                </a>
              </li>
              <li>
                <a href='!#' className=''>
                  <img src='src/assets/images/sponsor_logo_2.png'/>
                </a>
              </li>
              <li>
                <a href='!#' className='' >
                  <img src='src/assets/images/sponsor_logo_3.png'/>
                </a>
              </li>
              <li>
                <a href='!#' className='' >
                  <img src='src/assets/images/sponsor_logo_4.png'/>
                </a>
              </li>
              <li>
                <a href='!#' className='' >
                  <img src='src/assets/images/sponsor_logo_5.png'/>
                </a>
              </li>
              <li>
                <a href='!#' className='' >
                  <img src='src/assets/images/sponsor_logo_1.png'/>
                </a>
              </li>
              <li>
                <a href='!#' className=''>
                  <img src='src/assets/images/sponsor_logo_2.png'/>
                </a>
              </li>
              <li>
                <a href='!#' className=''>
                  <img src='src/assets/images/sponsor_logo_3.png'/>
                </a>
              </li>
              <li>
                <a href='!#' className=''>
                  <img src='src/assets/images/sponsor_logo_4.png'/>
                </a>
              </li>
              <li>
                <a href='!#' className=''>
                  <img src='src/assets/images/sponsor_logo_5.png'/>
                </a>
              </li>
            </Slider>
          </ul>
        );
    

}

export default SlikList 

