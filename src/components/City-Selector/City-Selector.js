import React from 'react';
import cssClasses from './City-Selector.css';
import { connect } from 'react-redux';
import * as actionTypes from './../../store/action-types';

class CitySelector extends React.Component {

    constructor(props) {
        super(props);
        this.cityInput = React.createRef();
    }    

    formSubmitHandler = (event) => {
        event.preventDefault();
        this.props.onChangeCity(this.cityInput.current.value);
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

const mapStateToProps = state => {
    return {
        city: state.city
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeCity: (city) => dispatch({ type: actionTypes.CHANGE_CITY, value: city})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CitySelector);