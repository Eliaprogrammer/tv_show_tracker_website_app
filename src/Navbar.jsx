import { IoHome } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { FaPencil } from "react-icons/fa6";
import { BsFillTrash3Fill } from "react-icons/bs";
import { IoPersonCircle } from "react-icons/io5";
import { GiExitDoor } from "react-icons/gi";

import "./Navbar.css"
import {useNavigate} from "react-router-dom";


const remote_options = [
    {
        icon: <IoHome />,
        condition: "home",
        path: "/",
    },
    {
        icon: <IoMdAdd  className="add_action"/>,
        condition: "add",
        path: "/generate_show",
    },
    {
        icon: <FaPencil />,
        title: "Edit",
        condition: "update",
        path: "/update_show",

    },
    {
        icon: <BsFillTrash3Fill  />,
        title: "Delete",
        condition: "delete",
        path: "/delete_show",


    },
    {
        icon:<IoPersonCircle />,
        title: "Profile",
        condition: "profile",
        path: "/profile",
    },
    {
        icon: <GiExitDoor />,
        condition: "exit",
        path: "/sign_out",
    }

];
function Navbar(){
    const navigate = useNavigate();

    function HandleIconClick(action){
        if(action.path){
            navigate(action.path);
        }
    }

    return (
        <div className="action_elements" >
            {remote_options.map((action, index) =>(
                <div className="action_option" key={index}  onClick={() => HandleIconClick(action)}>
                    <span className="remote_icon" onClick={() => HandleIconClick(action)}>{action.icon}</span>
                    <span className="remote_title">{action.title}</span>
                </div>
            ))}
        </div>
    )
} export default Navbar;