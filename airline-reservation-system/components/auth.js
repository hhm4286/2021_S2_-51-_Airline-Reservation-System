
import "firebase/auth";
import firebase from "firebase/app";
import { createContext, useState, useEffect, useContext } from 'react';
import nookies from 'nookies'
import firebaseConfig from '../components/firebaseConfig'
import { auth } from "../components/firebaseConfig";

const AuthContext = createContext();

// Take in children that will be passed as a prop 
export const AuthProvider = ({children}) => {
    
    // Set states to null
    const[user, setUser] = useState(null);

    function login(email, password){
        return firebase.auth().signInWithEmailAndPassword(email, password)
    }

    const values  = {
        user,
        login
    }

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
        setUser(user);
    })

        return unsubscribe;
    }, [])
    

    // Handle to see if ID token has changed
    useEffect(() => {
        return firebase.auth().onIdTokenChanged(async (user) => {
            if (!user){
                setUser(null);
                nookies.set(undefined, "token", "", {path: '/'})
                return;
            }
            const token = await user.getIdToken();
            setUser(user);
            nookies.set(undefined, "token", token, {path: '/'});
            
        })
    }, [])

    useEffect(() => {
        const handle = setInterval(async() => {
            const user = firebaseConfig.auth().currentUser;
            if (user) await user.getIdToken(true);
        }, 10 * 60 * 1000);
        return () => clearInterval(handle);
    }, [])

    return (
    <AuthContext.Provider value = {{values}>{children}}>
        {children}
    </AuthContext.Provider>)
}

// export const useAuth = () => useContext(AuthContext);

export function useAuth()
{
    return useContext(AuthContext)
}