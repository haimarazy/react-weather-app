import React from 'react';
import cssClasses from './Forecast-Error.css';

const errorDisplay = (props) => {

    return (
        <div className={cssClasses['error-display']}>
            Error getting weather data from the server.
        </div>
    )

}

export default errorDisplay;