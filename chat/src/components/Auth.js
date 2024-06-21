import { auth, provider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export const Auth = ( props) => {
  const { setIsAuth }=props;

    const signInWithGoogle = async () => {
        try{
       const result = await signInWithPopup(auth, provider);
       cookies.set("auth-token", result.user.refreshToken);
       setIsAuth(true);
      } catch (err) {
        console.error(err);
      }
    };

    return (
      <div className="auth">
        <p> More than just words </p>
        <p > on a screen<span> <span class="dot1"> </span><span class="dot2"></span><span class="dot3"></span></span></p>
       <center><lord-icon
  src="https://cdn.lordicon.com/kiynvdns.json"
  trigger="hover"
></lord-icon></center><br />
        <center><button type="button" class="google-btn" onClick={signInWithGoogle}> Sign In With Google </button></center>
      </div>
    );
  };
  