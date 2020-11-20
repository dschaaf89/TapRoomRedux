import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/button";


function ReusableForm(props) {
  return (
    <React.Fragment>
      {/* <div style={formStyle}> */}
        <div className="container">
          <form onSubmit = {props.formSubmissionHandler}>
            <h3>Keg Name</h3>
            <input
              type ="text"
              name = "name"
              placeholder = "keg name" 
              required
              />
            <h3>Brand</h3>
            <textarea 
              name = "Brand"
              placeholder = "brand"
              required
              />
            <h3>Alcohol Content</h3>
            <input
              type = "number"
              name = "alcohol content"
              placeholder = "alcohol content" 
              required
              />
            <h3>Price</h3>
            <input
              type = "text"
              name = "price"
              placeholder = "price" 
              required
              />
              <br/>
            <Button variant="danger" type='submit'>{props.buttonText}</Button>
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