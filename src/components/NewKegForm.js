import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";


function NewKegForm (props){
  const topStyle = {
    textAlign: 'center',
    fontFamily: 'tahoma',
    color: 'white'
  }
  const cardPadding = {
    marginBottom: "30px",
    marginLeft: "15px",
    marginTop: "15px",
    marginRight: "15px",
    backgroundColor: 'rgba(52, 52, 52, .6)',
    color: "white",    
  }
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      pintsLeft: 124,
      id: v4()});
    }
  return (
    <React.Fragment>
      <div className = "card" style ={cardPadding}>
        <div className = "container"style ={topStyle}>
          <h1>Add a new Keg</h1>
       <ReusableForm 
        formSubmissionHandler = {handleNewKegFormSubmission}
        buttonText= "Add Keg"/>
        </div>
        </div>
    </React.Fragment>
  );
}
NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
