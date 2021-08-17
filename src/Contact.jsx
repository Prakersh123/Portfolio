import React, {useState} from 'react'

const Contact = () => {
    const [formData, setformData] = useState({
        name:"",
        email:"",
        message:""
    })

const call_me=(e)=>{
    

    setformData({...formData,
            [e.target.id]:e.target.value

    })
}

    const handleSubmit =(e)=>{
        // e.preventDefault();

    }

    return (
        <>
               <u> <h1  style={{textAlign:'center',margin:'20px', textShadow:' 3px 3px 6px  grey'}}>Contact Me</h1></u>
               
               <div className="jumbotron" id="contact">
                    <form onSubmit={handleSubmit} method="post" action=" https://fast-atoll-94938.herokuapp.com/ ">
                        <div className="contactflex" >
                          <label htmlFor="name">
                              Your Name:
                              </label>
                              <input id="name" required name="Name" value={formData.name}
                                onChange={call_me}
                              />  
                              <label htmlFor="email">
                              Your Email:
                              </label>
                              <input id="email" required name="Email" value={formData.email} 
                              onChange={call_me}
                              />  
                              <label htmlFor="message">
                              Message:
                              </label>
                              <textarea id="message" required name="Message" value={formData.message} 
                              onChange={call_me}
                              ></textarea> 
                              <button  type="submit" className="btn btn-primary subbtn" >
                                Send
                              </button>
                              </div>   
                              

                        </form>    
                </div>
               
        </>
    )
}

export default Contact
