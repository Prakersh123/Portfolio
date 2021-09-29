import React, { useState } from 'react'
const axios = require("axios")


const Uploadnotification = () => {

    const [formData, setformData] = useState({
        type:"circulars",
        title:"",
        file_url:""
    })

    const formhandler=(e)=>{
        setformData({...formData,
        [e.target.name]:e.target.value
        })
    }

    const formhandlerfile=(e)=>{
        setformData({...formData,
        [e.target.name]:e.target.files[0]
        })
    }
    const formSubmit= async (e)=>{

        e.preventDefault();
        const dummyForm = new FormData();
        dummyForm.append('title',formData.title);
        dummyForm.append('file_url',formData.file_url);
        dummyForm.append('type',formData.type);
        console.log("ara",formData)
      const res =   await  axios.post("https://fast-atoll-94938.herokuapp.com/upload",dummyForm,{
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        if(res.status===200)
        {
            setformData({});
            alert("successfully uploaded")
        }
    }
            

    return (
        <div>
            <form method="post" enctype="multipart/form-data" onSubmit={formSubmit} >
               <label>
                   <input type="radio" name="type"  value="circulars" onChange={formhandler} /> Circulars
                   <input type="radio" name="type" value="news"onChange={formhandler} /> News
                   </label>
                   <br/>
               
                <label>
                    Please enter the title of the file
                <input type="text" name="title"  required onChange={formhandler} />
                </label>
            <br/>
                <label>
                    Please enter the title of the file
                <input type="file" name="file_url"  onChange={formhandlerfile}  required/>
                </label>
                <br/>
                <button type="submit">Upload</button>
            </form>

        </div>
    )
}

export default Uploadnotification
