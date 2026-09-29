import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NewAccount from './CreateAccount.jsx';
import TvShowApp from './TvShowApp.jsx';
import Login from './Login.jsx';
import Footer from './Footer.jsx';
import GenerateEntry from './GenerateEntry.jsx';
import NewUserDashboard from './NewUserDashboard.jsx';
import Dashboard from './Dashboard.jsx';
import EditEntry from "./EditEntry.jsx";
import DeleteEntry from "./DeleteEntry.jsx";
import Confirmation from "./Confirmation.jsx";
import {useState} from 'react';
import MenuNav from "./MenuNav.jsx";

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
                    <Route path="/generate_show" element={<GenerateEntry setAllShowsList={setAllShowsList}/>} />
                    <Route path="/new_user_dashboard" element={<NewUserDashboard />} />
                    <Route path="/dashboard" element={<Dashboard allShowsList={allShowsList}/>} />
                    <Route path="/update_show" element={<EditEntry allShowsList={allShowsList} />} />
                    <Route path="/delete_show" element={<DeleteEntry allShowsList={allShowsList}/>} />
                    <Route path="confirmation" element={<Confirmation allShowsList={allShowsList}/>} />
                </Routes>
            </main>

            <Footer />
        </BrowserRouter>
    );
}
export default AppRouter;