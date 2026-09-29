import './GenerateEntry.css';
import {useState} from 'react';


function GenerateEntry({setAllShowsList}){

    const [seriesName, setSeriesName] = useState("");
    const [episode, setEpisode] = useState("");
    const [seasonNumber, setSeasonNumber] = useState(0);
    const [epInSeason, setEpInSeason] = useState(0);
    const [streaming, setStreaming] = useState("");
    const [numberEpisodeWatched, setNumberEpisodeWatched] = useState(0);
    const [watched, setWatched] = useState(false);

    const generate = (event) =>{
        event.preventDefault();

        const series = {"name_show": seriesName, "episode": episode,"season": seasonNumber,
            "ep_in_season": epInSeason, "streaming": streaming, "number_episode": numberEpisodeWatched,
            "completed_show": watched };

        setAllShowsList(prevShow => [...prevShow, series]);

        setSeriesName("");
        setEpisode("");
        setSeasonNumber(0);
        setEpInSeason(0);
        setStreaming("");
        setNumberEpisodeWatched(0)
        setWatched(false);

    };

    return(

        <div className="entry_form">


            <p>Enter Show Information to Keep Track</p>

            <form className="form_show_details" onSubmit={generate} >

                <div className="form_details">
                    <label>
                        Show's name:
                    </label>
                    <input name="name_show" type="text"
                           onChange={(event) => setSeriesName(event.currentTarget.value)} value={seriesName} />
                </div>

                <div className="form_details">
                    <label>
                        What is the name of the episode?:
                    </label>
                    <input name="episode" type="text"
                           onChange={(event) => setEpisode(event.currentTarget.value)} value={episode}/>
                </div>

                <div className="form_details">
                    <label>
                        What season are you on:
                    </label>
                    <input name="seasons" type="number"
                           onChange={(event) => setSeasonNumber(Number(event.currentTarget.value))} value={seasonNumber} />
                </div>

                <div className="form_details">
                    <label>
                        How many episodes are in the season:
                    </label>
                    <input name="ep_in_season" type="number"
                           onChange={(event) => setEpInSeason(Number(event.currentTarget.value))} value={epInSeason}/>
                </div>

                <div className="form_details">
                    <label>
                        What streaming service is the show on?:
                    </label>
                    <input name="streaming" type="text"
                           onChange={(event) => setStreaming(event.currentTarget.value)} value={streaming}/>
                </div>

                <div className="form_details">
                    <label>
                       How many episodes have you watched in the season?:
                    </label>
                    <input name="watched" type="number"
                           onChange={(event) => setNumberEpisodeWatched(Number(event.currentTarget.value))} value={numberEpisodeWatched} />
                </div>

                <div className="form_details">
                    <label>
                        Have you finished the show?:
                    </label>
                    <input name ="completed_show" type="checkbox"
                           onChange={(event) => setWatched(event.currentTarget.checked)} checked={watched}/>
                </div>

                <button type="submit" className="save" >Save</button>

            </form>

            <button type="button" className="back" >Back</button>

        </div>
    );
}
export default GenerateEntry;