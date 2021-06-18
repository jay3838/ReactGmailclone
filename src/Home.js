import React,{ useEffect, useState } from 'react';
import {IconButton, Checkbox } from '@material-ui/core';
import './Home.css';
import Arrowdropdownicon from '@material-ui/icons/ArrowDropDown';
import Redoicon from '@material-ui/icons/Redo';
import MoreVerticon from '@material-ui/icons/MoreVert';
import CheveronLefticon from '@material-ui/icons/ChevronLeft';
import CheveronRighticon from '@material-ui/icons/ChevronRight';
import KeyboardHideicon from '@material-ui/icons/KeyboardHide';
import Settingicon from '@material-ui/icons/Settings';
import Inboxicon from '@material-ui/icons/Inbox';
import Peopleicon from '@material-ui/icons/People';
import Localoffericon from '@material-ui/icons/LocalOffer';
import Seaction from './Section';
import Emailrow from './Emailrow';
import {db} from './Firebase.js';

function Home() {
    const [message,setmessage] = useState([]);

    useEffect(()=>{
        db.collection('rooms').onSnapshot(snapshot =>{
          setmessage(snapshot.docs.map(doc=>({
                id:doc.id,
              msg:doc.data()
          })
          ))
        })
      });   
    return (
        <div className="home">
           <div className="home__list">
               <div className="home__left">
                   <Checkbox/>
                   <IconButton>
                       <Arrowdropdownicon/>
                   </IconButton>
                   <IconButton>
                        <Redoicon/>
                   </IconButton>
                   <IconButton>
                        <MoreVerticon/>
                   </IconButton>

               </div>
               <div className="home__right">
               <IconButton>
                        <CheveronLefticon/>  
                   </IconButton>
               <IconButton>
                        <CheveronRighticon/>
                   </IconButton>
               <IconButton>
                        <KeyboardHideicon/>
                   </IconButton>
               <IconButton>
                        <Settingicon/>
                   </IconButton>
               </div>

           </div>
        <div className="home__header">
            <Seaction Icon={Inboxicon} title="Primary" color="red" std={true}/>
            <Seaction Icon={Peopleicon} title="Social" color="blue"/>
            <Seaction Icon={Localoffericon} title="Promotions" color="green"/>
        </div>

        <div className="home__email">
           {message.map(({id,msg})=>(
               <div>
                   <Emailrow  key={id}   jpid={id} title="jaypatel" subject={msg.subject} description={msg.description} time="10pm" />
               </div>
                ))} 
        </div>
        {/* <div className="home__email">
            <Emailrow title="Hi jay" subject="how are yoyu" description="Thsis is test" time="10pm" />
            <Emailrow title="Hi jay" subject="how are yoyu" description="Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj" time="10pm" />
            <Emailrow title="Hi jay" subject="how are yoyu" description="Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj" time="10pm" />
            <Emailrow title="Hi jay" subject="how are yoyu" description="Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj" time="10pm" />
            <Emailrow title="Hi jay" subject="how are yoyu" description="Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj" time="10pm" />
            <Emailrow title="Hi jay" subject="how are yoyu" description="Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj" time="10pm" />
            <Emailrow title="Hi jay" subject="how are yoyu" description="Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj" time="10pm" />
            <Emailrow title="Hi jay" subject="how are yoyu" description="Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj" time="10pm" />
            <Emailrow title="Hi jay" subject="how are yoyu" description="Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj" time="10pm" />
            <Emailrow title="Hi jay" subject="how are yoyu" description="Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj" time="10pm" />
            <Emailrow title="Hi jay" subject="how are yoyu" description="Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj" time="10pm" />
            <Emailrow title="Hi jay" subject="how are yoyu" description="Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj" time="10pm" />
            <Emailrow title="Hi jay" subject="how are yoyu" description="Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj Thsis is testffjf jfjf fjjf jfj fnfnf nfnfnffj" time="10pm" />
        </div> */}
        </div>
    );
}

export default Home;