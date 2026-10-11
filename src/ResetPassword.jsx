import {RestorePassword} from "./services/authService.js";
import {useState} from "react";

async function HandleRest(){

    const [email, setEmail] = useState("");

    try{
       await RestorePassword({ email});
       console.log("Reset email sent")

    }
    catch(error){
        console.log(error.message)
    }


    return(
            <div>
                <h1>
                    Password Reset
                </h1>

                <h3>Please enter your email to reset your password</h3>


                <div className="form_group">
                    <label>
                        Email address
                    </label>
                    <input name="email" type={email}
                           onChange={(event) => setEmail(event.target.value)} required/>
                </div>

                <button className="reset" type="button" onClick={HandleRest}>Rest</button>

            </div>

        )
} export default HandleRest;