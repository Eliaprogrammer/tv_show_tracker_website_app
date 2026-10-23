import {IoCheckmarkSharp} from "react-icons/io5";
import {IoMdUndo} from "react-icons/io";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from 'react';
import './E&DEntry.css'
import Navbar from "./Navbar.jsx";
import {FetchShowName, UpdateShow} from "./CRUD.jsx";

function EditEntry(){

    const navigate = useNavigate();
    const [option, setOption] = useState([]);
    const [updateShow, setUpdateShow] = useState("");
    const [displayConfirmation, setDisplayConfirmation] = useState(false);

    useEffect(() => {
        async function Title() {
            try{

                for (const optionChoice of option) {
                    const title = await FetchShowName()
                    setOption(title);
                }

            } catch (error){
                console.error("Error to display show: ", error.message);

            }
        }

        Title()
    }, []);


    async function HandleUpdate(){
        try{
            await UpdateShow(updateShow)
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

                    <select className="editSelect" value={updateShow}
                            onChange={(e) => setUpdateShow(e.currentTarget.value)} >
                        <option value="">- Select- </option>
                        {option.map((show) =>(
                            <option key={show.id} value={show.id}>
                                {show.show_name}
                            </option>
                        ))}
                    </select>

                    <button className="update_button" type="button"  onClick={()=>setDisplayConfirmation(true)}>Update</button>

                    <button className="back" type="button" onClick={()=>navigate('/dashboard')}>Back</button>

                </>
            ) : (
                <Edit onCancel={()=>setDisplayConfirmation(false)} onConfirm={HandleUpdate}/>

            )}
        </div>
    );

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
} export default EditEntry;