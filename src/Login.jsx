import './Login.css';
import {Link, useNavigate} from 'react-router-dom';
import {SignInUser} from "./services/authService.js";


function Login (){
    const navigate = useNavigate();

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


            navigate("/dashboard")
            console.log("Login granted");


        }catch(error){
            console.log("Login denied", error.message);
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

                        <input name="password" type="password" required/>

                        <Link className="password" to="#" name="show">Show password</Link>
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

        </div>
    );

}
export default Login;