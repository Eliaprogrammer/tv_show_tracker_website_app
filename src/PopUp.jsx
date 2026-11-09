import {useEffect, useState} from "react";
import './PopUp.css';

 function PopUp(props){
    return ( props.trigger) ? (
        <div className="pop_up">
            <div className="pop_up_inner">
                {props.children}
            </div>
        </div>
    ): "";
}

function PopUpAction(props){
    const [timePopUp, setTimePopUp] = useState(false);

    useEffect(()=> {
        const showPopUp = setTimeout(()=> {
            setTimePopUp(true);
        }, 500);

        return () => clearTimeout(showPopUp)

    }, []);

    useEffect(()=>{
        let closePopUpTimer;

        if(timePopUp){
            closePopUpTimer = setTimeout(() => {
                setTimePopUp(false);

                if(props.onClose) {
                    props.onClose();
                }
            }, 3000);
        }
        return () => clearTimeout(closePopUpTimer);
    }, [timePopUp]);

    return(
        <PopUp trigger={timePopUp} setTrigger={setTimePopUp} >
            {props.success ? (
                <h1>Action was successful</h1>
            ): (
                <h1>Please Try Again;There is a problem with the action</h1>
            )}
        </PopUp>

    );
} export default PopUpAction;

