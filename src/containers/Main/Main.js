import React from 'react';
import cssClasses from './Main.css';
import ForecastItem from './../../components/Forecast-Item/Forecast-Item';

const main = (props) => {

    let items = props.forecast && props.forecast.map((item, index) => {
        return <ForecastItem item={item} key={item.date} index={index} />
    });
    
    return (
        <main className={cssClasses.Main}>
            {items}
        </main>
    )

}

export default main;