import { IoMdMenu } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
import {useEffect, useState} from 'react';
import './MenuNav.css';
import {FilterSeriesWatched, FilterShowsAlphabetically, FilterStreamingService, FetchStreamingService} from "./CRUD.jsx";
import ShowTile from './ShowTile.jsx';

function MenuNav () {

    const [open, setOpen] = useState(false)
    const showMenu = () => setOpen(!open)
    const [filterShows, setFilterShows] = useState([])
    const [streamingServices, setStreamingService] = useState([]);


    async function HandleMenu(condition, service){
        try{
            if(condition === "Alphabetical"){
                const sort = await FilterShowsAlphabetically();
                setFilterShows(sort);
            }
            else if(condition === "Streaming Service"){
                const sortStreamingService = await FilterStreamingService(service);
                setFilterShows(sortStreamingService);
            }
            else if(condition === "Shows Watched/Finished"){
                const sortWatchedShows = await FilterSeriesWatched();
                setFilterShows(sortWatchedShows);
            }
        }
        catch(error){
            console.log(error.message);
        }
    }

    useEffect(() =>{
        async function LoadStreamingService(){
            try{
                const platform = await FetchStreamingService();
                setStreamingService(platform);

            }
            catch(error){
                console.log(error.message);
            }
        }
        LoadStreamingService();

    }, []);



    const menu_labels=[
        {
            title: "Menu",
            link: '/dashboard',
            icon: <IoMdMenu/>,
            subNav: [
                {
                    title: "Alphabetical",
                    link: '/dashboard/alphabetically',
                    condition: "Alphabetical"

                },
                {
                    title: "Streaming Service",
                    link: '/dashboard/streaming',
                    subNav: streamingServices.map(service => ({
                        title: service,
                        path: `/dashboard/${service}`,
                        condition: "Streaming Service",
                        streaming: service
                    })),

                },

                {
                    title: "Shows Watched/Finished",
                    link: '/dashboard',
                    condition: "Shows Watched/Finished"
                }
            ]
        }
    ];

    return (
        <div className="menu_nav">
           <div className="nav" onClick={showMenu}>
               <div className="sidebar_wrap">
                   {menu_labels.map((item, index) => (
                       <SubMenu item={item} key={index} HandleMenu={HandleMenu} />
                   ))}
               </div>

               <div className="fetch_results">
                   {filterShows.length > 0 && (
                       <ShowTile allShowsList={filterShows} />
                   )}
               </div>
           </div>
        </div>
    );
}

function SubMenu  ({item, HandleMenu}) {
    const [subMenu, setSubMenu] = useState(false);

    const showSubMenu = () => setSubMenu(!subMenu)

    return(

        <div className={`sub_menu`}>

            <div className="submenu_item" onClick={() => {
                setSubMenu(true);
                if(item.condition){
                    HandleMenu(item.condition, item.streaming);
                }
            }}>
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
                        <SubMenu item={sub} key={index} HandleMenu={HandleMenu} />
                    ))}
                </div>
            )}
        </div>
    );
}
export default MenuNav;