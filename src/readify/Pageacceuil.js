import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import Footer from './footer';
import Loader from './loader';
import stand from '../image/stand.png';
import deal from '../image/deal-img.jpg';
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
import Arrivals from './Arrivals';

import Swiper from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Featured from './Featured';
import Blogs from './Blogs';
import { FaBook,FaLock } from 'react-icons/fa';
import {MdHeadsetMic } from 'react-icons/md';
import ClientReview from './clientreview';
import Login from './Login';
import Signup from './Signup';

class Pageacceuil extends React.Component{
    constructor(props){
      super(props);
    }
  
  
    render(){
      return (


<div>

    <Navbar signup={<Signup login={<Login/>}/>}
        login={<Login signup={<Signup/>}/>}/>
        
        
    
 

<section className="home" id="home">

    <div className="row">

        <div className="content">
            <h3>Online library</h3>
            <p>Find the books available in our online bookstore! 
                bookstores in Tunisia, online bookstore </p>
            <a href="./home" className="btn">Explore now</a>
        </div>

        <div className="swiper books-slider">
            <div className="swiper-wrapper">
                <a href="#" ><img src={book10} alt=""/></a>
                <a href="#" ><img src={book9} alt=""/></a>
                <a href="#" ><img src={book4} alt=""/></a>
                
            </div>
            <img src={stand} className="stand" alt=""/>
        </div>

    </div>

</section>


<section className="icons-container" style={{width:'160rem'}}>

    <div className="icons">
    
    <i><FaBook style={{color: '#27ae60'}}/> </i>
        <div className="content">
            <h3> free books</h3>
        </div>
    </div>

    <div className="icons">
        <i><FaLock style={{color: '#27ae60'}}/></i>
        <div className="content">
            <h3>  secure connection</h3>
            
        </div>
    </div>


    <div className="icons">
        <i><MdHeadsetMic style={{color: '#27ae60'}}/></i> 
        <div className="content">
            <h3> 24/7 support</h3>
            
        </div>
    </div>

</section>

<Featured/>
<section class="newsletter">

    <form action="">
        <h3>subscribe for latest updates</h3>
        <input type="email" name="" placeholder="enter your email" id="" class="box"/>
        <input type="submit" value="subscribe" class="btn"/>
    </form>

</section>





<Arrivals/>


<section className="deal">

    <div className="content">
        <h3>Book of the week</h3>
        <h1>boooo</h1>
        <p>The most wanted book for this week!
            check it out!
        </p>
        <a href="#" className="btn">Check now</a>
    </div>

    <div className="image">
        <img src={deal} alt=""/>
    </div>

</section>



<ClientReview/>


<Blogs/>








<Footer/>



</div>

);

}}
export default Pageacceuil;




