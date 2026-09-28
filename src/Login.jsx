import './Login.css';
import {Link, useNavigate} from 'react-router-dom';


function Login (){
    const navigate = useNavigate();

    function handleLogin(event){
        event.preventDefault();

        const formAttributes = new FormData(event.currentTarget);

        const verifyEmail = formAttributes.get("email");
        const verifyPassword = formAttributes.get("password");

        const accessEmail = localStorage.getItem("user_email");
        const accessPassword = localStorage.getItem("user_password");

        if (verifyEmail === accessEmail && verifyPassword === accessPassword){
            navigate("/dashboard")
            console.log("Login granted");
        }
        else{
            console.log("Login denied");
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

                        <Link className="forgot" to="#">Forgot Password?</Link>
                    </div>

                </form>

            </div>

        </div>
    );

}
export default Login;