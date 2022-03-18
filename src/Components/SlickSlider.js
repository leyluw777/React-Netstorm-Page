import Slider from "react-slick";
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Avatar1 from './../img/ava1.jpg';
import Avatar2 from './../img/ava2.jpg';
import Avatar3 from './../img/ava3.jpg';
import Avatar4 from './../img/ava4.jpg';
import Avatar5 from './../img/ava5.jpg';
import Avatar6 from './../img/ava6.jpg';

import Slider1 from './../img/slider1.jpg';
import Slider2 from './../img/slider2.jpg';
import Slider3 from './../img/slider3.jpg';
import Slider4 from './../img/slider4.jpg';
import Slider5 from './../img/slider5.jpg';
import Slider6 from './../img/slider6.jpg';



const SliderContent = (props) => {
    return (
        <div className="slideContent">
            <div className="slide-img">
            <img src={props.image} alt="" className="slideImg"/>
            </div>
            <div className="counter">
                <div className="days">
                    <p>DAYS</p>
                    <p>122</p>
                </div>
                <div className="hours">
                    <p> HOURS</p>
                    <p> 09</p>
                </div>
                <div className="minutes">
                    <p>MINUTES</p>
                    <p>5</p>
                </div>
                <div className="seconds">
                    <p>SECONDS</p>
                    <p>55</p>
                </div>
            </div>

            <h5>{props.name}</h5>
            <div className="author-info">
                <img src={props.avatar} alt="" className="avatarImg" />
                <p>{props.email}</p>
            </div>

            <div className="btm-info">
                <p> {props.bnb} BNB</p>
                <p>1 of 1</p>
            </div>
        </div>
    )
}

export class SlickSlider extends Component {
    render() {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
         
         
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                 
                }
              },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
        return (
            <div className="slider-section">
                <div className="container">
                    
          <div className="slickSlider">

          <div className="row ">

            <p className="content-p">AUCTIONS </p>
            <div className="slider-head">
                <h3> Live Auctions</h3>
                <p> View all
                <FontAwesomeIcon icon={faArrowRight} style = {{"margin-left": "5px"}}/>
                </p>
            </div>
            </div>
            <div className="row">
            <Slider {...settings}>
              <div className = "slide-1">
                <SliderContent image={Slider1} name = "Virtual Worlds" avatar={Avatar1} email= "@Richard" bnb = "1.5" />
              </div>

              <div className = "slide-2">
              <SliderContent image={Slider2} name = "Collectibles" avatar={Avatar2} email= "@JohnDeo" bnb = "2.7" />
              </div>


              <div className = "slide-3">
              <SliderContent image={Slider3} name = "Arts" avatar={Avatar3} email= "@MKHblots" bnb = "3.6" />
              </div>


              <div className = "slide-4">
              <SliderContent image={Slider4} name = "Robotic arts" avatar={Avatar4} email= "@RioArham" bnb = "1.8" />
              </div>


              <div className = "slide-5">
              <SliderContent image={Slider5} name = "Design Illusions" avatar={Avatar5} email= "@ArtNox" bnb = "1.7" />
              </div>



              <div className = "slide-6">
              <SliderContent image={Slider6} name = "Photographer" avatar={Avatar6} email= "@Junaid" bnb = "1.9" />
              </div>
              
            </Slider>
            </div>
          </div>


          </div>
          </div>
        );
      }
}

export default SlickSlider
