import { IoCheckmarkSharp } from "react-icons/io5";
import { IoMdUndo } from "react-icons/io";

function DeleteEntry({allShowsList}){

    function Remove(){
        return (
            <div className="delete_confirm">
                <div className="alert">
                    <h1>Are you sure you want to continue?</h1>
                    <p>You can't undo the deletion</p>
                </div>
                <button type="button" className="yes"><IoCheckmarkSharp /></button>
                <button type="button" className="undo"><IoMdUndo /></button>
            </div>
        )
    }

    function HandleDelete(){

    }

    return (
        <div>
            <p>Please select a show to delete</p>


            <select onChange={event =>setChooseOption(event.currentTarget.value)}>
                <option>-Select-</option>
                {allShowsList.map((show) =>(
                    <option key={show.name_show}>
                        {show.name_show}
                    </option>
                ))}
            </select>

            <button className="delete" type="button" onClick={Remove}>Delete</button>
            <button className="back" type="button">Back</button>
        </div>
    )
} export default DeleteEntry;