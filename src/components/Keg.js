import React from "react";
import PropTypes from "prop-types";


function Keg(props){
let pintsLeft = props.pintsLeft;
if(parseInt(pintsLeft)=== 0){
  pintsLeft="Out of Stock"
}else if (pintsLeft < 10){
  pintsLeft="Almost Empty"+{pintsLeft};
}


return(
  <React.Fragment>
    <div onClick ={ () => props.whenKegClicked(props.id)}>
      <h4>{props.name}</h4>
      <p>{props.brand}</p>
      <p>{props.alcoholContent}</p>
      <h6>Price: ${props.price}</h6>
      <h6>Pints Left: {props.pintsLeft}</h6>
    </div>
  </React.Fragment>
);
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent:PropTypes.string,
  pintsLeft: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked:PropTypes.func
};

export default Keg;