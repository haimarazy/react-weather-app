import React from 'react';
import cssClasses from './App.css';
import './assets/css/weather-icons.min.css';
import Toolbar from './containers/Toolbar/Toolbar';
import Main from './containers/Main/Main';
import Footer from './containers/Footer/Footer';
import SideMenu from './containers/Side-Menu/Side-Menu';

class App extends React.Component {

  state = {
    theme: 'mojo',
    city: 'New York, NY',
    menuVisible: false,
    forecast: []
  }

  toggleMenu = () => {
    this.setState((prevState) =>
      ( { menuVisible: !prevState.menuVisible } )
    )    
  }

  changeCity = (city) => {
    this.setState((prevState) =>
      ({ city: city })
    )  
  }

  changeTheme = (theme) => {
    this.setState((prevState) =>
      ({ theme: theme })
    )
  }

  getWeather = async () => {

    let cityName = encodeURIComponent(this.state.city);
    const url = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${cityName}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;

    let response = await fetch(url);
    let jsonResponse = await response.json();

    let {
      query: {
        results: {
          channel: {
            item: {
              forecast
            }
          }
        }
      }
    } = jsonResponse;    

    forecast = forecast.slice( 0, 5 );
    forecast[0].day = 'Now';

    this.setState({ forecast: forecast } );

  }

  componentDidMount() {
    this.getWeather();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.city !== this.state.city) {
      this.getWeather();
    }
  }

  render() {
    return (
      <div className={cssClasses.App} data-theme={this.state.theme}>
        <Toolbar toggleMenu={this.toggleMenu} />
        <Main forecast={this.state.forecast} />
        <Footer city={this.state.city} />
        <SideMenu 
          visible={this.state.menuVisible} 
          toggleMenu={this.toggleMenu} 
          changeCity={this.changeCity}
          changeTheme={this.changeTheme}
          city={this.state.city}
        />
      </div>
    );
  }
}

export default App;
