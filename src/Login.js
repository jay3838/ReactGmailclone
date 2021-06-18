import React from 'react';
import {Button} from '@material-ui/core';
import './Login.css';
import { auth, provider } from './Firebase';
import { useStateValue } from "./StateProvider";


function Login() {
    const [state,dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result)=>{
            console.log(result);
            dispatch({
                type: "SET_USER",
                user:result.user,
              });
        })
        .catch((error)=>{
            alert(error.message)
        })
    }

    return (
        <div className='login'>
            <img src="https://cdn.vox-cdn.com/thumbor/Tbqi3ZF9Qz0fTJIUvkgQe3FdN0k=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" alt="login"/>
            <Button variant="contained" color="primary" onClick={()=>signIn()} >Login</Button>
        </div>
    );
}

export default Login;