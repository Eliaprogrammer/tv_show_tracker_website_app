import {UpdatePassword} from "./services/authService.js";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function NewPassword(){
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function HandleChangePassword(event) {
        event.preventDefault();

        try {
            await UpdatePassword({
                password
            });
            console.log("New password saved successfully");
            navigate('/sign_in');

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <form onSubmit={HandleChangePassword}>
                <label>New Password</label>
                <input name="change_password" type="password"
                       onChange={(event) => setPassword(event.target.value)} required />
                <button type="submit" >Save</button>
            </form>


        </div>


    )
} export default NewPassword;