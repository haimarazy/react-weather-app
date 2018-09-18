import React from 'react';
import styles from './Forecast-Item.scss';
import WeatherIcons from '../../../assets/css/weather-icons.min.css';

const forecastItem = (props) => {

    const wiGenericClass = WeatherIcons.wi;
    const wiCodeClass = WeatherIcons['wi-yahoo-' + props.item.code];
    const glyphClass = `${wiGenericClass} ${wiCodeClass}`;

    return (
        <div className={styles['forecast-item']}>
        
            <div><i className={glyphClass}></i></div>
            <div>
                <span className={styles['High-Temp']}> {props.item.high}&deg; </span>
                <span className={styles['Low-Temp']}> {props.item.low}&deg; </span>
            </div>
            <div className={styles['Forecast-Day']}>{props.item.day}</div>
            <div className={styles['Forecast-Text']}>{props.item.text}</div>
            
        </div>
    )

}

export default forecastItem;
