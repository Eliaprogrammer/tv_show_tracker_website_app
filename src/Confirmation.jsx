import {useState} from 'react';

function Remove(){
    return (
        <div className="delete_confirm">
            <div className="alert">
                <h1>Are you sure you want to continue?</h1>
                <p>You can't undo the deletion</p>
            </div>
        </div>
    )
}

function Edit(){
    return (
        <div className="update_confirm">
            <div className="alert">
                <h1>Are you sure you want to continue?</h1>
                <p>You can't undo the deletion</p>
            </div>
        </div>
    )
}


// function Confirmation(update, remove){
//     const [pop_up, setPopUp] = useState("");
//     return (
//
//
//     )
// } export default Confirmation;