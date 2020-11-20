import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/button";


function ReusableForm(props) {
  return (
    <React.Fragment>
      {/* <div style={formStyle}> */}
        <div className="container">
          <form onSubmit = {props.formSubmissionHandler}>
          <input
          type='text'
          name='name'
          placeholder='Keg Name' />
        <input
          type='text'
          name='brand'
          placeholder='Keg Brand' />
        <input
          type='text'
          name='price'
          placeholder='$0.00' />
          <input
          type='text'
          name='alcoholContent'
          placeholder='00.00%' />
              <br/>
              <Button variant="primary" type='submit'>{props.buttonText}</Button>
          </form>
        </div>
      {/* </div> */}
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm