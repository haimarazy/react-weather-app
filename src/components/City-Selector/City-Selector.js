import React from 'react';
import cssClasses from './City-Selector.css';

class CitySelector extends React.Component {

    constructor(props) {
        super(props);
        this.cityInput = React.createRef();
    }    

    formSubmitHandler = (event) => {
        event.preventDefault();
        this.props.onSelectCity(this.cityInput.current.value);
    }  

    render() {

            return (
            <section>
                Select a City
                <form onSubmit={this.formSubmitHandler}>
                    <input
                        type="text"
                        className={cssClasses['City-Input']}
                        ref={this.cityInput}
                        defaultValue={this.props.city}
                    />
                </form>
            </section>
        )

    }

}

export default CitySelector;