import './FooterStyle.css';
import {FaHome, FaPhone,FaMailBulk, FaFacebook, FaTwitter, FaLinkedinIn} from 'react-icons/fa';
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
            <div className='location'>
                <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            <div>
                <p>Shrey Apartment</p>
                <p>Anand,Gujarat</p>
            </div>
            </div>
            <div className='phone'>
                <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            +91 7984474926</h4>
            </div>
            <div className='email'>
                <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            harsh97115@gmail.com</h4>
            </div>
        </div>
        <div className='right'>
          <h4>About the Company</h4>
          <p>This is me Harsh Mehta,CEO & founder of TechnoExpert.I enjoy discussing new projects & ideas. </p>
          <div className='social'>
          <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/>
          <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/>
          <FaLinkedinIn size={30} style={{color:"#fff",marginRight:"1rem"}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
