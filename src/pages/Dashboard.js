import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
//import "./Dashboard.css";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { Navbar } from "react-bootstrap";
function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
  return (
    <div className="dashboard">
      <div className="dash-navbar" style={{backgroundColor: 'black', width: '100%',height:'80px', textAlign: 'center', position: 'relative'}}>
       <div style={{ display: 'inline-block', color: 'white', paddingTop: '10px', position: 'absolute', fontSize: '50px'}}>
        Sync
       </div>
       <div className="dashboard__container" style={{color: 'white', display: 'inline-block', margin: '10px', marginTop: '-10px',position: 'absolute', margin: 0, right: '1%'}}>
        Logged in as
         <div>{name}</div>
         <div>{user?.email}</div>
         <button className="dashboard__btn" onClick={logout}>
          Logout
         </button>
        </div>
      </div>
     </div>
  );
}
export default Dashboard;