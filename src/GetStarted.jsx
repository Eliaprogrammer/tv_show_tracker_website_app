function GetStarted(){
    return(
        <div className="start">
            <h1>Getting Started</h1>

            <h3>Create an account</h3>
            <ol>
                <li>
                    Click on "Create an account or Login" in the first box
                </li>
                <li>
                    Below the Login form, click on "sign Up" next to the "Don't have an account"
                </li>
                <li>
                    Fill in the boxes with the corresponding information
                </li>
                <li>Click on "Create Account" button</li>
                <li>
                    You will have to authenticate that your email is real and active by
                    clicking on the confirmation link in an
                    email sent to you from Supabase. If it doesn't appear check spam/junk folder
                </li>
                <li>Click on "Create an account or Login" again when redirected to Login</li>
                <li>Once the confirmation is complete, you can
                    start adding shows you are watching now and wish to watch by clicking on the
                    “Add” heading.</li>
            </ol>

            <h3>Login</h3>
            <ol>
                <li>
                    Enter the email and password you used to create an account
                </li>
                <li>Click "Submit"</li>
                <ul>
                    <li>Click on "Forgot Password" to reset your password</li>
                </ul>
                <li>It redirects you to the home page, click on one of the following actions</li>
                <ul>
                    <li>Add</li>
                    <li>Manage</li>
                    <li>View</li>
                </ul>
            </ol>

        </div>
    )
} export default GetStarted;