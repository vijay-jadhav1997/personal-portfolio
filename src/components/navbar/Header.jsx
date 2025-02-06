import { useState } from 'react';
import {Link} from 'react-scroll';

import logo from '../../assets/logo.png';
import contactImg from '../../assets/icons/contactImg.png';

import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function menuHandler() {
    // console.log("!!!...Jay Jay Ram Krushna Hari...!!!");
    
    if(!isMenuOpen) {
      // console.log("!!!...Jay Vitthal Shree Vitthal...!!!");
      setIsMenuOpen(true)
    }
    else {
      // console.log("!!!...Shree Dnyanoba Mauli Tukaram...!!!");
      setIsMenuOpen(false)
    }
  }
  
  return (
    <header className='header'>
      <img className='logo' src={logo} alt="logo" />
      <nav className={ isMenuOpen ? "nav-menu open" : "nav-menu"}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={700} className='nav-menu-item' onClick={menuHandler} >Home</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-60} duration={700} className='nav-menu-item' onClick={menuHandler} >Projects</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={700} className='nav-menu-item' onClick={menuHandler} >Skills</Link>
        <Link activeClass='active' to='codepen-examples' spy={true} smooth={true} offset={-50} duration={700} className='nav-menu-item' onClick={menuHandler} >CodePen</Link>
      </nav>
      <button className="contactBtn"
        onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior:'smooth'})
        }}
      >
        <img src={contactImg} alt="contact Image" className="contactBtn-img" />
        Contact Me
      </button>
      <div className={ isMenuOpen ? "menu-wrapper open" : "menu-wrapper"} onClick={menuHandler}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  )
}

export default Header;