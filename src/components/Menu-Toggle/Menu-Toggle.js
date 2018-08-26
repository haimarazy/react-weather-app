import React from 'react';
import cssClasses from './Menu-Toggle.css';

const menuToggle = (props) => (
    <div className={cssClasses.MenuToggle} onClick={props.toggleMenu} >
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default menuToggle;
