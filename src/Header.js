import React from 'react';
import './Header.css';
import {Avatar,IconButton} from '@material-ui/core';
import Menubaricon from '@material-ui/icons/Menu';
import Searchicon from '@material-ui/icons/Search';
import Arrowdropdownicon from '@material-ui/icons/ArrowDropDown';
import Appsicon from '@material-ui/icons/Apps';
import  Notificationicon from '@material-ui/icons/Notifications';
import { useStateValue } from "./StateProvider";
import {auth} from './Firebase';


function Header() {
    const [{user},dispatch] = useStateValue();
 
    
    return (
        <div className="header">
            <div className="header__left">
                <Menubaricon/>
                <img src="https://cdn.vox-cdn.com/thumbor/Tbqi3ZF9Qz0fTJIUvkgQe3FdN0k=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" alt="jp"/>
            </div>
            <div className="header__mid">
                <Searchicon/>
                <input type="text" placeholder="Search Mail"/>
                <Arrowdropdownicon/>
            </div>
            <div className="header__right">
                <IconButton>
                    <Appsicon/>
                </IconButton>
                <IconButton>
                    <Notificationicon/>
                </IconButton>
                <IconButton  onClick={()=>auth.signOut().then(console.log("done"))} >    
                    <Avatar src={user?.photoURL} alt="jp"/>
                </IconButton>
                
            </div>
        </div>
    );
}

export default Header;