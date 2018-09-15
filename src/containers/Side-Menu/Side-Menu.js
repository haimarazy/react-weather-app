import React from 'react';
import CitySelector from './../../components/City-Selector/City-Selector';
import cssClasses from './Side-Menu.css';
import * as actionCreators from '../../store/action-creators';
import { connect } from 'react-redux';
import ThemePicker from './../Theme-Picker/Theme-Picker';

class SideMenu extends React.Component {

    render() {
        const menuClasses = [cssClasses.SideMenu];
        menuClasses.push(this.props.menuVisible ? cssClasses.SideMenuVisible : cssClasses.SideMenuHidden);
        const menuElementClass = menuClasses.join(' ');

        const clickCatcherClasses = [cssClasses.ClickCatcher];
        !this.props.menuVisible && clickCatcherClasses.push(cssClasses.ClickCatcherHidden);
        const clickCatcherElementClass = clickCatcherClasses.join(' ');



        return (
            <React.Fragment>
                <div className={clickCatcherElementClass} onClick={this.props.onCloseMenu}></div>
                <aside className={menuElementClass}>
                    <span className={cssClasses.MenuCloseButton} onClick={this.props.onCloseMenu}>&times;</span>
                    <CitySelector />
                    <ThemePicker />
                </aside>
            </React.Fragment>
        )        
    }

}


const mapStateToProps = state => {
    return {
        menuVisible: state.menuVisible,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCloseMenu: () => dispatch(actionCreators.closeMenu())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);


