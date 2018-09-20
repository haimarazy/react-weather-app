import React from 'react';
import styles from './Hamburger-Button.scss';
import { connect } from 'react-redux';
import * as actions from './../../../store/actions';

class MenuToggle extends React.Component {

    render() {

        const hidden = this.props.hidden ? styles.hidden : '';
        const classNames = `${styles['hamburger-button']} ${hidden}`;

        return (
            <span className = { classNames } onClick={this.props.onToggleMenu} >
                &#9776;
            </span>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        onToggleMenu: () => dispatch(actions.toggleMenu())
    }
}

const mapStateToProps = state => {
    return {
        hidden: state.menuVisible
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(MenuToggle);
