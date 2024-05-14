import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons';

import visa from './img-visa/visa.webp';
import mc from './img-visa/mastercard.webp';
import rupay from './img-visa/rupay.png';
export default function Footer() {
  return (
    <div>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
         

        <div class="sub-title mt-5">
  <div class="footer-title">
    <h5>Quick Links</h5>
  </div>
  <div class="footer-contant">
    <ul class="list-unstyled text-muted fw-light">
      <li class="text-muted mb-2"><a href="https://foodnests.com/page/careers" target="_blank">Careers</a></li>
      <li class="text-muted mb-2"><a href="https://foodnests.com/page/vendor-registration" target="_blank">Vendor Registration</a></li>
      <li class="text-muted mb-2"><a href="https://foodnests.com/page/privacy-policies" target="_blank">Privacy Policies</a></li>
      <li class="text-muted mb-2"><a href="https://foodnests.com/page/terms-and-conditions" target="_blank">Terms and Conditions</a></li>
      <li class="text-muted mb-2"><a href="https://foodnests.com/page/faqs" target="_blank">FAQs</a></li>
    </ul>
  </div>
</div>


<div class="sub-title">
  <div class="footer-title">
      <h5>Contact Us</h5>
      </div> 
      <div className='footer-contnat'>
      <ul className="list-unstyled text-muted fw-light">
        <li className="mb-3">
          <span className="text-muted">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1" />
          </span>&ensp;<a>Lucknow</a>     
        </li>
        <li className="mb-3">
          <span className="text-muted">
            <FontAwesomeIcon icon={faPhone} className="me-1" /> 
          </span>&ensp;<a>9123456789</a>
        </li>
        <li className="mb-3">
          <span className="text-muted">
            <FontAwesomeIcon icon={faEnvelope} className="me-1" /> 
          </span>&ensp;<a>foodnest@gmail.com</a>
        </li>
      </ul>
    </div>
    </div>
     <div className="col-md-4">
      <ul className="list-unstyled text-small">
      <li className="mb-2 d-flex">
  <a href='' className="me-2">
    <img src={visa} alt="Visa" className="square-image" />
  </a>
  <a href='' className="me-2">
    <img src={mc} alt="Mastercard" className="square-image" />
  </a>
  <a href=''>
    <img src={rupay} alt="Rupay" className="square-image" />
  </a>
</li>

  <div className='mt-2'>
    <h4>Keep In Touch</h4>
  </div>

  <li className="mb-2">
  <a href="/" className="me-2">
    <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '24px' }} /> 
  </a>
  <a href="/" className="me-2">
    <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '24px' }} />
  </a>
  <a href="/" className="me-2">
    <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '24px' }} /> 
  </a>
</li>

      </ul>    
    </div>
   
        </footer>
      </div>
      <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        </a>
        <span className="text-muted">© 2022 <i>GoFood</i>, Inc</span>
      </div>
    </div>
  );
}

