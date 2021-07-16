import React from 'react'

const Contact = () => {
    return (
        <div className="container">
                <form>
                    <label style={{display:'block'}}>
                        Your Name:
                        <input type="text"/>
                    </label>
                    <label  style={{display:'block'}}>
                        Your Email:
                        <input type="email"/>
                    </label>
                    <label style={{display:'block'}} >
                        Your Message:
                        <br/>
                        <textarea></textarea>
                    </label>
                </form>
        </div>
    )
}

export default Contact
