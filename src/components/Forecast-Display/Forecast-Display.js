import React from 'react';
import styles from './Forecast-Display.scss';
import ForecastItem from './Forecast-Item/Forecast-Item';
import { connect } from 'react-redux';
import ForecastError from './Forecast-Error/Forecast-Error';

class ForecastDisplay extends React.Component {

    render() {

        let content;

        if (this.props.forecast && this.props.forecast.length > 0) {
            content = this.props.forecast.map((item, index) => {
                return <ForecastItem item={item} key={item.date} index={index} />
            });
        } else {
            content = <ForecastError />
        }

        return (
            <main className={styles['forecast-display']}>
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