/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {  createContext, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase.init'

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({Children}) => {
    const [user,setUser]=useState(null)
    const [loader,setLoader]=useState(true)

    const googleLogin=()=>{
        return signInWithPopup(auth, provider)
    }
    const emailSignIn=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const emailLogIn=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)

    }
    const logOut=()=>{
        signOut(auth)
    }
    const authInfo={
        user,
        loader,
        googleLogin,
        emailSignIn,
        emailLogIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {Children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;