
import React, { Component } from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import img from '../image/bg-01.jpg';
import { color } from '@mui/system';
import {FaBook} from 'react-icons/fa'
import Footer from '../readify/footer';
import './LoginPage.css';


export default class SignupPage extends Component {
    componentDidMount() {
        document.body.style.backgroundColor = '#703056';
    }
  render() {
    return (
   


       

<div className='container-log' >
    <header className="header" style={{backgroundColor:'#000'}}>

        <div class="header-1">
        
            <a href="./home" className="logo">  <i><FaBook style={{color: '#27ae60'}}/> </i> Readify </a>
            </div>
            </header>
<div className="loginpage-form-container">


<h3 style={{marginBottom:'40px',marginLeft:'140px',fontSize:'3rem',fontWeight:'700',color:'white'}}>Sign up</h3>
    <form action="">
    <span>Nom</span>
        <input type="email" name="" className="box" placeholder="Enter your name" id=""/>
        <span>Prenom</span>
        <input type="password" name="" className="box" placeholder="Enter your first name" id=""/>
   
    <span>Email Address</span>
        <input type="email" name="" className="box" placeholder="Enter your email" id=""/>
        <span>Password</span>
        <input type="password" name="" className="box" placeholder="Enter your password" id=""/>
        <span>Confirm password</span>
        <input type="password" name="" className="box" placeholder="Confirm your password" id=""/>
        <div className="checkbox">
            <input type="checkbox" name="" id="remember-me" style={{top:'0',bottom:'100px'}}/>
            
            <label for="remember-me" style={{fontSize:'1.2rem',marginTop:'10px'}}> I would like to receive personalized selections and the latest news*</label>
        </div>
        <input type="submit" value="Register" className="btn" style={{backgroundColor:'#219150'}}/>
    </form>

</div>
<Footer/>
</div>


);
}}
