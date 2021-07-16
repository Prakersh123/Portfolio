import React from 'react'
import Grp from './Grp.jpg'
import Ap from './Ap.jpg'
import Code from './Code.jpg'


const About = () => {
    return (

        <div className="aboutDiv" id="aboutDiv">
            
            

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{marginRight:'20px'}}>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Ap} className="d-block w-100" style={{borderRadius:'50%', height:'300px', width:'auto', objectFit:"cover" }} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Grp} className="d-block w-100" style={{borderRadius:'50%', height:'300px', width:'auto', objectFit:"cover"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Code} className="d-block w-100" style={{borderRadius:'50%', height:'300px', width:'auto', objectFit:"cover"}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>





           <div className="aboutdiv" >
            <h1>About Me</h1>
            <p>
            Hey, I'm computer science undergrad pursuing B.Tech from Rajkiya Engineering College , Sonbhadra. I am quite passionate about programming , who loves to solve real life problems and applying his knowledge to come up with a great solution.
            I am always curious about the emerging technologies and their application in our daily life. I aspire to be a great software
            engineer and use my skills to develop something new that can ease human life. Beside study i really enjoy playing chess and badminton. I love to
            travell and enjoy the beauty of nature. 
            </p>
            </div>
           
        </div>
    )
}

export default About
