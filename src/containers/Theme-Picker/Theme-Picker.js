import React from 'react';
import cssClasses from './Theme-Picker.css';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/action-creators';

const themeArray = [
    "mojo",
    "governor-bay",
    "pickled-bluewood",
    "dixie",
    "thunder",
    "burnt-sienna",
    "cocoa-bean",
    "green-kelp",
    "de-york"
];


class ThemePicker extends React.Component {

    render() {

        const themePickerItems = themeArray.map(theme => {
            return <div 
                        className={cssClasses.ThemePickerItem} 
                        data-theme={theme} key={theme} 
                        onClick={() => this.props.onChangeTheme(theme)}
                    >
                    </div>
        });
            
        return (
            <section>
                Theme
                <div className={cssClasses.ThemePicker}>
                    {themePickerItems}
                </div>
            </section>
        )

    }


}

const mapDispatchToProps = dispatch => {
    return {
        onChangeTheme: (theme) => dispatch(actionCreators.changeTheme(theme))
    }
}

export default connect(null, mapDispatchToProps)(ThemePicker);