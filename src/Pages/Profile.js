import React from 'react';
import './profile.css';
import {FaBook} from 'react-icons/fa';
import './LoginPage.css';
import Footer from '../readify/footer';
class Profile extends React.Component{
    constructor(props){
      super(props);
    }
    componentDidMount() {
      document.body.style.backgroundColor = '#fff';
  }
  
    render(){
      return (
  <div id="__nuxt">
  <div id="__layout">
   
  <section> <header className="header bg-grey-100" style={{paddingTop:'0',top:'0',position:'absolute',width:'80%'}}>

<div className="header-1">

    <a href="./home" className="logo">  <i><FaBook style={{color: '#27ae60'}}/> </i> Readify </a>
    </div>
    </header>
  <div>
  
 <div className="container"><div className="row"><aside className="user__nav col-sm-12 col-md-4 col-lg-3 mt-32"><p className="user__see-nav d-block d-md-none">
  Accéder au menu de votre profil
</p> <div><p className="subtitle">
  Sarah Jedlaoui
</p> </div> <ul className="profile__nav"><li className="mb-16"><a href="Profile.html" className="text--link link--exact link--active" aria-current="page">
      Mon espace personnel
    </a></li> <li className="mb-16"><a href="edit.html" className="text--link">
      Mon profil
    </a></li> <li className="mb-16"><a href="mdp.html" className="text--link link--prefered">
      Changer mon mot de passe
    </a></li>  <li className="mb-16"><a href="https://support.youboox.fr" target="_blank" className="text--link">
      Besoin d'aide
    </a></li></ul> <button className="btn-nav2">
  Déconnexion
</button></aside> <div className="col-sm-12 col-md-8 col-lg-9"><div><div className="user-profile mt-md-32"><h1 className="headline text-primary mb-40">
    Mon espace personnel
  </h1> <section className="bg-surface-low-4 mb-40 br-16 p-24 edit"><h2 className="user-profile__title title-lg">
      Mon profil
    </h2> <div className="table-responsive"><table className="table table-borderless"><tr><th className="text-on-surface-low pl-0">
            Pseudo
          </th> <td className="text-left text-sm-right">
            Sarah Jedlaoui
          </td></tr> <tr><th className="text-on-surface-low pl-0">
            Email
          </th> <td className="text-left text-sm-right">
           sara@gmail.fr
          </td></tr> <tr><th className="text-on-surface-low pl-0">
            Langue(s)
          </th> <td className="capitalize text-left text-sm-right">
            français
          </td></tr></table></div>
           <div className="button-group--left mt-16"><a href="/fr/profile/edit" className="btn-nav2">
        Mon profil
      </a></div></section> </div>
      </div>

<loom-container id="lo-engage-ext-container">
<loom-shadow classname="resolved">
</loom-shadow></loom-container>
<loom-container id="lo-companion-container">
<loom-shadow classname="resolved"></loom-shadow></loom-container>
</div>
</div>
</div>
</div>

</section>

</div><Footer/>
</div>

);}
}
export default Profile;