import React from 'react';
import cssClasses from './Menu-Toggle.css';
import { connect } from 'react-redux';
import * as actions from './../../store/actions';

class MenuToggle extends React.Component {

    render() {
        return (
            <div className={cssClasses.MenuToggle} onClick={this.props.onToggleMenu} >
                <div></div>
                <div></div>
                <div></div>
            </div>

        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        onToggleMenu: () => dispatch(actions.toggleMenu())
    }
}

export default connect(null, mapDispatchToProps)(MenuToggle);
