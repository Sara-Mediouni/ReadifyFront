import React from "react";
import bootstrap from "bootstrap";
import book8 from '../image/book-3.png';
import book9 from '../image/book-2.png';
import book10 from '../image/book-1.png';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Swiper from 'swiper';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { FaSistrix } from 'react-icons/fa';
import {BsFillSuitHeartFill} from 'react-icons/bs';
import { AiFillEye} from 'react-icons/ai';
import book5 from '../image/book-6.png';
import book6 from '../image/book-5.png';
import book7 from '../image/book-4.png';
function Featured(){
    return (


<section class="featured" id="featured">

<h1 class="heading"> <span>Featured books</span> </h1>

<div class="swiper featured-slider">

<Splide options={ {
    rewind:true,
    pagination:false,
    width : '160rem',
    height:'50rem',
    perPage: 4,
    padding: { left: 0 },
    loop:true,
    trimSpace:true,
          gap          : '1rem',
          autoplay     : true,
          pauseOnHover : false,
          resetProgress: false,
    
  } }
>
  <SplideSlide >
  <div className="swiper-wrapper" >

<div className="swiper-slide box">
    <div className="icons" >
        <a href="#"><FaSistrix/></a>
        <a href="#"><BsFillSuitHeartFill/></a>
        <a href="#" ><AiFillEye/></a>
    </div>
  <div className="image">
    <a href="#"><img src={book10} alt="Image 1" style={{height:' 28rem'}}/></a>
    </div>
    <div className="content">
                    <h3>featured books</h3>
                    <br/>
                    <a href="#" class="btn">Check now</a>
                    
     </div>
    </div>
    </div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="icons" >
        <a href="#"><FaSistrix/></a>
        <a href="#"><BsFillSuitHeartFill/></a>
        <a href="#" ><AiFillEye/></a>
    </div>
  <div className="image">
    <a href="#"><img src={book8} alt="Image 1" style={{height:' 28rem'}}/></a>
    </div>
    <div className="content">
                    <h3>featured books</h3>
                    <br/>
                    <a href="#" class="btn">Check now</a>
                    
     </div>
    </div>
    </div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="icons" >
        <a href="#"><FaSistrix/></a>
        <a href="#"><BsFillSuitHeartFill/></a>
        <a href="#" ><AiFillEye/></a>
    </div>
  <div className="image">
    <a href="#"><img src={book9} alt="Image 1"style={{height:' 28rem'}}/></a>
    </div>
    <div className="content">
                    <h3>featured books</h3>
                    <br/>
                    <a href="#" class="btn">Check now</a>
                    
     </div>
    </div>
    </div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="icons" >
        <a href="#"><FaSistrix/></a>
        <a href="#"><BsFillSuitHeartFill/></a>
        <a href="#" ><AiFillEye/></a>
    </div>
  <div className="image">
    <a href="#"><img src={book5} alt="Image 1" style={{height:' 28rem'}}/></a>
    </div>
    <div className="content">
                    <h3>featured books</h3>
                    <br/>
                    <a href="#" class="btn">Check now</a>
                    
     </div>
    </div>
    </div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="icons" >
        <a href="#"><FaSistrix/></a>
        <a href="#"><BsFillSuitHeartFill/></a>
        <a href="#" ><AiFillEye/></a>
    </div>
  <div className="image">
    <a href="#"><img src={book7} alt="Image 1" style={{height:' 28rem'}}/></a>
    </div>
    <div className="content">
                    <h3>featured books</h3>
                    <br/>
                    <a href="#" class="btn">Check now</a>
                    
     </div>
    </div>
    </div>
  </SplideSlide>
  <SplideSlide >
  <div className="swiper-wrapper">

<div className="swiper-slide box">
    <div className="icons" >
        <a href="#"><FaSistrix /></a>
        <a href="#"><BsFillSuitHeartFill/></a>
        <a href="#" ><AiFillEye/></a>
    </div>
  <div className="image">
    <a href="#"><img src={book9} alt="Image 1" style={{height:' 28rem'}}/></a>
    </div>
    <div className="content">
                    <h3>featured books</h3>
                    <br/>
                    <a href="#" class="btn">Check now</a>
                    
     </div>
    </div>
    </div>
  </SplideSlide>
</Splide>

</div>
</section>

);}
export default Featured;