  
import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types"

function EditKegForm(props){
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({
      name: event.target.name.value, 
      description: event.target.brand.value, 
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      pintsLeft:124,    
      id: keg.id});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditKegFormSubmission} 
        buttonText="Edit Item" />
    </React.Fragment>
  );
}
EditKegForm.propTypes = {
  onEditKeg: PropTypes.func
};

export default EditKegForm;