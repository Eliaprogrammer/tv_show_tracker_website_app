import {IoCloseCircle} from "react-icons/io5";
import {useEffect, useState} from "react";
import './PopUp.css';

 function PopUp(props){
    return ( props.trigger) ? (
        <div className="pop_up">
            <div className="pop_up_inner">
                <button className="close_button"onClick={()=>props.setTrigger(false)}> <IoCloseCircle /> </button>
                {props.children}
            </div>
        </div>
    ): "";
}

function PopUpAction(){
    const [timePopUp, setTimePopUp] = useState(false);

    useEffect(()=> {
        setTimeout(()=> {
            setTimePopup(true);
        }, 300);

    }, [])
    return(
        <PopUp trigger={timePopUp} setTrigger={setTimePopUp} >
            <h1>Action was successful</h1>
        </PopUp>

    );
} export default PopUpAction;

