import './NewUserDashboard.css';
import {useNavigate} from 'react-router-dom';

function NewUserDashboard(){
    const navigate = useNavigate();
    return (
        <div className="new_dashboard">

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

    );
}

export default NewUserDashboard;