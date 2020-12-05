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
          defaultValue={props.name ? props.name : ""}
          placeholder='Keg Name' />
        <input
          type='text'
          name='brand'
          defaultValue={props.brand ? props.brand : ""}
          placeholder='Keg Brand' />
        <input
          type='text'
          name='price'
          defaultValue={props.price ? props.price : ""}
          placeholder='$0.00' />
          <input
          type='text'
          name='alcoholContent'
          defaultValue={props.alcoholContent ? props.alcoholContent : ""}
          placeholder='00.00%' />
              <br/>
              <Button variant="primary" type='submit'>{props.buttonText}</Button>
          </form>
        </div>
    {/* </div>   */}
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm