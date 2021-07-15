import React from 'react'
import My_img from './My_img.jpg'
import { DiGithubAlt } from 'react-icons/di';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { SiCodechef } from 'react-icons/si';




const Intro = () => {
    return (
        <div className="nameDiv">
            {/* <h2>Hey, there!!!</h2> */}
            <div className="namediv">
            <h2 > Hey there!!!, I'm  </h2>
            <h1 className="myName">Prakersh Kumar Arya</h1>
            <h3>Competitive Programmer | Web Developer</h3>
            <ul className="socialmediaUl">
                <li><FaLinkedinIn/>      </li>
                <li><DiGithubAlt/>      </li>
                <li><FaInstagram/>      </li>
                <li><SiCodechef/>      </li>



            </ul>
            </div>
            <img src={My_img} className="myPhoto" alt="" />
            {/* <h1>d</h1> */}
            </div>
    )
}

export default Intro
