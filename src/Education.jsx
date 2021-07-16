import React from 'react'

const Education = () => {
    return (
        <>
       <u> <h1  style={{textAlign:'center',margin:'20px', textShadow:' 3px 3px 6px  grey'}}>Education</h1></u>

        <div className="Education" id="education">
            <div className="eduDiv">
                    <div style={{textAlign:'center'}} >
                    <h1><img alt="sorry" className="edu_img" src="https://i.ya-webdesign.com/images/school-icon-png-5.png"/></h1>
                    <h3>Sanatan Dharam Inter College, Varanasi</h3>
                    <h6>Secondary Education, U.P.</h6>

                    </div>
                    <div style={{textAlign:'center'}} >
                    <h1><img alt="sorry" className="edu_img" src=" https://heylangu.com/images/education-icon-home.svg?v=1548322879110"/></h1>
                    <h3>Sanatan Dharam Inter College, Varanasi</h3>

                    <h6>Higher Secondary Education, U.P.</h6>
                    </div>
                    <div style={{textAlign:'center'}} >
                    <h1><img alt="sorry" className="edu_img" src="https://image.flaticon.com/icons/png/512/42/42972.png"/></h1>

                        <h3>Rajkiya Engineering College, Sonbhadra</h3>
                        <h6>Computer Sci. & Engineering</h6>

                    </div>

            </div>
        </div>
        </>
    )
}

export default Education
