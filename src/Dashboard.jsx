import './Dashboard.css';
import {useEffect, useState} from "react";
import Navbar from "./Navbar.jsx";
import {FetchShowName} from './CRUD.jsx';
import {Link} from "react-router-dom";
import MenuNav from './MenuNav.jsx';
import ShowTile from "./ShowTile.jsx";

function Dashboard(){


    const [tv, setTv] = useState([]);
    const [display, setDisplay] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        async function DisplayShow() {
            try{
                const title = await FetchShowName()
                setTv(title);
                setDisplay(title);

            } catch (error){
                console.error("Error to display show: ", error.message);
                setError(error.message)
            }

            setLoading(false)
        }

        DisplayShow()
    }, [])

    return(
        <>
            <div className="dashboard">
               <MenuNav onFilterSelect={setDisplay} allShows={tv}/>
                <Navbar/>

                <div>
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                            <p>Could not load show(s): You have to be sign in  <Link to="/"> Go to Home Page</Link></p>
                    ) : tv.length === 0 ? (
                        <div className="text">
                            <p>Add a show to view details</p>
                        </div>
                    )  : (
                        <ShowTile allShowsList={display} />
                    )}
                </div>
            </div>

        </>

    );
}

export default Dashboard;