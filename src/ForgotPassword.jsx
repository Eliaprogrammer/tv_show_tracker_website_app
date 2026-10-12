import {ForgotPassword} from "./services/authService.js";
import {useState} from "react";

function ResetForgotPassword(){
    const [email, setEmail] = useState("");

    async function HandleForgotPassword(event) {
        event.preventDefault();

        try {
            await ForgotPassword({email});
            console.log("Reset email sent")
        } catch (error) {
            console.log(error.message)
        }
    }
    return(
            <div>
                <form onSubmit={HandleForgotPassword}>
                    <h1>
                        Reset Forgot Password
                    </h1>

                    <h3>Please enter your email to reset your password</h3>


                    <div className="form_group">
                        <label>
                            Email address
                        </label>
                        <input name="email" type="email"
                               onChange={(event) => setEmail(event.target.value)} required/>
                    </div>

                    <button className="reset" type="submit" >Rest</button>
                </form>
            </div>

        )
} export default ResetForgotPassword;