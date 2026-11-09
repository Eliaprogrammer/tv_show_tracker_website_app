import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import TvShowApp from './TvShowApp.jsx';
import NewAccount from './CreateAccount.jsx';
import Login from './Login.jsx';
import ResetForgotPassword from "./ForgotPassword.jsx";
import NewPassword from "./NewPassword.jsx";
import GenerateEntry from './GenerateEntry.jsx';
import Dashboard from './Dashboard.jsx';
import EditEntry from "./EditEntry.jsx";
import DeleteEntry from "./DeleteEntry.jsx";
import SignOut from "./SignOut.jsx";
import UserProfile from "./Profile.jsx";
import ShowDetails from "./Show.jsx";
import "./AppRouter.css";
import facebook from "./assets/facebook.png";
import instagram from "./assets/Instagram_icon.png";

 function AppRouter(){
     const scrollRef = (e) => {
         e.preventDefault();
         window.scrollTo({
             top: 0,
             behavior: "smooth"
         });
     }

    return(

        <BrowserRouter>
            <div className="structure">
                <main>
                    <Routes>
                        <Route path="/" element={<TvShowApp />} />
                        <Route path="/create_account" element={<NewAccount />} />
                        <Route path="/sign_in" element={<Login />} />
                        <Route path="/rest_password" element={<ResetForgotPassword /> } />
                        <Route path='/new_password' element={<NewPassword />} />
                        <Route path="/generate_show" element={<GenerateEntry />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/update_show" element={<EditEntry />} />
                        <Route path="/delete_show" element={<DeleteEntry />} />
                        <Route path="/sign_out" element={<SignOut />} />
                        <Route path="/profile" element={<UserProfile />} />
                        <Route path="/show" element={<ShowDetails />} />
                    </Routes>
                </main>

                <footer>
                    <div className="footer_container">
                        <Link to={"#top"} onClick={(e)=> scrollRef(e)}> Return to top</Link>

                        <div className="footer">

                            <div className="footer_links">
                                <p>Getting Started</p>
                                <p>About us</p>
                            </div>

                            <div className="address" >
                                <p>123 address lane</p>
                                <p>Apopka, Florida</p>
                                <p>32703</p>
                            </div>

                            <div className="images">
                                <img src={facebook} alt = "An image of facebook logo"/>
                                <img src={instagram} alt = "An image of instagram logo"/>
                            </div>

                            <div className="info">
                                <p>123-456-7890</p>
                                <p>info@tvtracker.com</p>

                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        </BrowserRouter>
    );
}
export default AppRouter;