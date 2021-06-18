import React, { useState } from 'react';
import './Sendmail.css';
import Closeicon from '@material-ui/icons/Close';
import {Button} from '@material-ui/core';
import {db} from './Firebase.js';
import firebase from 'firebase';

function Sendmail() {
    const [email,setemail] = useState('');
    const [subject,setsubject] = useState('');
    const [message,setmessage] = useState('');

    const handle=(e)=>{
        e.preventDefault();
    
        db.collection('rooms').add({
          email:email,
          subject:subject,
          description:message,
          time:firebase.firestore.FieldValue.serverTimestamp(),
        });
        setemail("");
        setsubject("");
        setmessage("");
    
      }

    return (
        <div className="sendmail">
            <div className="sendmail__header">
                <h3>New message</h3>
                <Closeicon />
            </div>

            <input type="text" value={email} placeholder="To Email" onChange={event => setemail(event.target.value)}/>
            <input type="text" value={subject} placeholder="Subject" onChange={event => setsubject(event.target.value)}/>
            <input type="text" value={message} placeholder="Message" className="jp" onChange={event => setmessage(event.target.value)}/>

            <div className="sendmail__option">
                <Button onClick={handle} >Send</Button>
            </div>
        </div>
    );
}

export default Sendmail;