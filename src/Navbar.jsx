import pencil from "./assets/pencil.png";
import deleting from "./assets/delete.png";
import profile from "./assets/profile.png";
import "./Navbar.css"
import {useNavigate} from "react-router-dom";


function Navbar(){
    const navigate = useNavigate();

    return (
        <div className="action_elements" >

            <div className="edit" onClick={() => {navigate("/update_show");}}>
                <img src={pencil} alt= "A picture of a pencil to indicate editing a show" />
                <p>Edit</p>
                {/*{setSelectEdit(true)}*/}
            </div>

            <div className="delete" onClick={() => {navigate("/delete_show");}}>
                <img src={deleting} alt="A image of a trash can to indicate deleting a show" />
                <p>Delete</p>
                {}
            </div>

            <div className="profile" onClick={() => {navigate("/profile")}}>
                <img src={profile} alt="A picture of a person profile icon" />
                <p>Profile</p>
            </div>

            <div className="leave" onClick={() => {navigate("/sign_out")}}>
                <p>Sign out</p>
            </div>

            <button className="add_button" onClick={()=> {navigate("/generate_show")}}>+</button>



        </div>
    )
} export default Navbar;