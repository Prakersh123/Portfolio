import React from 'react'

const My_skill = () => {
    return (
        <>
       <u> <h1  style={{textAlign:'center',margin:'20px', textShadow:' 2px 2px 5px grey'}}>My Expertise</h1></u>
        <div className="My_skill" >
            
            <div id ="skills" className="my_skill_items" style={{textAlign:'center'}}>
                <h1>Design</h1>
                <i className="devicon-html5-plain-wordmark colored" style={{fontSize:'70px'}} ></i>
                <i className="devicon-bootstrap-plain-wordmark colored" style={{fontSize:'70px'}}></i>
                <i className="devicon-sass-original colored" style={{fontSize:'70px'}}></i>
                <br/>
                <br/>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam minima perspiciatis dolorum pariatur optio quidem ducimus doloribus! Quam voluptatibus, ullam sequi, laudantium eum cum blanditiis repudiandae accusantium molestiae libero error.
                </p>

            </div>


            <div className="my_skill_items" style={{textAlign:'center'}}>
                <h1>Code</h1>
                <i className="devicon-javascript-plain colored" style={{fontSize:'70px'}} ></i>
                <i className="devicon-react-original-wordmark colored" style={{fontSize:'70px'}}></i>
                <i className="devicon-nodejs-plain-wordmark  colored" style={{fontSize:'70px'}}></i>
                <br/>
                <br/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam minima perspiciatis dolorum pariatur optio quidem ducimus doloribus! Quam voluptatibus, ullam sequi, laudantium eum cum blanditiis repudiandae accusantium molestiae libero error.
                </p>
            </div>
            <div className="my_skill_items" style={{textAlign:'center'}}>
                <h1>Tools</h1>
                <i className="devicon-github-original-wordmark colored" style={{fontSize:'70px'}} ></i>
                <i className="devicon-vscode-plain colored" style={{fontSize:'70px'}}></i>
                <i className="devicon-gulp-plain colored" style={{fontSize:'70px'}}></i>
                <br/>
                <br/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam minima perspiciatis dolorum pariatur optio quidem ducimus doloribus! Quam voluptatibus, ullam sequi, laudantium eum cum blanditiis repudiandae accusantium molestiae libero error.
                </p>

            </div>
        </div>
        </>
    )
}

export default My_skill
