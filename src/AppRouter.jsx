import {BrowserRouter, Routes, Route} from "react-router-dom";
import NewAccount from './CreateAccount.jsx';
import TvShowApp from './TvShowApp.jsx';
import Login from './Login.jsx';
import Footer from "./Footer.jsx"

 function AppRouter(){
    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TvShowApp />} />
                <Route path="/create_account" element={<NewAccount />} />
                <Route path="/sign_in" element={<Login />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
export default AppRouter;