import React from 'react';
import styles from './Theme-Picker.scss';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

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
            return (
                <div 
                    className={styles['theme-picker-item']} 
                    data-theme={theme} key={theme} 
                    onClick={() => this.props.setTheme(theme)}
                >
                </div>
            )
        });
            
        return (
            <section>
                Theme
                <div className={styles['theme-picker']}>
                    {themePickerItems}
                </div>
            </section>
        )

    }


}

const mapDispatchToProps = dispatch => {
    return {
        setTheme: (theme) => dispatch(actions.setTheme(theme))
    }
}

export default connect(null, mapDispatchToProps)(ThemePicker);