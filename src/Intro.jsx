import React from 'react'
import My_img from './My_img.jpg'
import { DiGithubAlt } from 'react-icons/di';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { SiCodechef } from 'react-icons/si';

import { FaArrowUp } from 'react-icons/fa';


const Intro = () => {
    return (
        <div className="nameDiv" id="home">
            {/* <h2>Hey, there!!!</h2> */}
            <div className="namediv">
            <h2 > Hey there!!!, I'm  </h2>
            <h1 className="myName">Prakersh Kumar Arya</h1>
            <h3>Competitive Programmer | Web Developer</h3>
            {/* <h4>Follow me ⤵️</h4> */}
            <ul className="socialmediaUl">
                <li><a className="int" href="https://in.linkedin.com/in/prakersh-kumar-arya-b42255194?trk=public_profile_browsemap_mini-profile_title" target="_blank" rel="noreferrer"><FaLinkedinIn/> </a>     </li>
                <li><a className="int" href="https://github.com/Prakersh123" target="_blank" rel="noreferrer" ><DiGithubAlt/> </a>     </li>
                <li><a className="int" href="https://www.instagram.com/prakersharya/" target="_blank" rel="noreferrer" ><FaInstagram/>   </a>     </li>
                <li><a className="int" href="https://www.codechef.com/users/prakersh" target="_blank"rel="noreferrer" ><SiCodechef/>   </a>     </li>

             



            </ul>
            <h6> <u>  Follow Me</u> <FaArrowUp/> </h6>
            </div>
            <img src={My_img} className="myPhoto" alt="" />
            {/* <h1>d</h1> */}
            </div>
    )
}

export default Intro
