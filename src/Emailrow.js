import React from 'react';
import './Emailrow.css';
import {Checkbox,IconButton} from '@material-ui/core';
import Startborderoutlinedicon from '@material-ui/icons/StarBorderOutlined';
import Labelimportoutlinedicon from '@material-ui/icons/LabelImportantOutlined';
import {useHistory} from 'react-router-dom';


function Emailrow({title,subject,description,time,jpid}) {
    const history =useHistory();
    return (
        <div onClick={()=>history.push(`/Mail/${jpid}`)} className="emailrow">
            <div className="emailrow__option">
                <Checkbox/>
                <IconButton>
                    <Startborderoutlinedicon/>
                </IconButton>
                <IconButton>
                    <Labelimportoutlinedicon/>
                </IconButton>
            </div>
            <div className="emailrow__title">
                <h3>{title}</h3>
            </div>
            <div className="emailrow__message">
                <h4>{subject}
                  <span className="emailrow__description">{description}</span>
                </h4>
            </div>
           
            <div className="emailrow__time">
                {time}
            </div>
        </div>
    );
}

export default Emailrow;