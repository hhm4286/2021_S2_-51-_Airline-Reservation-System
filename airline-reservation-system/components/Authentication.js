import React, { useContext, createContext, useState, useEffect } from 'react'
import { auth } from '../components/firebaseConfig'
import nookies from 'nookies'

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthenticationProvider({ children }) {
    
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true);

    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function logout()
    {
        return auth.signOut()
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe;
    }, [])
    

    useEffect(() => {
        return auth.onIdTokenChanged(async (currentUser) => {
            if (!currentUser){
                setCurrentUser(null);
                nookies.set(undefined, "token", "", {path: '/'})
                return;
            }
            const token = await currentUser.getIdToken();
            setCurrentUser(currentUser);
            nookies.set(undefined, "token", token, {path: '/'});
            
        })
    }, [])


    const value = {
        currentUser,
        login,
        signup,
        logout
    }



    return (
        <AuthContext.Provider value = {value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
export const getServerSideProps = async (context) => {
    const { auth } = cookies(context)
}