import {Link}  from 'react-scroll';

import { PiHandbagSimpleFill } from "react-icons/pi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaCodepen, FaArrowDownLong } from "react-icons/fa6";
// import { IoIosMail } from "react-icons/io";

import './Intro.css'

import profImg from '../../assets/vj-bg.png'




function Intro() {
  return (
    <section id='intro' className="intro">
      <div className="intro-details">
        <span className="hello">Namaste, </span>
        <span className="intro-text">
          I&apos;m
          <span className="intro-name">Vijay Jadhav</span><br />
          <span className="intro-profession">a full-stack developer</span>
        </span>
        <p className="intro-para">
          I am an aspiring web developer with entry-level professional skills in Web development. As self-motivated developer seeking an opportunity to work in a challenging environment to prove my programming skills and utilize my knowledge of web dev technologies for the growth of the organization.
        </p>
        <Link className='hireme-link' to='contact' spy={true} smooth={true} offset={-50} duration={700}>
          <button className='hireme-btn'><PiHandbagSimpleFill className='bag-icon' /> Hire me</button>
        </Link>
        <div className="social-medias">
          <a href='https://github.com/vijay-jadhav1997' target='_blank'>
            <div className="button">
              <div className="icon-wrapper">
                <FaGithub className='icon' />
              </div>
              <span>Github</span>
            </div>
          </a>

          <a href='https://www.linkedin.com/in/vijay-jadhav1997' target='_blank'>
            <div className="button">
              <div className="icon-wrapper">
                <FaLinkedinIn className='icon' />
              </div>
              <span>LinkedIn</span>
            </div>
          </a>

          <a href='https://codepen.io/VIJAY-JADHAV-the-bashful/pens/showcase' target='_blank'>
            <div className="button">
              <div className="icon-wrapper">
                <FaCodepen className='icon' />
              </div>
              <span>Codepen</span>
            </div>
          </a>

          <a href='https://x.com/VijayJadha93653' target='_blank'>
            <div className="button">
              <div className="icon-wrapper">
                <FaXTwitter className='icon' />
              </div>
              <span>X (Twitter)</span>
            </div>
          </a>
        </div>
      </div>
      <img className='bg-img' src={profImg} alt="Profile background Image" />

      <Link className='latest-work-link' to='projects' spy={true} smooth={true} offset={-60} duration={700}>
        <div className="pointer">
          Latest Work
          <FaArrowDownLong className='arrow' />
        </div>
      </Link>
      
    </section>
  )
}

export default Intro