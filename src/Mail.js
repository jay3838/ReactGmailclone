import React, { useEffect, useState } from 'react';
import './Mail.css';
import {IconButton} from '@material-ui/core';
import ArrowBackicon from '@material-ui/icons/ArrowBack';
import Movetoinboxicon from '@material-ui/icons/MoveToInbox';
import Erroricon from '@material-ui/icons/Error';
import Deleteicon from '@material-ui/icons/Delete';
import Checkcircleicon from '@material-ui/icons/CheckCircle';
import Labelimporticon from '@material-ui/icons/LabelImportant';
import Moreverticon from '@material-ui/icons/MoreVert';
import Unfoldmoreicon from '@material-ui/icons/UnfoldMore';
import Printicon from '@material-ui/icons/Print';
import Exittoappicon from '@material-ui/icons/ExitToApp';
import {useHistory} from 'react-router-dom';
import {useParams} from  'react-router-dom';
import {db} from './Firebase';

function Mail() {
    const history =useHistory();
    const {roomId} = useParams();
    const [roomdetail,setroomdetail] = useState(null);

    // const [roommsg,setroommsg]= useState(null);

    useEffect(()=>{
        if(roomId){
            db.collection("rooms").doc(roomId).onSnapshot(snapshot =>{
                setroomdetail(snapshot.data()
                )
              });
              
          
        }


    },[roomId]);
     console.log("my room", roomdetail);
    

    return (
        <div className="mail">
           <div className="mail__header">
                <div className="mail__headerleft">
                    <IconButton onClick={()=>history.push("/")}>
                        <ArrowBackicon/>
                    </IconButton>
                    <IconButton>
                        <Movetoinboxicon/>
                    </IconButton>
                    <IconButton>
                        <Erroricon/>
                    </IconButton>
                    <IconButton>
                        <Deleteicon/>
                    </IconButton>
                    <IconButton>
                        <Checkcircleicon/>
                    </IconButton>
                    <IconButton>
                        <Labelimporticon/>
                    </IconButton>
                    <IconButton>
                        <Moreverticon/>
                    </IconButton>
                </div>
                <div className="mail__headerright">
                    <IconButton>
                        <Unfoldmoreicon/>
                    </IconButton>
                    <IconButton>
                        <Printicon/>
                    </IconButton>
                    <IconButton>
                        <Exittoappicon/>
                    </IconButton>
                  
                </div>
           </div>
           <div className="mail__body">
               <div className="mail__bodyheader">
                    <h2>{roomdetail?.subject}</h2>
                    <Labelimporticon className="mail__label"/>
                    <p>Hello jay</p>
                    <p className="time">10pm</p>
               </div>   
                <div className="mail__message">
                    {roomdetail?.description}
                </div>
           </div>
        </div>
    );
}

export default Mail;