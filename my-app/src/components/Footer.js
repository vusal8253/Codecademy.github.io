import React from 'react'
import './Footer.css';
import {AiOutlineTwitter} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import {BsLinkedin} from 'react-icons/bs';



export const Footer = () => {
  return (
    <div className='footer'>
      <ul>
        <li><AiFillInstagram size='1.5rem' className = 'icons-Instagram'/></li>
        <li><BsFacebook size='1.5rem' className = 'icons-Facebook'/> </li>
        <li><AiOutlineTwitter size='1.5rem' className = 'icinons-Twitter'/></li>
        <li><BsLinkedin size='1.5rem' className = 'icinons-Twitter'/></li>
      </ul>
    </div>
  )
}
