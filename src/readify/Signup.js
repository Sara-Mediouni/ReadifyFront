
import React from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai';


function Signup(){

      return (


<div className="login-form-container">



    <form action="">
   <div style={{alignItems:"baseline"}}> 
        <span>Nom</span>
        <input type="email" name="" className="box" placeholder="Enter your name" id=""/>
        <span>Prenom</span>
        <input type="password" name="" className="box" placeholder="Enter your first name" id=""/>
</div>
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



);
}
export default Signup;