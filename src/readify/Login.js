
import React from 'react';
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
import Signup from './Signup';
import { color } from '@mui/system';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(0),
    
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(0),
  },
  
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[200],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function Login({signup}){
    const [open1, setOpen1] = React.useState(false);
    
    const handleClickOpen1 = () => {
      setOpen1(true);
    };
   
    const handleClose1 = () => {
      setOpen1(false);
    };
      return (


<div className="login-form-container">



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
        <p>don't have an account ? <a  onClick={handleClickOpen1}>Sign up</a></p>
        <BootstrapDialog 
        
       
        open={open1}
        
      >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose1}>
         <h3 style={{fontSize: '2.5rem', textTransform: 'uppercase',textAlign:'center' }}>Sign up</h3>
        </BootstrapDialogTitle>
        <DialogContent dividers>
            
          {signup}
        </DialogContent>
      </BootstrapDialog>
    </form>

</div>



);
}
export default Login;