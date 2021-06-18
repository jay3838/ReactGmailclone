import React from 'react';
import './Sidebaroption.css';

function Sidebaroption({Icon,title,number,std}) {
    return (
        <div className={`sidebaroption ${std && 'sidebaroption_action'}`}>
            <Icon/>
            <h3>{title}</h3>
            <p>{number}</p>
            
        </div>
    );
}

export default Sidebaroption;