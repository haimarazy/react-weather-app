import * as actionTypes from './action-types';


export const changeCity = (city) => {
    return { type: actionTypes.CHANGE_CITY, value: city };
}

export const toggleMenu = () => {
    return { type: actionTypes.TOGGLE_MENU };
}

export const closeMenu = () => {
    return { type: actionTypes.CLOSE_MENU };
}

export const changeTheme = (theme) => {
    return { type: actionTypes.CHANGE_THEME, theme: theme };
}