import {useNavigate} from "react-router-dom";
import {FaRegHeart, FaRegThumbsUp} from "react-icons/fa6";
import disgust from "./assets/disgust.png";
import './ShowTile.css';


export  default function ShowTile({allShowsList}) {
    const navigate = useNavigate();

    return (
        <div className="show_title">
            <div className="row">
                {allShowsList.map((show) => (

                    <div className="column" key={show.id}>
                        <h3>{show.show_name}</h3>

                        <div className="rate">
                            <div className="Hearts">
                                <FaRegHeart/>
                            </div>

                            <div className="thumb_up">
                                <FaRegThumbsUp/>
                            </div>

                            <div className="disgust">
                                <img src={disgust} alt="A picture of a disgust emoji"/>
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