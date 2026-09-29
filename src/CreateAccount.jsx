import './CreateAccount.css';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


function NewAccount() {
    const navigate = useNavigate();

    function handleRegister(event) {

        event.preventDefault();

        const formAttributes = new FormData(event.currentTarget);


        const user_full_name = formAttributes.get("full_name");
        const user_email = formAttributes.get("email");
        const user_password = formAttributes.get("password");
        const user_confirm_password = formAttributes.get("confirm_password");

        if(user_password !== user_confirm_password){
            console.log("Account not established");
            return;
        }
        localStorage.setItem("full_name", user_full_name);
        localStorage.setItem("user_email",user_email);
        localStorage.setItem("user_password", user_password);


        navigate("/new_user_dashboard");
        console.log("Account established");

    }

    return(
        <div >
            <form className="form_design" onSubmit={handleRegister}>
                <h1>Create Account</h1>
                <h5>Get started with an account.</h5>

                <Asterisk/><p><i> indicates a required field. </i></p>

                <div className="form_content">
                    <label>
                        First and Last Name: <Asterisk/>
                    </label>
                    <input name="full_name" type="text" required />
                </div>


                <div className ="form_content">
                    <label>
                        Email address: <Asterisk/>
                    </label>
                    <input name="email" type="email" required/>
                </div>

                <div className ="form_content">
                    <label>
                        Password: <Asterisk/>
                    </label>
                    <input name ="password" type="password" required />
                    <Link className="show" to="#">Show Password</Link>
                </div>

                <div className ="form_content">
                    <label>
                        Re-type Password: <Asterisk/>
                    </label>
                    <input name="confirm_password" type="password" required/>
                </div>

                <button className="signup_button" type="submit">Create Account</button>
                <button className="cancel_button" type="button">Cancel</button>

                <div className="return">
                    <p>Already have an account? </p>
                    <Link className="already" to={"/sign_in"}>Sign in</Link>
                </div>

            </form>

        </div>

    );
}

function Asterisk(){
            return(
                <p className="required"> *</p>
            );
}

export default NewAccount;
