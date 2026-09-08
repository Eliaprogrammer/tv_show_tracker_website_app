"use client"
import React from 'react'
import {createRoot} from 'react-dom/client'
import {useMediaQuery} from 'react-responsive'
import './TvShowApp.css'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<TvShowApp/>)

const Responsiveness = () =>{
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px'
    })
    const isBigScreen = useMediaQuery({query:'(min-width:1824)'})
    const isTabletOrMobile = useMediaQuery({query:'(max-width:1223)'})
    const isRetina = useMediaQuery({query:'(min-resolution: 2dppx)'})

    console.log(isDesktopOrLaptop, isBigScreen, isTabletOrMobile, isRetina );


}

function TvShowApp() {
    return (
        <div >
            <Responsiveness/>
            <Header />
            <Body />
            <Footer />
        </div>

    )
}
function Header(){
    return(
        <>
            <div className="heading">
                <h1>TV Show Tracker</h1>
            </div>

            <div className="topButtons">
                <button className="topLoginButton"> Login</button>
                <button className="top_create_Account_Button" > Create Account</button>
            </div>
        </>
    )
}

function Body(){
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
                <button className="bottomLoginButton"> Login </button>
                <button className="bottom_create_Account_Button" > Create Account </button>
            </div>
        </>
    )
}

function Footer(){
    return(
        <div>
            <a href = "top"> Return to top</a>
            <div className="footer">


                <div className="footerLinks">
                    <p>Getting Started</p>
                    <p>About us</p>
                </div>



                <div className="address" >
                    <p>123 address lane</p>
                    <p>Apopka, Florida</p>
                    <p>32703</p>
                </div>

                <div className="Images">
                    <img src= "src/assets/facebook.png" alt = "An image of facebook logo"/>
                    <img src= "src/assets/Instagram_icon.png" alt = "An image of instagram logo"/>
                </div>

                <div className="info">
                    <p>123-456-7890</p>
                    <p>info@tvtracker.com</p>

                </div>
            </div>
        </div>


    )
}

export default TvShowApp