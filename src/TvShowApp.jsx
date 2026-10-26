"use client"
import React from 'react';
import {useMediaQuery} from 'react-responsive';
import {Link} from 'react-router-dom';
import './TvShowApp.css';

const Responsiveness = () =>{
    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-width: 1224px)"
    })
    const isBigScreen = useMediaQuery({query:"(min-width:1824px)"})
    const isTabletOrMobile = useMediaQuery({query:"(max-width:1223px)"})
    const isRetina = useMediaQuery({query:"(min-resolution: 2dppx)"})

    console.log(isDesktopOrLaptop, isBigScreen, isTabletOrMobile, isRetina );
}

function TvShowApp() {
    return (
        <div >
            <Responsiveness/>
            <Header />
            <Body />
        </div>
    );
}
function Header(){
        return(
        <>
            <div className="heading">
                <h1>TV Show Tracker</h1>
            </div>
        </>
    );
}

function Body(){
    return(
        <>
            <div className="content">

                <div className="account">
                    <Link to="/sign_in" className="header"><i>Create an account or login</i></Link>
                    <p>All your show in one place</p>
                </div>

                <div className="add">
                    <Link to="/generate_show" className="header"><i>Add</i></Link>
                    <p>Add new shows to your watch list</p>
                </div>

                <div className="manage">
                    <Link to="delete_show" className="header"><i>Manage</i></Link>
                    <p>Choose what shows stay and go</p>
                </div>

                <div className="access">
                    <Link to="/dashboard" className="header"><i>View</i></Link>
                    <p> View all shows at once or sort by streaming service</p>
                </div>

            </div>
        </>
    );
}

export default TvShowApp;
