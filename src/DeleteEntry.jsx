import { IoCheckmarkSharp } from "react-icons/io5";
import { IoMdUndo } from "react-icons/io";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import './E&DEntry.css'

function DeleteEntry({allShowsList}){

    const navigate = useNavigate();
    const [displayConfirmation, setDisplayConfirmation] = useState(false);

    const SaveSelect = () =>(
        <select onChange={event =>setChooseOption(event.currentTarget.value)}>
            <option>-Select-</option>
            {allShowsList.map((show) =>(
                <option key={show.name_show}>
                    {show.name_show}
                </option>
            ))}
        </select>

    )

    return (
        <div>
            {!displayConfirmation ? (
                <>
                    <p>Please select a show to delete</p>
                    <SaveSelect />


                    <button className="delete" type="button" onClick={()=>setDisplayConfirmation(true)}>Delete</button>
                    <button className="back" type="button" onClick={()=> navigate('/dashboard')}>Back</button>
                </>
            ) : ( <Remove onCancel={()=>setDisplayConfirmation(false)} />
                )}

        </div>
    )
}

function Remove(){
    return (
        <div className="delete_confirm">
            <div className="alert">
                <h1>Are you sure you want to continue?</h1>
                <p>You can't undo the deletion</p>
            </div>
            <button type="button" className="yes" onClick={HandleDelete}><IoCheckmarkSharp /></button>
            <button type="button" className="undo" onClick={DeleteEntry}><IoMdUndo /></button>
        </div>
    )
}

function HandleDelete(){
    {SaveSelect}

}


export default DeleteEntry;