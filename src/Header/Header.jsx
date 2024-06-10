import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <>
    <header className="headerFormat">
        <img src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg" id="logo" alt="site logo"/>
        <h1><Link to={"/"}>Title</Link></h1>
        <ul>
          <li><Link to={"/create"}>Add new Audition</Link></li>
          <li><Link to={"/AuditionList"} className="link">View auditions</Link></li>
        </ul>
    </header>
    </>
  )
}

export default Header