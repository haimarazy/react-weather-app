import React from 'react';
import cssClasses from './Forecast-Display.css';
import ForecastItem from './../../components/Forecast-Item/Forecast-Item';
import { connect } from 'react-redux';

class ForecastDisplay extends React.Component {

    render() {

        let forecastItems = null;

        if (this.props.forecast && this.props.forecast.length > 0) {
            forecastItems = this.props.forecast.map((item, index) => {
                return <ForecastItem item={item} key={item.date} index={index} />
            });
        }

        return (
            <main className={cssClasses.Main}>
                {forecastItems}
            </main>
        )

    }

}

const mapStateToProps = state => {
    return {
        forecast: state.forecast
    }
}

export default connect(mapStateToProps)(ForecastDisplay);