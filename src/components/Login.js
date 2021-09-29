import React from 'react'
import './../assests/Login.css'
const Login = () => {
    return (
        <div>
            <form className="login_form">
                <label>
                    Username:
                <input type="text" />
                   </label> 

                   <label>
                       Password:
                <input type="password" />
                </label>
                <button type="submit">
                    Log in
                </button>
                
            </form>
        </div>
    )
}

export default Login
