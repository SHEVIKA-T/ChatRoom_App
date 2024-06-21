import React, { useState,useRef} from "react";
import './App.css';
import { Chat } from "./components/Chat";
import { Auth } from "./components/Auth.js";
import Cookies from "universal-cookie";
import {signOut} from "firebase/auth";
import {auth} from "./firebase-config";

const cookies = new Cookies();


function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);
  
  const roomInputRef=useRef(null);

  const signUserOut =async()=>{
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  };
  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth}/>
      </div>
    );
   }

  return (
   
    < div className="roomcss" >
  {
    room?(
       <Chat room={room}/>
      ) : (
    <div className="room">
      <center><label>Enter Room Name:</label></center><br />
      <input ref={roomInputRef}/><br />
      <center><button type="button" class="btn btn-outline-success" onClick={()=> setRoom(roomInputRef.current.value)}>
        Enter Chat 
        </button></center>
      </div >
    )}

    <div className="sign-out">
        <button type="button" class="google-btn"onClick={signUserOut} >Sign Out</button>
    </div>
    </div >
    
  );
}


export default App;
