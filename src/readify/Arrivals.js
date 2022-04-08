
import React from "react";
import bootstrap from "bootstrap";
import book1 from '../image/book-10.png';
import book2 from '../image/book-9.png';
import book3 from '../image/book-8.png';
import book4 from '../image/book-7.png';
import book5 from '../image/book-6.png';
import book6 from '../image/book-5.png';
import book7 from '../image/book-4.png';
import book8 from '../image/book-3.png';
import book9 from '../image/book-2.png';
import book10 from '../image/book-1.png';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import {FaStar,FaStarHalfAlt} from 'react-icons/fa';
import {BsFillStarFill} from 'react-icons/bs';


function Arrivals(){
    return (

<section className="arrivals" id="arrivals">

    <h1 className="heading"> <span>new arrivals</span> </h1>
    <div className="swiper arrivals-slider">
     

    <Splide options={ {
    rewind:true,
    pagination:false,
    width : '360rem',
    height:'22rem',
    perPage: 3,
    padding: { left: 0 },
    
    trimSpace:true,
          gap          : '1rem',
          autoplay     : true,
          pauseOnHover : false,
          resetProgress: false,
    
  } }
>
  <SplideSlide >
  
  <div className="swiper-wrapper">

  <a href="#" className="swiper-slide box">
                <div className="image">
                    <img src={book8} alt=""/>
                </div>
                <div className="content">
                <h3>New Arrivals</h3>
                <br/>
                    
                    <div className="stars">
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                    <i><FaStarHalfAlt style={{color: '#27ae60'}}/></i>
                    </div>
                </div>
            </a>

            
    </div>
 
  </SplideSlide>

  <SplideSlide >
  
  <div className="swiper-wrapper">

  <a href="#" className="swiper-slide box">
                <div className="image">
                    <img src={book1} alt=""/>
                </div>
                <div className="content">
                <h3>New Arrivals</h3>
                    
                <br/>
                    <div className="stars">
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                    <i><FaStarHalfAlt style={{color: '#27ae60'}}/></i>
                    </div>
                </div>
            </a>

            
    </div>
  
  </SplideSlide>
  
  <SplideSlide >
  
  <div className="swiper-wrapper">

  <a href="#" className="swiper-slide box">
                <div className="image">
                    <img src={book2} alt=""/>
                </div>
                <div className="content">
                <h3>New Arrivals</h3>
                    
                <br/>
                    <div className="stars">
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                    <i><FaStarHalfAlt style={{color: '#27ae60'}}/></i>
                    </div>
                </div>
            </a>

            </div>
    
  </SplideSlide>
  
  <SplideSlide >
  
  <div className="swiper-wrapper">

  <a href="#" className="swiper-slide box">
                <div className="image">
                    <img src={book3} alt=""/>
                </div>
                <div className="content">
                <h3>New Arrivals</h3>
                    
                <br/>
                    <div className="stars">
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                    <i><FaStarHalfAlt style={{color: '#27ae60'}}/></i>
                    </div>
                </div>
            </a>

            </div>
    
  </SplideSlide>
  </Splide>
  <Splide options={ {
    rewind:true,
    pagination:false,
    width : '360rem',
    height:'21rem',
    perPage: 3,
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
  
  <div className="swiper-wrapper">

  <a href="#" className="swiper-slide box">
                <div className="image">
                    <img src={book4} alt=""/>
                </div>
                <div className="content">
                <h3>New Arrivals</h3>
                    
                    <br/>
                    <div className="stars">
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                    <i><FaStarHalfAlt style={{color: '#27ae60'}}/></i>
                    </div>
                </div>
            </a>

            
    </div>
 
  </SplideSlide>

  <SplideSlide >
  
  <div className="swiper-wrapper">

  <a href="#" className="swiper-slide box">
                <div className="image">
                    <img src={book5} alt=""/>
                </div>
                <div className="content">
                <h3>New Arrivals</h3>
                <br/>
                    
                    <div className="stars">
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                    <i><FaStarHalfAlt style={{color: '#27ae60'}}/></i>
                    </div>
                </div>
            </a>

            
    </div>
  
  </SplideSlide>
  
  <SplideSlide >
  
  <div className="swiper-wrapper">

  <a href="#" className="swiper-slide box">
                <div className="image">
                    <img src={book6} alt=""/>
                </div>
                <div className="content">
                <h3>New Arrivals</h3>
                    
                <br/>
                    <div className="stars">
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                    <i><FaStarHalfAlt style={{color: '#27ae60'}}/></i>
                    </div>
                </div>
            </a>

            </div>
    
  </SplideSlide>
  
  <SplideSlide >
  
  <div className="swiper-wrapper">

  <a href="#" className="swiper-slide box">
                <div className="image">
                    <img src={book7} alt=""/>
                </div>
                <div className="content">
                <h3>New Arrivals</h3>
                    
                    
                    <div className="stars">
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                   <i><FaStar style={{color: '#27ae60'}}/></i> 
                    <i><FaStarHalfAlt style={{color: '#27ae60'}}/></i>
                    </div>
                </div>
            </a>

            </div>
    
  </SplideSlide>
  </Splide>
  <header><a href='' style={{marginTop:'2rem',right:'20rem',position:'absolute',fontSize:'1.5rem',fontWeight:'300'}}>See more</a></header>
</div>
</section>
);}
export default Arrivals;