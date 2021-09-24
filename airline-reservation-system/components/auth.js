
import "firebase/auth";
import firebaseConfig from '../components/firebaseConfig'
import firebase from "firebase/app";
import { createContext, useState, useEffect, useContext } from 'react';
import nookies from 'nookies'

const AuthContext = createContext({});

// Take in children that will be passed as a prop 
export const AuthProvider = ({children}) => {
    
    // Set states to null
    const[user, setUser] = useState(null);

    function registerUser(email, password){
        return (firebaseConfig.auth().createUserWithEmailAndPassword(email, password))
    }

    function signInUser(email, password){
        return (firebaseConfig.auth().signInWithEmailAndPassword(email, password));
    }

    const values  = {
        user,
        registerUser,
        signInUser
    }

    // Handle to see if ID token has changed
    useEffect(() => {
        return firebase.auth().onIdTokenChanged(async (user) => {
            if (!user){
                setUser(null);
                nookies.set(undefined, "token", "", {})
                return;
            }
            const token = await user.getIdToken();
            setUser(user);
            nookies.set(undefined, "token", token, {});
            
        })
    }, [])

    return (
    <AuthContext.Provider value = {{ user }>{ children }}>
        {children}
    </AuthContext.Provider>)
}

export const useAuth = () => useContext(AuthContext);