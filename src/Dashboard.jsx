import disgust from './assets/disgust.png';
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import './Dashboard.css';
import {useEffect, useState} from "react";
import Navbar from "./Navbar.jsx";
import {FetchShow, FetchShowName} from './CRUD.jsx';
import ShowDetails from "./Show.jsx";
import {useNavigate} from "react-router-dom";

function Dashboard(){


    const [tv, setTv] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function DisplayShow() {
            try{
                const title = await FetchShowName()
                setTv(title);

            } catch (error){
                console.error("Error to display show: ", error.message);
                setError(error.message)
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
                    ) : error ? (
                            <p>Could not load show: {error}</p>
                    ) : tv.length === 0 ? (
                        <div className="text">
                            <p>Add a show to view details</p>
                        </div>
                    )  : (
                        <ShowTile allShowsList={tv} />
                    )}
                </div>
            </div>

        </>

    );
}

function ShowTile({allShowsList}){
    const navigate = useNavigate();

    return(
        <div className="show_title">
            <div className="row">
                {allShowsList.map((show) => (
                    <div className="column" key={show.id}>
                        <h3>{show.show_name}</h3>

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
                                <button type="button" onClick={() => navigate("/show")}>View Information</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Dashboard;