import './Login.css';
import {Link} from 'react-router-dom';

function Login(){
    return(
        <div className="login_form">

            <p className="subheading">Please enter your email and password to login</p>

            <div className="outer">

                <form className="login_design">

                    <div className="form_header">
                        <h2>Sign In</h2>
                        <p > Access your account</p>
                    </div>


                    <div className="form_group">
                        <label>
                            Email address
                        </label>
                        <input name="email" type="email"/>
                    </div>


                    <div className="form_group">
                        <label>
                            Password
                        </label>

                        <input name="password" type="password"/>

                        <Link className="password" to="#" name="show ">Show password</Link>
                    </div>


                    <div className="form_group">
                        <button className="login_submit" type="submit"> Submit</button>

                        <Link className="forgot" to="#">Forgot Password?</Link>
                    </div>

                </form>

            </div>

        </div>
    )

}
export default Login;