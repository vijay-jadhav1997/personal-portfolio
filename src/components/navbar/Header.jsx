import {Link} from 'react-scroll';

import logo from '../../assets/logo.png';
import contactImg from '../../assets/icons/contactImg.png';

import './Header.css';


const Header = () => {
 
  
  return (
    <header className='header'>
      <img className='logo' src={logo} alt="logo" />
      <nav className="nav-menu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={700} className='nav-menu-item' >Home</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-60} duration={700} className='nav-menu-item' >Projects</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={700} className='nav-menu-item' >Skills</Link>
      </nav>
      <button className="contactBtn"
      >
        <img src={contactImg} alt="contact Image" className="contactBtn-img" />
        Contact Me
      </button>
      
    </header>
  )
}

export default Header;