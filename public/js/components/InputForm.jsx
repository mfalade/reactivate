import React from 'react';
import PropTypes from 'prop-types';


class InputForm extends React.Component {
    render() {
        const { handleOnChange, inputValue } = this.props;
        return (
            <div>
                <input 
                    type="text"
                    value={inputValue}
                    onChange={handleOnChange}
                />
                <br />
                <p>{ inputValue } - new value</p>
            </div>
        );

    }
}

InputForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired
};

export default InputForm;