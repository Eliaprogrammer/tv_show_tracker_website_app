function Login(){
    return(
        <>
            <h2>Please enter your email and password to login</h2>

            <form>

                <h3>Sign In</h3>
                <p>Access your account</p>

                <br/>
                <br />

                <label>
                    Email address
                    <br/>
                    <input name="email" type="email"/>
                </label>

                <br/>

                <label>
                    Password
                    <br/>
                    <input name="password" type="password"/>
                    <br/>
                    <a href="#" name="show ">Show password</a>
                </label>

                <br/>
                <br/>


                <button className="login" type="submit"> Submit</button>
            </form>
            <a>Forgot Password</a>
        </>

    )

}
export default Login;