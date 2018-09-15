import React from 'react';
import cssClasses from './Forecast-Display.css';
import ForecastItem from './../../components/Forecast-Item/Forecast-Item';
import { connect } from 'react-redux';
import ErrorDisplay from './../Error-Display/Error-Display';

class ForecastDisplay extends React.Component {

    render() {

        let content;

        if (this.props.forecast && this.props.forecast.length > 0) {
            content = this.props.forecast.map((item, index) => {
                return <ForecastItem item={item} key={item.date} index={index} />
            });
        } else {
            content = <ErrorDisplay />
        }

        return (
            <main className={cssClasses.Main}>
                {content}
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