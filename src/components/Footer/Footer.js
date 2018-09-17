import React from 'react';
import cssClasses from './Footer.css';

const footer = (props) => {

    return (
        <footer className={cssClasses.Footer} >
            {props.city}
        </footer>
    )

}

export default footer;