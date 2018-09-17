import React from 'react';
import cssClasses from './Forecast-Item.css';
// import WeatherIcons from './../../assets/css/weather-icons.min.css';
import WeatherIcons from '../../../assets/css/weather-icons.min.css';

const forecastItem = (props) => {

    const wiGenericClass = WeatherIcons.wi;
    const wiCodeClass = WeatherIcons['wi-yahoo-' + props.item.code];
    const glyphClass = `${wiGenericClass} ${wiCodeClass}`;

    return (
        <div className={cssClasses.ForecastItem}>
        
            <div><i className={glyphClass}></i></div>
            <div>
                <span className={cssClasses['High-Temp']}> {props.item.high}&deg; </span>
                <span className={cssClasses['Low-Temp']}> {props.item.low}&deg; </span>
            </div>
            <div className={cssClasses['Forecast-Day']}>{props.item.day}</div>
            <div className={cssClasses['Forecast-Text']}>{props.item.text}</div>
            
        </div>
    )

}

export default forecastItem;
