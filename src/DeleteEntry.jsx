import { IoCheckmarkSharp } from "react-icons/io5";
import { IoMdUndo } from "react-icons/io";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import './E&DEntry.css'
import Navbar from "./Navbar.jsx";
import {DeleteShow, FetchShowName} from "./CRUD.jsx";

function DeleteEntry(){

    const navigate = useNavigate();
    const [option, setOption] = useState([]);
    const [displayConfirmation, setDisplayConfirmation] = useState(false);
    const [selected, setSelected] = useState("");

    useEffect(() => {
        async function Title() {
            try{
                const title = await FetchShowName()
                setOption(title);
            } catch (error){
                console.error("Error to display show: ", error.message);

            }
        }

        Title()
    }, []);


    async function HandleDelete(){
        try{
            await DeleteShow(selected);
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

                    <select className='fetch_Option' value={selected}
                            onChange={(e)=>setSelected(e.currentTarget.value)} >
                        <option value="">-Select-</option>
                        {option.map((name) =>(
                            <option key={name.id} value={name.id}>
                                {name.show_name}
                            </option>
                        ))}
                    </select>


                    <button className="delete_button" type="button" onClick={()=>setDisplayConfirmation(true)}>Delete</button>
                    <button className="back" type="button" onClick={()=> navigate('/dashboard')}>Back</button>
                </>
            ) : (
                <Remove onCancel={()=>setDisplayConfirmation(false)} onConfirm={HandleDelete}/>
            )}

        </div>
    )
}

function Remove({onCancel, onConfirm}){
    return (
        <div className="delete_confirm">
            <div className="alert">
                <h1>Are you sure you want to continue?</h1>
                <p>You can't undo the deletion</p>
            </div>
            <button type="button" className="yes" onClick={onConfirm}><IoCheckmarkSharp /></button>
            <button type="button" className="undo" onClick={onCancel}><IoMdUndo /></button>
        </div>
    )
}
export default DeleteEntry;