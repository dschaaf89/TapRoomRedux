import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  let pintsLeft = props.pintsLeft;
  if(parseInt(pintsLeft) === 0){
    pintsLeft= "Out of Stock";
  }
  const topStyle = {
    textAlign: 'center',
    fontFamily: 'tahoma',
    color: 'white'
  }

  return (
    <React.Fragment>
      <div onClick={()=>props.whenKegClicked(props.id)}style={topStyle}>
        <h3>Name:{props.name}</h3>
        <h5>Brand:{props.brand}</h5>
        <h6>Alcohol Content{props.alcoholContent}</h6>
        <h6>Price:${props.price}</h6>
        <p>Pints left: {props.pintsLeft}</p>
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