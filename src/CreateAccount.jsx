import './CreateAccount.css';
import {Link} from 'react-router-dom';

function NewAccount() {
    return(
        <div >
            <form className="form_design">
                <h1>Create Account</h1>
                <h5>Get started with an account.</h5>

                <Asterisk/><p><i> indicates a required field. </i></p>

                <div className="form_content">
                    <label>
                        First and Last Name: <Asterisk/>
                    </label>
                    <input type="text" />
                </div>


                <div className ="form_content">
                    <label>
                        Email address: <Asterisk/>
                    </label>
                    <input type="email" />
                </div>

                <div className ="form_content">
                    <label>
                        Password: <Asterisk/>
                    </label>
                    <input type="password" />
                    <Link className="show" to="#">Show Password</Link>
                </div>

                <div className ="form_content">
                    <label>
                        Re-type Password: <Asterisk/>
                    </label>
                    <input type="password" />
                </div>

                <button className="signup_button" type="submit">Create Account</button>
                <button className="cancel_button" type="button">Cancel</button>

                <div className="return">
                    <p>Already have an account? </p>
                    <Link className="already" to={"/sign_in"}>Sign in</Link>
                </div>

            </form>




        </div>

    )
}

function Asterisk(){
            return(
                <p className="required"> *</p>
            )
}

export default NewAccount;
