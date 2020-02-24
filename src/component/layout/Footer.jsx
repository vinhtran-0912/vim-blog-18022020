import React from 'react';
import { 
  faTwitter,
  faLinkedinIn,
  faMedium,
  faYoutube,
  faFacebook,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../styles/layout/footer.css';

const Footer = () => (
  <div className="footer">
    <img className="footer-logo" src="/images/logo-footer.png" alt="logo" />
    <ul className="social-network social-circle">
      <li><a className="icoLinkedin" href="#0" title="Linkedin"><FontAwesomeIcon className="fa fa-linkedin" icon={faLinkedinIn} /></a></li>
      <li><a className="icoTwitter" href="#0" title="Twitter"><FontAwesomeIcon className="fa fa-twitter" icon={faTwitter}></FontAwesomeIcon></a></li>
      <li><a className="icoMedium" href="#0" title="Medium"><FontAwesomeIcon className="fa fa-medium" icon={faMedium}></FontAwesomeIcon></a></li>
      <li><a className="icoQuora" href="#0" title="Quora"><FontAwesomeIcon className="fa fa-quora" icon={faYoutube}></FontAwesomeIcon></a></li>
      <li><a className="icoFacebook" href="#0" title="Facebook"><FontAwesomeIcon className="fa fa-facebook" icon={faFacebook}></FontAwesomeIcon></a></li>
      <li><a className="icoInstagram" href="#0" title="Instagram"><FontAwesomeIcon className="fa fa-instagram" icon={faInstagram}></FontAwesomeIcon></a></li>
    </ul>
  </div>
)

export default Footer;
