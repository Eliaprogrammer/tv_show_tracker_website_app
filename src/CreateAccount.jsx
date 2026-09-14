import "./CreateAccount.css";
function NewAccount() {
    return(
        <div className="form_design">
            <form >
                <h1>Create Account</h1>
                <h4>Get started with an account</h4>


                <p className="required"> * <i> indicates a required field. </i></p>

                <label>
                    First and Last Name:
                    <br />
                    <input type="text" />
                </label>

                <br/>

                <label>
                    Email address:
                    <br />
                    <input type="email" />
                </label>

                <br/>

                <label>
                    Password:
                    <br />
                    <input type="password" />
                </label>

                <br/>

                <label>
                    <a href="#">Show Password</a>
                </label>

                <br/>

                <label>
                    Re-type Password:
                    <br />
                    <input type="password" />
                </label>

                <br/>
                <br/>

                <button className="signupButton" type="submit">Create Account</button>
                <button className="cancelButton" type="button">Cancel</button>

            </form>
        </div>

    )
}

export default NewAccount;
