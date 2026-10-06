import {IoCheckmarkSharp} from "react-icons/io5";
import {IoMdUndo} from "react-icons/io";
import {useNavigate} from "react-router-dom";
import {useState} from 'react';
import './E&DEntry.css'


function EditEntry({allShowsList}){
    const navigate = useNavigate();
    const [displayConfirmation, setDisplayConfirmation] = useState(false);

    const SaveUpdateSelect = () =>(
        <select>
            <option>- Select- </option>
            {allShowsList.map((show) =>(
                <option key={show.name_show}>
                    {show.name_show}
                </option>
            ))}
        </select>
    )

    return(
        <div>
            {!displayConfirmation ? (
                <>
                    <p>Please select a show to Edit</p>

                    <SaveUpdateSelect />

                    <button className="update_button" type="button"  onClick={()=>setDisplayConfirmation(true)}>Update</button>

                    <button className="back" type="button" onClick={()=>navigate('/dashboard')}>Back</button>

                </>
            ) : ( <Edit onCancel={()=>setDisplayConfirmation(false)} />

            )}
        </div>
    );

}

function Edit ({onCancel}){
    return (
        <div className="update_confirm">
            <div className="alert">
                <h1>Are you sure you want to continue?</h1>
                <p>You have unsave changes that will be lost</p>
            </div>


            <div className="confirm_button">
                <button type="button" className="yes" onClick={HandleUpdate}><IoCheckmarkSharp /></button>
                <button type="button" className="undo" onClick={onCancel}><IoMdUndo /></button>
            </div>
        </div>
    )
}

function HandleUpdate(){

}

export default EditEntry;