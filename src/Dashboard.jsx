import pencil from './assets/pencil.png';
import deleting from './assets/delete.png';
import profile from './assets/profile.png';
import disgust from './assets/disgust.png';
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import './Dashboard.css';
import {useNavigate} from 'react-router-dom';
import {supabase} from "./lib/supabaseClient.js";
import {useEffect, useState} from "react";


function Dashboard(){
    const navigate = useNavigate();

    const [tv, setTv] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function DisplayShow() {
            const {data, error} = await supabase.from('TV_Show').select('*')

            if (error) {
                console.error("Error fetching shows: " , error.message)
                setError(error.message)
            } else {
                setTv(data)
            }

            setLoading(false)
        }

        DisplayShow()
    }, [])

    return(
        <>
            <div className="dashboard">

                <div className="action_elements" >
                    <div className="edit" onClick={() => navigate("/update_show")}>
                        <img src={pencil} alt= "A picture of a pencil to indicate editing a show" />
                        <p>Edit</p>
                    </div>

                    <div className="delete" onClick={() => navigate("/delete_show")}>
                        <img src={deleting} alt="A image of a trash can to indicate deleting a show" />
                        <p>Delete</p>
                    </div>

                    <div className="profile">
                        <img src={profile} alt="A picture of a person profile icon" />
                        <p>Profile</p>
                    </div>

                    <div className="leave" onClick={() => navigate("/sign_out")}>
                        <p>Sign out</p>
                    </div>

                    <button className="add_button" onClick={()=> navigate("/generate_show")}>+</button>

                </div>

                <div>
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ?(
                            <p>Could not load show: {error}</p>
                    ) : tv.length === 0 ? (
                        <div className="text">
                            <p>Add a show to view details</p>
                        </div>
                    ) : (
                        <ShowTile allShowsList={tv} />
                    )}
                </div>
            </div>

        </>

    );
}

function ShowTile({allShowsList}){

    return(
        <div className="show_title">
            <div className="row">
                {allShowsList.map((show) => (
                    <div className="column" key={show.id}>
                        <h3>{show.ShowName}</h3>

                        <div className="rate">
                            <div className="Hearts">
                                <FaRegHeart />
                            </div>

                            <div className="thumb_up">
                                <FaRegThumbsUp />
                            </div>

                            <div className="disgust">
                                <img src={disgust} alt="A picture of a disgust emoji" />
                            </div>

                            <div className="view_details">
                                <button type="button">View Information</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Dashboard;