import React from 'react'
import Coding_ninja from './Coding_ninja.jpg'
import Candy from './Candy.jpg'
import Sudoku from './Sudoku.jpg'


const My_projects = () => {
    return (
        <>
       <u> <h1  style={{textAlign:'center',margin:'20px', textShadow:' 2px 2px 5px grey'}}>My Projects</h1></u>

        <div className="my_project">
            <img className="my_project_items" src={Coding_ninja}  alt="not_found"  style={{borderRadius:'2%', height:'200px', width:'auto', objectFit:"cover"}}  />
            <div className="my_project_items arya" >
                <h1>Coding Ninja's Page Replication</h1>
                <p>
                    I made this project using ReactJS. In this project I am using API of coding Ninjas to fetch event details.
                    Then using those details all the above cards are created automatically. We can select options in nav bar to filter
                    the result accordingly. It is fully responsive webpage, so it's also look good in mobile as well.
                </p>
                <button className="btn btn-outline-primary"><a className="arya2" target="_blank" rel="noreferrer" href="https://coding-ninjas-event-page-replicated.vercel.app/" style={{textDecoration:'none'}}>Watch it Live</a></button>
            </div>
            
            
            
        </div>
        <div className="my_project">
            <div className="my_project_items arya" >
                <h1>Candy Crush</h1>
                <p>
                    I made this project using HTML , CSS and JavaScript. This game will work fine and will display nicer only in Desktop mode.
                    I tried to clone the candy crush game. I used on drop and related events to make this game work. The major work was done using JavaScript.
                    It was a good practice for me in the journey of Web Developer.
                    
                </p>
                <button className="btn btn-outline-primary"><a className="arya2" target="_blank"  rel="noreferrer"href="https://prakersh123.github.io/CandyCrush/" style={{textDecoration:'none'}}>Watch it Live</a></button>
            </div>
            <img className="my_project_items" src={Candy}  alt="not_found"  style={{borderRadius:'2%', height:'200px', width:'auto', objectFit:"cover"}}  />

            
            
            
        </div>
        <div className="my_project">
        <img className="my_project_items" src={Sudoku}  alt="not_found"  style={{borderRadius:'2%', height:'200px', width:'auto', objectFit:"cover"}}  />

            <div className="my_project_items arya" >
                <h1>Sudoku Solver</h1>
                <p>
                    I made this project using HTML , CSS and JavaScript. This game will work fine and will display nicer only in Desktop mode.
                   After learning the concepts of backtracking i want to implement it , so i made this project. Here you will enter Your
                   initial sudoku state and then it will solve that soduku using Backtracking , will give you final answer.
                    
                </p>
                <button className="btn btn-outline-danger"><a className="arya2" target="_blank"  rel="noreferrer"href="https://prakersh123.github.io/Sudoku/" style={{textDecoration:'none',color:'n'}}>Watch it Live</a></button>
            </div>

            
            
            
        </div>
        </>
    )
}

export default My_projects
