"use client"
import React from 'react';
import {useMediaQuery} from 'react-responsive';
import {useNavigate} from 'react-router-dom';

import './TvShowApp.css'


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

            <div className="topButtons">
                <button className="topLoginButton" type="submit" onClick={()=>navigate("/sign_in")}> Login</button>
                <button className="top_create_Account_Button" onClick={()=>navigate("/create_account")}>
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
                    <h3><i>Create an account or login</i></h3>
                    <p>All the your show in one place</p>
                </div>

                <div className="add">
                    <h3><i>Add</i></h3>
                    <p>Add new show to your watch list</p>
                </div>

                <div className="manage">
                    <h3><i>Manage</i></h3>
                    <p>You get to choose what shows stay and goes</p>
                </div>

                <div className="access">
                    <h3><i>View</i></h3>
                    <p> View all shows that at once or sort by genre</p>
                </div>

            </div>

            <div className="bottomButtons">
                <button className="bottomLoginButton" onClick={()=>navigate("/sign_in")}> Login </button>
                <button className="bottom_create_Account_Button" onClick={() => navigate("/create_account")}>
                    Create Account
                </button>
            </div>
        </>
    )
}

export default TvShowApp
