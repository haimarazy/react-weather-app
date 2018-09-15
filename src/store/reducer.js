import * as actionTypes from './action-types';

const initialState = {
    theme: 'mojo',
    city: 'New York, NY',
    menuVisible: false,
    forecast: []    
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.TOGGLE_MENU:
            return {
                ...state,
                menuVisible: !state.menuVisible
            }
        case actionTypes.CLOSE_MENU:
            return {
                ...state,
                menuVisible: false
            }
        case actionTypes.CHANGE_THEME:
            return {
                ...state,
                theme: action.theme,
                menuVisible: false
            }
        case actionTypes.CHANGE_CITY:
            return {
                ...state,
                city: action.value,
                menuVisible: false
            }
        default:
            return state;
    }

}

export default reducer;