import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import {useEffect} from 'react';
import {useAuthContext} from '../Context/auth.context'


function Header() {
  const {formData, setFormData, showMenu, setShowMenu} = useAuthContext();
  const handleClickBack = () => {
    setFormData({...formData, position: "", ensemble: "", location: "", deadline: currentDate, audDate: currentDate, website: ""});
  }

  return (
    <>
    <header className="headerFormat">
        <img src="https://img.freepik.com/premium-photo/colorful-music-logo-design-downloade_555090-4358.jpg" id="logo" alt="a picture of a colorful treble clef"/>
        <h2 id="title"><Link to={"/"}>Audition Maestro</Link></h2>
        <ul className="navLinks">
          <li><p><Link to={"/"}>Home</Link></p></li>
          <li><p><Link to={"/AuditionList"} className="link" onClick={handleClickBack}>Auditions</Link></p></li>
          <li><p>Contact</p></li>
        </ul>
        <button id="accountButton">Account</button>

        <div className="navMobile">
          <div className="mobileMenuButton" onClick={()=>setShowMenu(showMenu => !showMenu)}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          {showMenu && (<ul className="dropdown">
            <li><p><Link to={"/"}>Home</Link></p></li>
            <li><Link to={"/AuditionList"} className="link" onClick={handleClickBack}>Auditions</Link></li>
            <li>Contact</li>
            <li>Account</li>
          </ul>)}
        </div>

    </header>
    </>
  )
}

export default Header