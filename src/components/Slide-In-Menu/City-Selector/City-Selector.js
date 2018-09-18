import React from 'react';
import styles from './City-Selector.scss';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

class CitySelector extends React.Component {

    constructor(props) {
        super(props);
        this.cityInput = React.createRef();
    }    

    formSubmitHandler = (event) => {
        event.preventDefault();
        this.props.setCity(this.cityInput.current.value);
    }  

    render() {

            return (
            <section>
                Select a City
                <form onSubmit={this.formSubmitHandler}>
                    <input
                        type="text"
                            className={styles['city-input']}
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
        setCity: (city) => dispatch(actions.setCity(city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CitySelector);