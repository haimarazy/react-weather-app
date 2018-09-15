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

const changeTheme = (state, action) => {
    return {
        ...state,
        theme: action.theme,
        menuVisible: false
    }
}

const changeCity = (state, action) => {
    return {
        ...state,
        city: action.value,
        menuVisible: false
    }
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.TOGGLE_MENU: return toggleMenu(state);
        case actionTypes.CLOSE_MENU: return closeMenu(state);
        case actionTypes.CHANGE_THEME: return changeTheme(state, action);
        case actionTypes.CHANGE_CITY: return changeCity(state, action);
        default: return state;
    }

}

export default reducer;