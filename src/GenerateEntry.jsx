import './GenerateEntry.css';
import {useNavigate} from 'react-router-dom';

function GenerateEntry(){
    return(

        <div className="entry_form">

            <p>Enter Show Information to Keep Track</p>

            <form className="form_show_details">

                <div className="form_details">
                    <label>
                        Name of Show:
                    </label>
                    <input name="name_show" type="text" />
                </div>

                <div className="form_details">
                    <label>
                        Episode Name:
                    </label>
                    <input name="episode" type="text" />
                </div>

                <div className="form_details">
                    <label>
                        Number of Seasons:
                    </label>
                    <input name="seasons" type="number" />
                </div>
                <div className="form_details">
                    <label>
                        Number of Episode Per Season:
                    </label>
                    <input name="ep_per_season" type="number" />
                </div>

                <div className="form_details">
                    <label>
                        Streaming Service:
                    </label>
                    <input name="streaming" type="text" />
                </div>

                <div className="form_details">
                    <label>
                       Number of Episodes Watched:
                    </label>
                    <input name="watched" type="number" />
                </div>

                <div className="form_details">
                    <label>
                        Finished?:
                    </label>
                    <input name ="completed_show" type="text" />
                </div>

            </form>
            <button type="submit" className="save">Save</button>
            <button type="button" className="back" >Back</button>

        </div>
    );
}
export default GenerateEntry;