import React, { useState } from 'react'
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
// import { Link as RouterLink } from 'react-router-dom';
import contactImg  from '../../assets/contact.png';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu,setShowMenu] = useState(false);
  return (
    //   <div>navbar</div>
    <nav className="navbar">
  <img src={logo} alt="Logo" className="logo" />
  <div className='desktopMenu'>
    <Link to="intro" activeClass='active' spy={true} offset={-100} duration={500} className='desktopMenuListItem' smooth={true} duration={500} >Home</Link>
    <Link to="skills" activeClass='active' spy={true} offset={-80} duration={500} className='desktopMenuListItem' smooth={true} duration={500} >About</Link>
    <Link to="works" activeClass='active' spy={true} offset={-50} duration={500} className='desktopMenuListItem' smooth={true} duration={500} >Portfolio</Link>
    <Link to="clients" activeClass='active' spy={true} offset={-50} duration={500} className='desktopMenuListItem' smooth={true} duration={500} >Clients</Link>
  </div>
  <button className='desktopMenuBtn' onClick={ () => {
    document.getElementById('contact').scrollIntoView({behavior :'smooth'});
  }}>
    <img src={contactImg} alt=" " className='desktopMenuImg' />
    Contact Me
  </button>
  <img src={menu} alt="Menu" className="mobMenu"  onClick={() =>setShowMenu(!showMenu)}/>
  <div className="navMenu" style={{display: showMenu? 'flex':'none'}} >
    <Link to="intro" activeClass='active' spy={true} offset={-100} duration={500} className="listItem" smooth={true} duration={500} onClick={() =>setShowMenu(!showMenu)}>Home</Link>
    <Link to="skills" activeClass='active' spy={true} offset={-80} duration={500} className="listItem" smooth={true} duration={500} onClick={() =>setShowMenu(!showMenu)}>About</Link>
    <Link to="works" activeClass='active' spy={true} offset={-50} duration={500} className="listItem" smooth={true} duration={500} onClick={() =>setShowMenu(!showMenu)}>Portfolio</Link>
    <Link to="clients" activeClass='active' spy={true} offset={-50} duration={500} className="listItem" smooth={true} duration={500} onClick={() =>setShowMenu(!showMenu)}>Clients</Link>
    <Link to="contact" activeClass='active' spy={true} offset={-50} duration={500} className="listItem" smooth={true} duration={500} onClick={() =>setShowMenu(!showMenu)}>Contact</Link>
  </div>

</nav>
  )
}

export default Navbar