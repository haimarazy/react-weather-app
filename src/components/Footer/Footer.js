import React from 'react';
import styles from './Footer.scss';

const footer = (props) => {

    return (
        <footer className={styles.Footer} >
            {props.city}
        </footer>
    )

}

export default footer;