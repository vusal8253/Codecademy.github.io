import React from 'react'
import './Footer.css';
import {AiOutlineTwitter} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import {BsLinkedin} from 'react-icons/bs';



export const Footer = () => {
  return (
    <div className='container1'>
      <div className='footer'>
      <ul>
        <li><a href='https://www.instagram.com/'><AiFillInstagram size='1.7rem' className = 'icons-Instagram'/></a></li>
        <li><a href='https://www.facebook.com/?locale=az_AZ'><BsFacebook size='1.7rem' className = 'icons-Facebook'/> </a></li>
        <li><a href='https://twitter.com/'><AiOutlineTwitter size='1.7rem' className = 'icinons-Twitter'/></a></li>
        <li><a href='https://www.linkedin.com/'><BsLinkedin size='1.7rem' className = 'icinons-Twitter'/></a></li>
      </ul>
    </div>
    </div>
    
  )
}
