import {IoCheckmarkSharp} from "react-icons/io5";
import {IoMdUndo} from "react-icons/io";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from 'react';
import './E&DEntry.css'
import Navbar from "./Navbar.jsx";
import {FetchShow, UpdateShow} from "./CRUD.jsx";

function EditEntry(){

    const navigate = useNavigate();
    const [option, setOption] = useState([]);
    const [updateShow, setUpdateShow] = useState("");
    const [trackId, setTrackId] = useState("");
    const [displayConfirmation, setDisplayConfirmation] = useState(false);

    const [updateData, setUpdateData] = useState({
        show_name: "",
        episode_name: "",
        season_number: 0,
        eps_in_season: 0,
        streaming_service: "",
        number_episodes_watched: 0,
        series_completed: false
    });


    useEffect(() => {
        async function LoadShowInfo() {
            try{
                const showInfo = await FetchShow()
                setOption(showInfo);
            } catch (error){
                console.error("Error to display show: ", error.message);

            }
        }

        LoadShowInfo()
    }, []);

    const HandleSelectOption = (e) =>{
        const pickedName = e.target.value;
        setUpdateShow(pickedName);

        if(pickedName){
            const pickedObj = option.find(show => show.show_name === pickedName);
            console.log("Row for: ", pickedObj)
            if(pickedObj){
                setTrackId(pickedObj.id);
                setUpdateData({
                    show_name: pickedObj.show_name || "",
                    episode_name: pickedObj.episode_name || "",
                    season_number: pickedObj.season_number || 0,
                    eps_in_season: pickedObj.eps_in_season || 0,
                    streaming_service: pickedObj.streaming_service || "",
                    number_episodes_watched: pickedObj.number_episodes_watched || 0,
                    series_completed: pickedObj.series_completed || false
                });
            }
        }
        else {
            setTrackId("");
            setUpdateData({
                show_name: "",
                episode_name: "",
                season_number: 0,
                eps_in_season: 0,
                streaming_service: "",
                number_episodes_watched: 0,
                series_completed: false
            })
        }
    }


    async function HandleUpdate(){

        try{

            await UpdateShow(trackId, updateData)
            console.log("The show has been updated successfully");
            navigate("/dashboard");
        }
        catch(error){
            console.error("Error while updating show: ", error.message)
        }
    }

    return(
        <div>
            <Navbar />
            {!displayConfirmation ? (
                <>
                    <p>Please select a show to edit</p>

                    <select className="editSelect" value={updateShow} onChange={HandleSelectOption}>

                        <option value="">- Select- </option>
                        {option.map((label_show) =>(
                            <option key={label_show.id} value={label_show.show_name}>
                                {label_show.show_name}
                            </option>
                        ))}

                    </select>

                    {updateShow && (
                        <UpdateForm updateData={updateData} setUpdateData={setUpdateData}
                                    onProceedToConfirm={() => setDisplayConfirmation(true)}/>

                    )}

                    <button className="back" type="button" onClick={()=>navigate('/dashboard')}>Back</button>

                </>
            ) : (
                <Edit onCancel={()=>setDisplayConfirmation(false)} onConfirm={HandleUpdate} />
            )}

        </div>
    );

}



function UpdateForm({updateData, setUpdateData, onProceedToConfirm}){
    function handleChange(event){
        event.preventDefault();
        const {name, value, type, checked} = event.target;
        setUpdateData((prevState) =>({...prevState, [name]: type === "checkbox" ?
                checked: type === "number" ? (value === "" ? "" : Number(value)) : value}));
    }

    return(
        <div>
            <form>
                <h2>Edit a show by high lighting the value</h2>
                <div className="form_details">
                    <label>
                        Show's name:
                    </label>
                    <input name="show_name" type="text"
                           onChange={handleChange} value={updateData.show_name} />
                </div>

                <div className="form_details">
                    <label>
                        What is the name of the episode?:
                    </label>
                    <input name="episode_name" type="text"
                           onChange={handleChange} value={updateData.episode_name}/>
                </div>

                <div className="form_details">
                    <label>
                        What season are you on:
                    </label>
                    <input name="season_number" type="number"
                           onChange={handleChange}
                           value={updateData.season_number} />
                </div>

                <div className="form_details">
                    <label>
                        How many episodes are in the season:
                    </label>
                    <input name="eps_in_season" type="number"
                           onChange={handleChange}
                           value={updateData.eps_in_season}/>
                </div>

                <div className="form_details">
                    <label>
                        What streaming service is the show on?:
                    </label>
                    <input name="streaming_service" type="text"
                           onChange={handleChange}
                           value={updateData.streaming_service}/>
                </div>

                <div className="form_details">
                    <label>
                        How many episodes have you watched in the season?:
                    </label>
                    <input name="number_episodes_watched" type="number"
                           onChange={handleChange}
                           value={updateData.number_episodes_watched} />
                </div>

                <div className="form_details">
                    <label>
                        Have you finished the show?:
                    </label>
                    <input name ="series_completed" type="checkbox"
                           onChange={handleChange}
                           checked={updateData.series_completed}/>
                </div>

                <button className="update_button" type="button"  onClick={onProceedToConfirm}>Update</button>
            </form>
        </div>
    )
}

function Edit ({onCancel, onConfirm}){
    return (
        <div className="update_confirm">
            <div className="alert">
                <h1>Are you sure you want to continue?</h1>
                <p>You have unsave changes that will be lost</p>
            </div>


            <div className="confirm_button">
                <button type="button" className="yes" onClick={onConfirm}><IoCheckmarkSharp /></button>
                <button type="button" className="undo" onClick={onCancel}><IoMdUndo /></button>
            </div>
        </div>
    )
}
export default EditEntry;