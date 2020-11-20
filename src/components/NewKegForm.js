import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";


function NewKegForm (props){
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      alcoholContent: event.target.alcoholContent.value,
      price: event.target.price.value,
      id: v4()});
  }
  return (
    <React.Fragment>
        <div className="container"> 
          <ReusableForm
            formSubmissionHandler = {handleNewKegFormSubmission}
            buttonText= "Add Keg" />      
        </div>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewItemCreate: PropTypes.func
}

export default NewKegForm;
