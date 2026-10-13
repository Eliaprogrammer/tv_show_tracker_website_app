import {SignOutUser} from "./services/authService.js";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
function SignOut(){
    const [signOutUser, setSignOutUser] = useState();
    const navigate = useNavigate();
    useEffect( () =>(
        async function HandleGoodbye(){
            try{
                await SignOutUser()
                console.log("logged out");
                setSignOutUser(true)
            }
            catch(error){
                console.log(error.message)
                setSignOutUser(false)
            }

        }

    ))

    return(
        <div>
            {signOutUser === true ? (
                <div>
                    <h1>You successfully sign out</h1>
                    <h2>Goodbye</h2>
                    <Link to="/">Go to Home Page</Link>
                </div>

                ): signOutUser === false ?(
                <div>
                    <p>There was a problem when signing out</p>
                    <Link to="/dashboard">Go back to the dashboard</Link>
                </div>
            ): (
               navigate("/dashboard")
            )}

        </div>
    )
}export default SignOut;