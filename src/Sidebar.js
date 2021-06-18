import React from 'react';
import './Sidebar.css';
import {Button,IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Sidebaroption from './Sidebaroption';
import Inboxicon from '@material-ui/icons/Inbox';
import Started from '@material-ui/icons/Star';
import Accestimeicon from '@material-ui/icons/AccessTime';
import Nearmeicon from '@material-ui/icons/NearMe';
import Noteicon from '@material-ui/icons/Note';
import Expandmoreicon  from '@material-ui/icons/ExpandMore';
import Personicon  from '@material-ui/icons/Person';
import Duoicon  from '@material-ui/icons/Duo';
import Phoneicon  from '@material-ui/icons/Phone';

function Sidebar() {
    return (
        <div className="sidebar">
            <Button  className="sidebar__button" startIcon={<AddIcon  fontSize="large" />} >Compose</Button>
            <Sidebaroption Icon={Inboxicon} title="Inbox" number="54" std={true}/>
            <Sidebaroption Icon={Started} title="Snoozed" number="54"/>
            <Sidebaroption Icon={Accestimeicon} title="Important" number="54"/>
            <Sidebaroption Icon={Nearmeicon} title="Sent" number="54"/>
            <Sidebaroption Icon={Noteicon} title="Drafts" number="54"/>
            <Sidebaroption Icon={Expandmoreicon} title="More" number="54"/>
        <div className="sidebar__footer">
            <div className="sidebar__footericon">
                <IconButton>
                    <Personicon/>
                </IconButton>
                <IconButton>
                    <Duoicon/>
                </IconButton>
                <IconButton>
                    <Phoneicon/>
                </IconButton>
            </div>
        </div>
        </div>
    );
}

export default Sidebar;