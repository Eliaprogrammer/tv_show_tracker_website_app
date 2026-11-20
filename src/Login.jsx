import './Login.css';
import {Link, useNavigate} from 'react-router-dom';
import {SignInUser} from "./services/authService.js";
import PopUpAction from "./PopUp.jsx";
import {useState} from "react";


function Login (){
    const navigate = useNavigate();
    const [displayPopUp, setDisplayPopUp] = useState(false);
    const [isSuccess, setIsSuccess] = useState(true);

    const [secret, setSecret] = useState("");
    const [visible, setVisible] = useState(false)


    async function handleLogin(event){
        event.preventDefault();

        const formAttributes = new FormData(event.currentTarget);

        const verifyEmail = formAttributes.get("email");
        const verifyPassword = formAttributes.get("password");

        try{
            await SignInUser ({
                email: verifyEmail,
                password: verifyPassword,
            })


            console.log("Login granted");
            setIsSuccess(true);
            setDisplayPopUp(true);
            setTimeout(() => navigate("/"), 3000);
        }catch(error){
            console.log("Login denied", error.message);
            setIsSuccess(false);
            setDisplayPopUp(true);
        }
    }

    return(
        <div className="login_form">

            <p className="subheading">Please enter your email and password to login</p>

            <div className="outer">

                <form className="login_design" onSubmit={handleLogin}>

                    <div className="form_header">
                        <h2>Sign In</h2>
                        <p > Access your account</p>
                    </div>


                    <div className="form_group">
                        <label>
                            Email address
                        </label>
                        <input name="email" type="email" required/>
                    </div>


                    <div className="form_group">
                        <label>
                            Password
                        </label>

                        <input value={secret} name="password" type={visible ? "text" : "password"}
                               onChange={(e) => setSecret(e.target.value)} required/>

                        <Link className="password" to="#" name="show" onClick={() => setVisible(!visible)}>{visible ? "Hide password" : "Show password"}</Link>
                    </div>


                    <div className="form_group">
                        <button className="login_submit" type="submit"> Submit</button>

                        <Link className="forgot" to={"/rest_password"}>Forgot Password?</Link>
                    </div>

                    <div className="return">
                        <p>Don't have an account? </p>
                        <Link className="already" to={"/create_account"}>Sign Up</Link>
                    </div>

                </form>

            </div>
            {displayPopUp && (<PopUpAction success={isSuccess} onClose={()=> {
                        setDisplayPopUp(false);
                        if(isSuccess){
                            navigate("/");
                        }
                    }}
                />
            )}

        </div>
    )

}
export default Login;