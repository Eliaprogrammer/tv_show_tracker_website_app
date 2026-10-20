import { IoCheckmarkSharp } from "react-icons/io5";
import { IoMdUndo } from "react-icons/io";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import './E&DEntry.css'
import Navbar from "./NavBar.jsx";
import {DeleteShow, FetchShowName} from "./CRUD.jsx";

function DeleteEntry(){

    const navigate = useNavigate();
    const [tv, setTv] = useState([]);
    const [displayConfirmation, setDisplayConfirmation] = useState(false);


    useEffect(() => {
        async function Title() {
            try{
                const title = await FetchShowName()
                setTv(title);

            } catch (error){
                console.error("Error to display show: ", error.message);

            }
        }

        Title()
    }, []);

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

    async function HandleDelete(){
        try{
            await DeleteShow();
            console.log("Show deleted");
            navigate("/dashboard");
        }
        catch(error){
            console.error("Error while deleting show: ", error);
        }

    }

    return (

        <div>
            <Navbar />
            {!displayConfirmation ? (
                <>
                    <p>Please select a show to delete</p>

                    <select  >
                        <option>-Select-</option>
                        {
                            <option key={show.id} value={tv}>
                                {show.title}
                            </option>
                        }
                    </select>


                    <button className="delete_button" type="button" onClick={()=>setDisplayConfirmation(true)}>Delete</button>
                    <button className="back" type="button" onClick={()=> navigate('/dashboard')}>Back</button>
                </>
            ) : (
                <Remove onCancel={()=>setDisplayConfirmation(false)} />
            )}

        </div>
    )
}
export default DeleteEntry;