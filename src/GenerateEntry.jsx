import './GenerateEntry.css';
import {useState} from 'react';

function GenerateEntry(props){
    const [allShowsList, setAllShowsList] = useState(null)
    const showList = []



    const [seriesName, setSeriesName] = useState("");
    const [episode, setEpisode] = useState("");
    const [seasonNumber, setSeasonNumber] = useState(0);
    const [epPerSeason, setEpPerSeason] = useState(0);
    const [streaming, setStreaming] = useState("");
    const [numberEpisodeWatched, setNumberEpisodeWatched] = useState(0);
    const [watched, setWatched] = useState(false);

    const generate = () =>{
        const series = {"name_show": seriesName, "episode": episode,"season": seasonNumber, "ep_per_season": epPerSeason, "streaming": streaming, "completed_show": watched }
    }

    const addEntry = (new_show) => {
        const all_shows = [...addEntry, new_show];
        props.setAllTV(all_shows);

    }
    return(

        <div className="entry_form">


            <p>Enter Show Information to Keep Track</p>

            <form className="form_show_details">

                <div className="form_details">
                    <label>
                        Name of Show:
                    </label>
                    <input name="name_show" type="text" onChange={(event) => setSeriesName(event.currentTarget.value)} value={seriesName} />
                </div>

                <div className="form_details">
                    <label>
                        Episode Name:
                    </label>
                    <input name="episode" type="text" onChange={(event) => setEpisode(event.currentTarget.value)} value={episode}/>
                </div>

                <div className="form_details">
                    <label>
                        Number of Seasons:
                    </label>
                    <input name="seasons" type="number" onChange={(event) => setSeasonNumber(event.currentTarget.value)} value={seasonNumber} />
                </div>
                <div className="form_details">
                    <label>
                        Number of Episode Per Season:
                    </label>
                    <input name="ep_per_season" type="number" onChange={(event) => setEpPerSeason(event.currentTarget.value)} value={epPerSeason}/>
                </div>

                <div className="form_details">
                    <label>
                        Streaming Service:
                    </label>
                    <input name="streaming" type="text"  onChange={(event) => setStreaming(event.currentTarget.value)} value={streaming}/>
                </div>

                <div className="form_details">
                    <label>
                       Number of Episodes Watched:
                    </label>
                    <input name="watched" type="number" onChange={(event) => setNumberEpisodeWatched(event.currentTarget.value)} value={numberEpisodeWatched} />
                </div>

                <div className="form_details">
                    <label>
                        Finished?:
                    </label>
                    <input name ="completed_show" type="text" onChange={(event) => setWatched(event.currentTarget.value)} value={watched}/>
                </div>

            </form>
            <button type="submit" className="save" onClick={() => setAllShowsList(allShowList)}>Save</button>
            <button type="button" className="back" >Back</button>

        </div>
    );
}
export default GenerateEntry;