import { IoMdMenu } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
import {useState} from 'react';
import './MenuNav.css';

function MenuNav ({allShowsList}) {

    const [open, setOpen] = useState(false)
    const showMenu = () => setOpen(!open)
    console.log(allShowsList)
    const streamingServices = JSON.parse(localStorage.getItem('allShowsList')) || [];
    console.log(streamingServices, "streaming service");


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
                    subNav: streamingServices.map(service => ({
                        title: service.streaming,
                        path: `/dashboard/streaming/${service.streaming}`
                    }))
                },

                {
                    title: "Shows Watched/Finished",
                    path: '/dashboard/finished'
                }
            ]
        }
    ];

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

function SubMenu  ({item}) {
    const [subMenu, setSubMenu] = useState(false);

    const showSubMenu = () => setSubMenu(!subMenu)

    return(

        <div className={`sub_menu `}>

            <div className="submenu_item" onClick={() => setSubMenu(true)}>
                <span className="submenu_icon">{item.icon}</span>
                <span className="submenu_title">{item.title}</span>

            </div>

            {subMenu && item.subNav && (
                <div className="dropdown_menu">
                    <div className="close_submenu"
                        onClick={showSubMenu}
                    >
                        <IoCloseCircle />
                    </div>

                    {item.subNav.map((sub, index) =>(
                        <SubMenu item={sub} key={index} />
                    ))}
                </div>
            )}
        </div>
    );
}
export default MenuNav;