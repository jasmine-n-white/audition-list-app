import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import {useAuthContext} from '../Context/auth.context'


function Header() {
  const {formData, setFormData} = useAuthContext();

  const handleClickBack = () => {
    setFormData({...formData, position: "", ensemble: "", location: "", deadline: currentDate, audDate: currentDate, website: ""});
  }

  return (
    <>
    <header className="headerFormat">
        <img src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg" id="logo" alt="site logo"/>
        <h1><Link to={"/"}>Title</Link></h1>
        <ul className="navLinks">
          <li><Link to={"/AuditionList"} className="link" onClick={handleClickBack}>View Auditions</Link></li>
        </ul>
        <button id="accountButton">Sign In</button>

    </header>
    </>
  )
}

export default Header