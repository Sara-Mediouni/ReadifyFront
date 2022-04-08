import React, { Component } from 'react';
import BookSide from './SideForBook';
import ResponsiveDrawer from './SideNav';
import book10 from '../image/book-1.png';
export default class BookPage extends Component {
    componentDidMount() {
        document.body.style.backgroundColor = '#5555552b';
    }
  render() {
    return (
        <div id="wrapper">

    

        <div id="content-wrapper" class="d-flex flex-column">

    <BookSide />
    <div className='content'>
        <div style={{left:'30rem',position:'absolute',height:'100%',alignItems:'baseline'}}>

   <h1 style={{color: '#444',fontWeight: '600',fontSize: '2.8rem',fontFamily: '"TT Commons",sans-serif',lineHeight: '3.2rem',letterSpacing: '0'}}>Quartier Libre</h1> 
   <h1 style={{color: '#444',fontWeight: '200',fontSize: '1.5rem',fontFamily: '"TT Commons",sans-serif',lineHeight: '3.2rem',letterSpacing: '0'}}>Auteur:</h1> 
   <hr  style={{
       marginTop:'40px',
            color: '#adb5bd',
            backgroundColor: '#adb5bd',
            height: 1
        }}/>
   <a href='' className='btn-book'style={{marginTop:'15%'}}>Read Now</a>
   <hr  style={{
       marginTop:'40px',
            color: '#adb5bd',
            backgroundColor: '#adb5bd',
            height: 1
        }}/>
   <p style={{width:'60rem',fontWeight: '400',fontFamily: 'Roboto Condensed',
    lineHeight:'2rem' ,
    letterSpacing: '0',
    color: '#444',
    fontSize: '1.7rem',marginTop:'20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit massa ut odio varius, et viverra lorem sollicitudin. Cras orci leo, fringilla et pretium eget, hendrerit finibus nisi. Suspendisse consequat, elit id fringilla viverra, nisi ex venenatis purus, sit amet feugiat urna sapien non sem. Nulla suscipit et ligula sed viverra. Praesent eu eros lobortis, tempor sapien id, congue dui. Nullam ultrices ultrices pulvinar. Donec fermentum magna non porta eleifend. Aenean ultricies erat in nulla consectetur fringilla in et turpis. Nulla facilisi. Duis tristique non arcu vitae interdum. In sed ex iaculis, convallis velit eget, vehicula purus. Vivamus cursus leo eu nunc commodo, quis hendrerit sem luctus. Curabitur auctor sem quis urna mollis, eget laoreet purus placerat. Nam viverra aliquet turpis sed accumsan.</p>
    <hr  style={{
       marginTop:'40px',
            color: '#adb5bd',
            backgroundColor: '#adb5bd',
            height: 1
        }}/>
        <div style={{position:'absolute',alignItems:'right'}}>
        <p className='specifbook'style={{width:'60rem',fontWeight: '200',fontFamily: 'Roboto Condensed',marginLeft:'20px',
    lineHeight:'2rem' ,
    letterSpacing: '0',
    color: '#adb5bd',
    fontSize: '1.4rem',marginTop:'20px',float:'left',position:'relative'}}>Language</p>
    <p className='specifbook'style={{width:'60rem',fontWeight: '200',fontFamily: 'Roboto Condensed',marginLeft:'20px',
    lineHeight:'2rem' ,
    letterSpacing: '0',
    color: '#444',
    fontSize: '1.4rem',marginTop:'10px',float:'left',position:'relative'}}>French</p>
    <div className = "vertical" style={{borderLeft: '1px solid #adb5bd', height: '30px',position:'absolute', left: '20%',top:'30px'}}></div>

<p className='specifbook' style={{width:'60rem',fontWeight: '200',fontFamily: 'Roboto Condensed',marginLeft:'180px',
    lineHeight:'2rem' ,
    letterSpacing: '0',
    color: '#adb5bd',
    alignContent:'right',
    fontSize: '1.4rem',marginTop:'20px',float:'right',position:'absolute'}}>Pages</p>
    <div className = "vertical" style={{borderLeft: '1px solid #adb5bd', height: '30px',position:'absolute', left: '45%',top:'30px'}}></div>

    <p className='specifbook' style={{width:'60rem',fontWeight: '200',fontFamily: 'Roboto Condensed',marginLeft:'340px',
    lineHeight:'2rem' ,
    letterSpacing: '0',
    color: '#adb5bd',
    alignContent:'right',
    fontSize: '1.4rem',marginTop:'20px',float:'right',position:'absolute'}}>Date</p>
    <div className = "vertical" style={{borderLeft: '1px solid #adb5bd', height: '30px',position:'absolute', left: '70%',top:'30px'}}></div>
    <p className='specifbook' style={{width:'60rem',fontWeight: '200',fontFamily: 'Roboto Condensed',marginLeft:'500px',
    lineHeight:'2rem' ,
    letterSpacing: '0',
    color: '#adb5bd',
    alignContent:'right',
    fontSize: '1.4rem',marginTop:'20px',float:'right',position:'absolute'}}>Size</p>
    
</div>
<hr  style={{
       marginTop:'10rem',
            color: '#adb5bd',
            backgroundColor: '#adb5bd',
            height: 1
        }}/>
        <div className='commentaire' style={{left:'0',position:'absolute',marginTop:'30px'}}><h2 style={{color: '#444',fontWeight: '600',fontSize: '2.2rem',fontFamily: '"TT Commons",sans-serif',lineHeight: '3.2rem',letterSpacing: '0'}}>Commentaires</h2></div>
</div>
<div style={{right:'0',top:'0',position:'fixed',height:'100%',width:'60rem',background:'radial-gradient(79.43% 144.53% at 33.33% 86.67%,rgba(233,81,100,.4) 53.22%,rgba(60,52,179,.4) 85.79%)'}}>
<img style={{right:'10rem',position:'fixed',height:'50rem',marginTop:'100px'}}src={book10}></img>

</div>

    </div>
    </div>
    </div>
    )
  }
}
