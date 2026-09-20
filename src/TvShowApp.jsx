"use client"
import React from 'react';
import {useMediaQuery} from 'react-responsive';
import {useNavigate} from 'react-router-dom';

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

    )
}
function Header(){
    const navigate = useNavigate();
    return(
        <>
            <div className="heading">
                <h1>TV Show Tracker</h1>
            </div>

            <div className="top_buttons">
                <button className="top_login_button" type="submit" onClick={()=>navigate("/sign_in")}> Login</button>
                <button className="top_create_account_button" onClick={()=>navigate("/create_account")}>
                    Create Account
                </button>
            </div>
        </>
    )
}

function Body(){
    const navigate = useNavigate();
    return(
        <>
            <div className="content">

                <div className="account">
                    <p className="header"><i>Create an account or login</i></p>
                    <p>All your show in one place</p>
                </div>

                <div className="add">
                    <p className="header"><i>Add</i></p>
                    <p>Add new shows to your watch list</p>
                </div>

                <div className="manage">
                    <p className="header"><i>Manage</i></p>
                    <p>Choose what shows stay and go</p>
                </div>

                <div className="access">
                    <p className="header"><i>View</i></p>
                    <p> View all shows at once or sort by streaming service</p>
                </div>

            </div>

            <div className="bottomButtons">
                <button className="bottom_login_button" onClick={()=>navigate("/sign_in")}> Login </button>
                <button className="bottom_create_Account_Button" onClick={() => navigate("/create_account")}>
                    Create Account
                </button>
            </div>
        </>
    )
}

export default TvShowApp
