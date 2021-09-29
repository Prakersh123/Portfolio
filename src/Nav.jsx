import React from 'react'

const Nav = () => {
    return (
        <>
        <ul className="navUl">
        <li><a href="#home">Home</a></li>
        <li><a href="#aboutDiv" style={{textDecoration:'none'}}>About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact Me</a></li>
        <li><a href="/upload">Upload</a></li>
        </ul>
        </>
    )
}

export default Nav
