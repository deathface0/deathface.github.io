import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <div className='footerLinks'>
        <a href="https://github.com/deathface0" target='_blank'><FaGithub/></a>
        <a href="" target='_blank'><FaLinkedin/></a>
        <a href="" target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/LeetJTG/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer