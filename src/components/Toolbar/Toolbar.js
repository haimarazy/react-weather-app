import React from 'react';
import styles from './Toolbar.scss';
import HamburgerButton from './Hamburger-Button/Hamburger-Button';

const toolbar = (props) => {

    return (
        <nav className={styles.Toolbar}>
            <HamburgerButton />            
        </nav>
    )

}

export default toolbar;