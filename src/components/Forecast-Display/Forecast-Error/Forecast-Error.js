import React from 'react';
import styles from './Forecast-Error.scss';

const errorDisplay = (props) => {

    return (
        <div className={styles['error-display']}>
            Error getting weather data from the server.
        </div>
    )

}

export default errorDisplay;