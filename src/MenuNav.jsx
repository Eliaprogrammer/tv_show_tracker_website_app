import { IoMdMenu } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
import {useState} from 'react';
import './MenuNav.css';

function MenuNav () {

   const [open, setOpen] = useState(false)

    const showMenu = () => setOpen(!open)

    return (
        <div className="menu_nav">
           <div className="nav" onClick={showMenu}>
               <div className="sidebar_wrap">
                   {menu_labels.map((item, index) => (
                       <SubMenu item={item} key={index} />
                   ))}
               </div>
           </div>
        </div>
    );
}

const menu_labels=[
        {
            title: "Menu",
            path: '/dashboard',
            icon: <IoMdMenu/>,
            subNav: [
                {
                    title: "Alphabetical",
                    path: '/dashboard/alphabetical'

                },
                {
                    title: "Streaming Service",
                    path: '/dashboard/streaming',
                    services: [

                    ]
                },

                {
                    title: "Shows Watched/Finished",
                    path: '/dashboard/finished'
                }
            ]
        }
];

let SubMenu = ({item}) => {
    const [subMenu, setSubMenu] = useState(false);
    const showSubMenu = () => setSubMenu(!subMenu)

    return(


        <div className={`sub_menu ${subMenu ? "expanded" : ""}`}>


            <div className="submenu_item" onClick={item.subNav ? showSubMenu : null}>
                <span className="submenu_icon">{item.icon}</span>
                <span className="submenu_title">{item.title}</span>

            </div>

            {subMenu && item.subNav && (
                <div className="dropdown_menu">
                    <div className="close_submenu" onClick={showSubMenu}>
                        <IoCloseCircle />
                    </div>

                    {item.subNav.map((sub, index) =>(
                        <div className="dropdown_menu" key={index}>
                            <span className="dropdown_label">{sub.title}</span>
                        </div>
                        ))}
                </div>
            )}

        </div>
    );
};

export default MenuNav;