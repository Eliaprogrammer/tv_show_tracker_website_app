import React from 'react';
import createRoot from 'react-dom/client';
import {useState} from "react";


const[status, setStatus] = useState(true)
export default function NewAccount({signupButton, cancelButton}) {
    return(
        <div>
            <form>
                <h1>Create Account</h1>
                <h3>Get started with an account</h3>
                <br/>
                <p className="required">*</p>
                <p><i>indicates a required field. </i></p>
                <label> First and Last Name:
                    <input type="text" value={"name"}/>
                </label>
                <label> Email address:
                    <input type="text" />
                </label>
                <label> Password:
                    <input type="text" />
                </label>
                <label>Show Password:
                    <a href={"Show Password"}>Show Password</a>
                </label>
                <label> Re-type Password::
                    <input type="text" />
                </label>

                <input className="signupButton" type="submit">Create Account</input>
                <input className="cancelButton" type="cancel">Cancel</input>

            </form>
        </div>
    )
}

createRoot(document.getElementById('root')).render(<NewAccount/>);
