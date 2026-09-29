import {IoCheckmarkSharp} from "react-icons/io5";
import {IoMdUndo} from "react-icons/io";


function EditEntry({allShowsList}){
    function Edit(){
        return (
            <div className="update_confirm">
                <div className="alert">
                    <h1>Are you sure you want to continue?</h1>
                    <p>You can't undo the deletion</p>
                </div>

                <button type="button" className="yes"><IoCheckmarkSharp /></button>
                <button type="button" className="undo"><IoMdUndo /></button>

            </div>
        )
    }

    function HandleUpdate(){

    }
    return(
        <div>
            <p>Please select a show to Edit</p>

            <select>
                <option>- Select- </option>
                {allShowsList.map((show) =>(
                    <option key={show.name_show}>
                        {show.name_show}
                    </option>
                ))}
            </select>


            <button type="button" className="update" onClick={Edit}>Update</button>

            <button className="back" type="button">Back</button>


        </div>
    )

}
export default EditEntry;