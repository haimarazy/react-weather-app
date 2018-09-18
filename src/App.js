import React from 'react';
import styles from './App.scss';
import './assets/css/weather-icons.min.css';
import Toolbar from './components/Toolbar/Toolbar';
import ForecastDisplay from './components/Forecast-Display/Forecast-Display';
import Footer from './components/Footer/Footer';
import SlideInMenu from './components/Slide-In-Menu/Slide-In-Menu';
import { connect } from 'react-redux';
import * as actions from './store/actions';

class App extends React.Component {

	componentDidMount() {
		this.props.getForecast(this.props.city);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.city !== this.props.city) {
			this.props.getForecast(this.props.city);
		}
	}	

	render() {

		return (
            <div className={styles.App} data-theme={this.props.theme}>
				<Toolbar />
				<ForecastDisplay />
				<Footer city={this.props.city} />
				<SlideInMenu />
			</div>
		);
		
	}
}

const mapStateToProps = state => {
	return {
		theme: state.theme,
		city: state.city
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getForecast: (city) => dispatch(actions.getForecast(city))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
