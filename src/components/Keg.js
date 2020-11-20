import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  let pintsLeft = props.pintsLeft;
  if(pintsLeft === 0){
    pintsLeft= "Out of Stock"
  }else if (pintsLeft < 10 && pintsLeft > 0){
    pintsLeft = "Almost Empty"
  }

  return (
    <React.Fragment>
      <div onClick={()=>props.whenKegClicked(props.id)}>
        <h3>Name:{props.name}</h3>
        <h5>Brand:{props.brand}</h5>
        <h6>Alcohol Content{props.alcoholContent}-Price:${props.price}</h6>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  pintsLeft: PropTypes.number, 
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;