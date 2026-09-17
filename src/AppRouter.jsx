import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NewAccount from './CreateAccount.jsx';
import TvShowApp from './TvShowApp.jsx';
import Login from './Login.jsx';
import Footer from './Footer.jsx';
import GenerateEntry from './GenerateEntry.jsx';
import NewUserDashboard from './NewUserDashboard.jsx';

 function AppRouter(){
    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TvShowApp />} />
                <Route path="/create_account" element={<NewAccount />} />
                <Route path="/sign_in" element={<Login />} />
                <Route path="/generate_show" element={<GenerateEntry />} />
                <Route path="/new_user_dashboard" element={<NewUserDashboard />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
export default AppRouter;