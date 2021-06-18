import React from 'react';
import './Section.css';

function Section({Icon,color,title,std}) {
    return (
        <div className={`section  ${std && 'section__std'}`}
            style={{borderBottom:`1px solid ${color}`,
            color:`${std && color}`
        }}
        >
            <Icon className="ic"/>
            <h4>{title}</h4>

        </div>
    );
}

export default Section;