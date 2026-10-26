import {FetchShow} from "./CRUD.jsx";
import {useEffect, useState} from "react";

function ShowDetails(){
    const [showInfo, setShowInfo] = useState([])
    useEffect(() => {
        async function HandleDetails() {
            try {
                const FetchInfo = await FetchShow()
                setShowInfo(FetchInfo);
                console.log("Show is information is being displayed")
            } catch (error) {
                console.log(error.message)
            }
        }

        HandleDetails();
    }, [])

    return (
        <div>
            {showInfo.length === 0 ? (
                <p>No show with that name</p>
            ) : (showInfo.map((item) => (
                    <div key={item.id}>
                        <p>TV Show name: {item.show_name}</p>
                        <p>The Episode Name: {item.episode_name}</p>
                        <p>Season {item.season_number}</p>
                        <p>The number of episodes in the season: {item.eps_in_season}</p>
                        <p>Location of the show: {item.streaming_service}</p>
                        <p>Number of episodes already watched: {item.number_episodes_watched}</p>
                        <p>I have complete the show: {String(item.series_completed)}</p>
                    </div>
                ))
            )}

        </div>
    );
} export default ShowDetails;