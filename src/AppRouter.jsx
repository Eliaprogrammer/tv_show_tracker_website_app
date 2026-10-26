import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NewAccount from './CreateAccount.jsx';
import TvShowApp from './TvShowApp.jsx';
import Login from './Login.jsx';
import Footer from './Footer.jsx';
import GenerateEntry from './GenerateEntry.jsx';
import Dashboard from './Dashboard.jsx';
import EditEntry from "./EditEntry.jsx";
import DeleteEntry from "./DeleteEntry.jsx";
import {useState} from 'react';
import MenuNav from "./MenuNav.jsx";
import ResetForgotPassword from "./ForgotPassword.jsx";
import NewPassword from "./NewPassword.jsx";
import SignOut from "./SignOut.jsx";
import UserProfile from "./Profile.jsx";
import ShowDetails from "./Show.jsx";

 function AppRouter(){
     const [allShowsList, setAllShowsList] = useState([])
    return(

        <BrowserRouter>
            <MenuNav allShowsList={allShowsList} />

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

            <Footer />
        </BrowserRouter>
    );
}
export default AppRouter;