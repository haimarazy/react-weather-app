import React from 'react';
import CitySelector from './../../components/City-Selector/City-Selector';
import cssClasses from './Side-Menu.css';


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

class menu extends React.Component {

    themePickerItemClicked  = (event) => {
        this.props.changeTheme(event.target.dataset.theme);
        this.props.toggleMenu();
    }

    changeCity = (city) => {
        this.props.changeCity(city);
        this.props.toggleMenu();
    }    

    render() {
        const menuClasses = [cssClasses.SideMenu];
        menuClasses.push(this.props.visible ? cssClasses.SideMenuVisible : cssClasses.SideMenuHidden);
        const menuElementClass = menuClasses.join(' ');

        const clickCatcherClasses = [cssClasses.ClickCatcher];
        !this.props.visible && clickCatcherClasses.push(cssClasses.ClickCatcherHidden);
        const clickCatcherElementClass = clickCatcherClasses.join(' ');

        const themePickerItems = themeArray.map(theme => {
            return <div className={cssClasses.ThemePickerItem} data-theme={theme} key={theme} onClick={this.themePickerItemClicked}></div>
        });

        return (
            <React.Fragment>
                <div className={clickCatcherElementClass} onClick={this.props.toggleMenu}></div>
                <aside className={menuElementClass}>
                    <span className={cssClasses.MenuCloseButton} onClick={this.props.toggleMenu}>&times;</span>
                    <CitySelector city={this.props.city} onSelectCity={this.changeCity} />
                    <section>
                        Theme
                        <div className={cssClasses.ThemePicker}>
                            {themePickerItems}
                        </div>
                    </section>
                </aside>
            </React.Fragment>
        )        
    }

}

export default menu;
