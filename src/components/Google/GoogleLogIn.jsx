/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const GoogleLogIn = () => {
    const { 
        loader,
        googleLogin,
        emailSignIn,
        emailLogIn,
        logOut } =useContext(AuthContext) ;
        const handleSubmit=()=>{
            googleLogin()
            .then(result=>{
                console.log(result.email)
            })
            .catch(error=>console.log(error))
        }
    return (
        <div>
            <button onClick={handleSubmit} className="btn btn-outline btn-info">Login with Google</button>


        </div>
    );
};

export default GoogleLogIn;