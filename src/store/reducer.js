import * as actionTypes from './action-types';

const initialState = {
    theme: 'mojo',
    city: 'New York, NY',
    menuVisible: false,
    forecast: []    
};

const toggleMenu = (state) => {
    return {
        ...state,
        menuVisible: !state.menuVisible
    }
}

const closeMenu = (state) => {
    return {
        ...state,
        menuVisible: false
    }    
}

const setTheme = (state, action) => {
    return {
        ...state,
        theme: action.theme,
        menuVisible: false
    }
}

const setCity = (state, action) => {
    return {
        ...state,
        city: action.city,
        menuVisible: false
    }
}

const setForecast = (state, action) => {

    let forecast = null;

    if (action.forecast && action.forecast.length > 0) {
        forecast = action.forecast.slice(0, 5);
        forecast[0].day = 'Now';
    }

    return {
        ...state,
        forecast: forecast
    }
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.TOGGLE_MENU: return toggleMenu(state);
        case actionTypes.CLOSE_MENU: return closeMenu(state);
        case actionTypes.SET_THEME: return setTheme(state, action);
        case actionTypes.SET_CITY: return setCity(state, action);
        case actionTypes.SET_FORECAST: return setForecast(state, action);
        default: return state;
    }

}

export default reducer;