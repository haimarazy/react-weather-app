import React from 'react';
import cssClasses from './App.css';
import './assets/css/weather-icons.min.css';
import Toolbar from './containers/Toolbar/Toolbar';
import ForecastDisplay from './containers/Forecast-Display/Forecast-Display';
import Footer from './containers/Footer/Footer';
import SideMenu from './containers/Side-Menu/Side-Menu';
import { connect } from 'react-redux';
import * as actions from './store/actions';

class App extends React.Component {

	componentDidMount() {
		this.props.getForecast(this.props.city);
	}

	render() {

		return (
			<div className={cssClasses.App} data-theme={this.props.theme}>
				<Toolbar />
				<ForecastDisplay />
				<Footer city={this.props.city} />
				<SideMenu />
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
