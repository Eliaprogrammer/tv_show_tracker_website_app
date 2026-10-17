import disgust from './assets/disgust.png';
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import './Dashboard.css';
import {supabase} from "./lib/supabaseClient.js";
import {useEffect, useState} from "react";
import Navbar from "./Navbar.jsx";


function Dashboard(){

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
                <Navbar/>

                <div>
                    {loading ? (
                        <p>Loading...</p>
                    ) : tv.length === 0 ? (
                        <div className="text">
                            <p>Add a show to view details</p>
                        </div>
                    ) : error ?(
                            <p>Could not load show: {error}</p>
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