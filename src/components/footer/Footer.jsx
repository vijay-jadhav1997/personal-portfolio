import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaCodepen } from "react-icons/fa6";

import './Footer.css'


function Footer() {
  return (
    <footer>
      <h3>Vijay Jadhav</h3>
      <div className="footer-social-medias">
        <a href='https://github.com/vijay-jadhav1997' target="_blank"><FaGithub className='icon' /> </a>
        <a href='https://www.linkedin.com/in/vijay-jadhav1997' target="_blank"><FaLinkedinIn className='icon' /> </a>
        <a href='https://codepen.io/VIJAY-JADHAV-the-bashful/pens/public' target="_blank"><FaCodepen className='icon' /> </a>
        <a href='https://x.com/VijayJadha93653' target="_blank"><FaXTwitter className='icon' /> </a>
        <a href='https://www.youtube.com/@VijayJadhav-pw2jn' target="_blank"><FaYoutube className='icon' /> </a>
      </div>
      <span className="">© All right reserved</span>
    </footer>
  )
}

export default Footer