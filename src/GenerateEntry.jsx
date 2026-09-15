import "./GenerateEntry.css";
import {useNavigate} from "react-router-dom";

function GenerateEntry(){
    return(

        <div className="entry-form">

            <p>Enter Show Information to Keep Track</p>

            <form className="form-show-details">

                <div className="form-details">
                    <label>
                        Name of Show:
                    </label>
                    <input type="text" />
                </div>

                <div className="form-details">
                    <label>
                        Episode Name:
                    </label>
                    <input type="text" />
                </div>

                <div className="form-details">
                    <label>
                        Number of Seasons:
                    </label>
                    <input type="number" />
                </div>
                <div className="form-details">
                    <label>
                        Number of Episode Per Season:
                    </label>
                    <input type="number" />
                </div>

                <div className="form-details">
                    <label>
                        Streaming Service:
                    </label>
                    <input type="text" />
                </div>

                <div className="form-details">
                    <label>
                       Number of Episodes Watched:
                    </label>
                    <input type="number" />
                </div>

                <div className="form-details">
                    <label>
                        Finished?:
                    </label>
                    <input type="text" />
                </div>

                <button type="submit" className="save">Save</button>


            </form>
            <button type="button" className="back" >Back</button>

        </div>
    )
}
export default GenerateEntry;