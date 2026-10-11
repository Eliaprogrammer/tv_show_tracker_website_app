import {ForgotPassword} from "./services/authService.js";
import {useState} from "react";

async function HandleChangePassword(event){
    const [password, setPassword] = useState("");

    event.preventDefault();
    try{
        await ForgotPassword({
            password: change_password,
        });

    }
    catch(error){
        console.log(error);
    }


    return (
        <div>
            <div>
                <label>New Password</label>
                <input name="change_password" type={password}
                       onChange={(event) => setPassword(event.target.value)} required/>/>
            </div>

            <button type="button" onClick={HandleChangePassword}>Save</button>
        </div>


    )
} export default HandleChangePassword;