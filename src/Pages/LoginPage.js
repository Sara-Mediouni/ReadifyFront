

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
import React, { Component } from 'react'

export default class LoginPage extends Component {
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


<h3 style={{marginBottom:'40px',marginLeft:'160px',fontSize:'3rem',fontWeight:'700',color:'white'}}>Login</h3>
    <form action="">
        
        <span>Email Address</span>
        <input type="email" name="" className="box" placeholder="enter your email" id=""/>
        <span>password</span>
        <input type="password" name="" className="box" placeholder="enter your password" id=""/>
        <div className="checkbox">
            <input type="checkbox" name="" id="remember-me"/>
            <label for="remember-me"> remember me</label>
        </div>
        <input type="submit" value="Login" className="btn"style={{backgroundColor:'#219150'}}/>
        <p>forget password ? <a href="#">click here</a></p>
        <p>don't have an account ? <a  >Sign up</a></p>
     
    </form>

</div>
<Footer/>
</div>


);
    
    
    }
}

