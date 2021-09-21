import React from 'react'
import firebase from 'firebase/app';
import firebaseConfig from '../components/firebaseConfig'
import {verifyIdToken} from '../components/firebaseAdmin'; 
import nookies from 'nookies';



function profile({session})
{
    firebaseConfig();

    if (session) {
        return (
            <div className = "container">
                <p>Authenticated</p>
                <Text textAlign = "center">{session}</Text>
                <button className = "btn btn-primary"
                onClick = {async () => {
                    await firebase.auth().signOut();
                    window.location.href = "/";
                }}/> 
            </div>
        )
    }
    else{
        return (
            <text>Loading...</text>
        )
    }
    
}

export async function getServerSideProps(context){
    try{
        const cookies = nookies.get(context);
        const token = await verifyIdToken(cookies.token);
        const {email} = token;
        return {
            props: {session: email}
        }
    }
    catch (err) {
        context.res.writeHead(302, {location: "/login"})
        context.res.end();
        return 
        {
            props: {}
        }
    }
    
}

export default profile;