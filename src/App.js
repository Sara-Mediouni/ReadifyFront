import logo from './logo.svg';
import './App.css';
import Pageacceuil from './readify/Pageacceuil';
import Navbar from './readify/Navbar';
import Footer from './readify/footer';
import bootstrap from 'bootstrap';
import Login from './readify/Login';
import Blogs from './readify/Blogs';
import Featured from './readify/Featured';
import ClientReview from './readify/clientreview';
import Loader from './readify/loader';
import Arrivals from './readify/Arrivals';
import React from 'react';
import SignUp from './readify/Signup';
import ArrivalsPage from './Pages/ArrivalsPage';
import ResponsiveDrawer from './Pages/SideNav';
import NotFound from './Pages/NotFound';
import '@fortawesome/fontawesome';
import '@mui/material';
import 'bootstrap';
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import BookPage from './Pages/BookPage';
import Choices from './readify/Choices';
import Profile from './Pages/Profile';

class App extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
  return (
    
    <BrowserRouter>
    

    {/* Route components would be visible only at their route */}
    <Switch>
    <Route path="/" component={Pageacceuil} exact />
    <Route path="/books" component={ResponsiveDrawer} exact />
    <Route path="/home" component={HomePage} exact />
    <Route path="/login" component={LoginPage} exact />
    <Route path="/signup" component={SignupPage} exact />
    <Route path="/book" component={BookPage} exact />
    <Route path="/choices" component={Choices} exact />
    <Route path="/profile" component={Profile} exact />
    <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  );
}}

export default App;
