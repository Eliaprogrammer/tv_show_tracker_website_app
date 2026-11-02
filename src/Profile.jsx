import Navbar from "./Navbar.jsx";
import {useEffect, useState} from "react";
import {ProfileInfo} from "./services/authService.js";
import './Profile.css';
import {useNavigate} from "react-router-dom";

function UserProfile(){
    const [user, setUser] = useState({full_name:"", email: ""});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(()=> {
        async function LoadProfile() {
            try{
                const profile_data = await ProfileInfo();
                setUser(profile_data);
            } catch(error){
                console.log("Error loading profile info", error);
            } finally{
                setLoading(false);
            }
        }

        LoadProfile();
    }, []);

    if(loading){
        return(
            <div>One moment please .... getting your profile</div>
        )
    }

    return(
        <div className="profile_content">
            <Navbar />

            <h1 className="page_heading">User Profile</h1>

            <div className="table">
                <table className="table_format">

                    <thead>
                    <tr className="table_header">
                        <th className="table_value">Name</th>
                        <th className="table_value">Email</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td className="table_value">{user?.full_name}</td>
                        <td className="table_value">{user?.email}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <button className="back" type="button" onClick={()=> navigate('/dashboard')}>Back</button>
        </div>
    )
} export default UserProfile;
// Function for update profile information. I will not implement this at this time.
// function UserProfile(){
//     const [user, setUser] = useState({full_name:"", email: ""});
//     const [loading, setLoading] = useState(true);
//     const [updateProfile, setUpdateProfile] = useState("");
//
//     const navigate = useNavigate();
//
//
//     useEffect(()=> {
//         async function LoadProfile() {
//             try{
//                 const profile_data = await ProfileInfo();
//
//                 if(profile_data){
//                     setUser(profile_data);
//                 }
//             } catch(error){
//                 console.log("Error loading profile info", error);
//             } finally{
//                 setLoading(false);
//             }
//         }
//
//         LoadProfile();
//     }, []);
//
//     async function SaveUpdateInfo(){
//         try{
//             await UpdateProfile();
//         }
//         catch(error){
//             console.log("Error saving profile", error);
//         }
//
//     }
//
//     if(loading){
//         return(
//             <div>One moment please .... getting your profile</div>
//         )
//     }
//
//     return(
//         <div className="profile_content">
//             <Navbar />
//
//             <h1 className="page_heading">User Profile</h1>
//
//             <form className='profile_form' onSubmit={SaveUpdateInfo}>
//
//                 <div className="profile_details">
//                     <div className="profile_details_name">
//                         <label>Full Name</label>
//                         <input type="text" className="full_name" value={user?.full_name}/>
//                     </div>
//
//                     <div className="profile_details_email">
//                         <label>Email</label>
//                         <input type="email" className="email" value={user?.email} />
//                     </div>
//                     <button type="submit" className="save_profile_update" >Save changes</button>
//                 </div>
//             </form>
//
//             <button className="back" type="button" onClick={()=> navigate('/dashboard')}>Back</button>
//
//         </div>
//     )
// } export default UserProfile;