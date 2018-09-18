import React from 'react';
import styles from './Forecast-Error.scss';

const errorDisplay = (props) => {

    return (
        <div className={styles['forecast-error']}>
            Error getting weather data from the server.
        </div>
    )

}

export default errorDisplay;