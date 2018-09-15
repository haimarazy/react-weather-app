import * as actionTypes from './action-types';


export const setCity = (city) => {
    return { type: actionTypes.SET_CITY, city: city };
}

export const toggleMenu = () => {
    return { type: actionTypes.TOGGLE_MENU };
}

export const closeMenu = () => {
    return { type: actionTypes.CLOSE_MENU };
}

export const setTheme = (theme) => {
    return { type: actionTypes.SET_THEME, theme: theme };
}

const applyForecast = (forecast) => {
    return { type: actionTypes.SET_FORECAST, forecast: forecast };
}

export const getForecast = (city) => {

    return async dispatch => {

        let encodedCity = encodeURIComponent(city);
        const url = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${encodedCity}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;

        let extractedForecast;

        try {
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

            extractedForecast = forecast;
        } catch (e) {
            extractedForecast = null;
        }

        dispatch(applyForecast(extractedForecast));
    }

}