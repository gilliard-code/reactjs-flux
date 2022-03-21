import React from "react";
import propTypes from "prop-types";

const TextInput = props => {
    let wrapperClass = "form-group";
    if ( props.error.length > 0 )
    {
        wrapperClass += " has-error";
    }


    return(
        <div className = { wrapperClass }>
            <label htmlFor = { props.id }> { props.label } </label>
            <div className="field">
                <input
                    id = { props.id }
                    type = { props.type }
                    name = { props.name }
                    onChange = { props.onChange }
                    className = " form-control "
                    value = { props.value }
                >
                </input>
            </div>
            {
                props.error && <div className = "alert alert-danger" > { props.error } </div>
            }
        </div>
    );
}

TextInput.propTypes = {
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    value: propTypes.string,
    error: propTypes.string,
};

TextInput.defaultProps = {
    error: ""
  };  

export default TextInput;