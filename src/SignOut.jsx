import {SignOutUser} from "./services/authService.js";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

function SignOut(){
    const [accountStatue, setAccountStatue] = useState('loading');

    useEffect( () =>{
            async function HandleGoodbye(){
                try{
                    await SignOutUser()
                    console.log("logged out");
                    setAccountStatue("success");
                }
                catch(error){
                    console.log(error.message);
                    setAccountStatue("Not logged out");
                }

            }
            HandleGoodbye();
    },[])

    return(
        <div>
            {accountStatue === "loading" && (
                <p>Loading.... Processing sign out</p>
            )}

            {accountStatue === "success" && (
                <div>
                    <h1>You successfully sign out</h1>
                    <h2>Goodbye</h2>
                    <Link to="/">Go to Home Page</Link>
                </div>
            )}

            {accountStatue === "Not logged out" && (
                <div>
                    <p>There was a problem when signing out</p>
                    <Link to="/dashboard">Go back to the dashboard</Link>
                </div>
            )}

        </div>
    )
}export default SignOut;