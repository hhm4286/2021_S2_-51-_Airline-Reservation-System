import nookies from 'nookies';
import firebaseConfig from '../components/firebaseConfig';
import "firebase/auth";
import { createContext, useState, useEffect, useContext} from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    
    const[user, setUser] = useState(null);

    useEffect(() => {
        return firebaseConfig.auth().onIdTokenChanged(async (user) => {
            if (!user){
                setUser(null);
                nookies.set(undefined, "token", "", {});
                return;
            }
            const token = await user.getIdToken();
            setUser(user);
            nookies.set(undefined, "token", token, {});  
        });
    }, []);

    

    return (<AuthContext.Provider value = {{user}}>{children}
    </AuthContext.Provider>)
}

export const useAuth = () => useContext(AuthContext);
