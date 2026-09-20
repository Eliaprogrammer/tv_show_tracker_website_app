
import './NewUserDashboard.css';
import {useNavigate} from 'react-router-dom';
import menu_icon_bars from './assets/menu-icon-png-3-lines.png';

function NewUserDashboard(){
    const navigate = useNavigate();
    return (
        <div className="new_dashboard">

            <div className="menu">
                <img className="menu_icon" src={menu_icon_bars} alt="an image of a menu icon bars" />
                <h1>Menu</h1>
            </div>

            <div className="text">
                <p>Add a show to view details</p>
            </div>

            <div className="user_actions">

                <div className="logout">
                    <p>Sign out</p>
                </div>

                <button className="add_button" onClick={()=> navigate("/generate_show")}>+</button>

            </div>

        </div>

    )
}

export default NewUserDashboard;