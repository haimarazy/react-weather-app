import React from 'react';
import cssClasses from './App.css';
import './assets/css/weather-icons.min.css';
import Toolbar from './containers/Toolbar/Toolbar';
import Main from './containers/Main/Main';
import Footer from './containers/Footer/Footer';
import SideMenu from './containers/Side-Menu/Side-Menu';
import { connect } from 'react-redux';

class App extends React.Component {

	render() {

		return (
			<div className={cssClasses.App} data-theme={this.props.theme}>
				<Toolbar />
				<Main forecast={this.props.forecast} />
				<Footer city={this.props.city} />
				<SideMenu />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		theme: state.theme,
	}
}


export default connect(mapStateToProps)(App);
