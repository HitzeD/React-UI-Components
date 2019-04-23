import React from 'react';
import './Button.css';


const ActionButton = props => {
    return (
        <div className="action">
            <p>{props.action}</p>
        </div>
    );
}

export default ActionButton;