import React from 'react';
import CitySelector from './City-Selector/City-Selector';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import ThemePicker from './Theme-Picker/Theme-Picker';
import styles from './Slide-In-Menu.scss';

class SideMenu extends React.Component {

    render() {

        const menuClasses = [styles['slide-in-menu']];
        if (!this.props.menuVisible) {
            menuClasses.push(styles.hidden);
        }        
        const menuElementClass = menuClasses.join(' ');

        const clickCatcherClasses = [styles['click-catcher']];
        !this.props.menuVisible && clickCatcherClasses.push(styles.hidden);
        const clickCatcherElementClass = clickCatcherClasses.join(' ');

        return (
            <React.Fragment>
                <div className={clickCatcherElementClass} onClick={this.props.onCloseMenu}></div>
                <aside className={menuElementClass}>
                    <span className={styles['close-button']} onClick={this.props.onCloseMenu}>&times;</span>
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
        onCloseMenu: () => dispatch(actions.closeMenu())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);


