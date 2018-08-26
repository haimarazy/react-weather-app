import React from 'react';


class CitySelector extends React.Component {

    formSubmitHandler = (event) => {
        event.preventDefault();
        this.props.onSelectCity(this.cityInput.value);
    }  

    render() {

            return (
            <section>
                Select a City
                <form onSubmit={this.formSubmitHandler}>
                    <input
                        type="text"
                        ref={(input) => { this.cityInput = input }}
                        defaultValue={this.props.city}
                    />
                </form>
            </section>
        )

    }

}

export default CitySelector;