import './TvShowApp.css'

function Login(){
    return(
    <button className="loginButton"> Login </button>

    )

}
function CreateAccount()
{
    return(
        <button className="createAccountButton"> Create Account</button>
    )
}
function TvShowApp() {
  return (

      <div className="Landing">
          <header className="Title">
              <h1>TV Show Tracker</h1>
              <Login />
              <CreateAccount />
          </header>
          <p><i>Create an account or login</i></p>
          <p>All the your show in one place</p>
          <h3><i>Add</i></h3>
          <p>Add new show to your watch list</p>
          <h3><i>Manage</i></h3>
          <p>You get to choose what shows stay and goes</p>
          <h3><i>View</i></h3>
          <p> View all shows that at once or sort by genre</p>
         <Login />
         <CreateAccount />

      </div>

  )
}

export default TvShowApp
