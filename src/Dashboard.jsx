import MenuNav from './MenuNav';
import pencil from './assets/pencil.png';
import deleting from './assets/delete.png';
import profile from './assets/profile.png';
import disgust from './assets/disgust.png';
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import './Dashboard.css';
import {useState} from "react";

function Dashboard(){
    const [unselected, setUnselected] = useState("white");

    return(
        <>
            <div className="dashboard">

                <MenuNav />

                <div className="action_elements">
                    <div className="edit">
                        <img src={pencil} alt= "A picture of a pencil to indicate editing a show" />
                        <p>Edit</p>
                    </div>

                    <div className="delete">
                        <img src={deleting} alt="A image of a trash can to indicate deleting a show" />
                        <p>Delete</p>
                    </div>

                    <div className="profile">
                        <img src={profile} alt="A picture of a person profile icon" />
                        <p>Profile</p>
                    </div>

                    <div className="leave">
                        <p>Sign out</p>
                    </div>
                </div>
            </div>
            <div className="show_tile">
                <div className="Hearts" style={{background: unselected}} onClick={() => setUnselected("Red")}>
                    <FaRegHeart />
                </div>

                <div className="thumb_up">
                    <FaRegThumbsUp />
                </div>

                <div className="disgust">
                    <img src={disgust} alt="A picture of a disgust emoji" />
                </div>

            </div>
        </>

    );
}export default Dashboard;