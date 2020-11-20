import React from "react";
import PropTypes from "prop-types";
;

function Keg(props){



return(
  <React.Fragment>
    <div onClick ={ () => props.whenKegClicked(props.id)}>
      <h4>{props.name}</h4>
      <p>{props.brand}</p>
      <p>{props.alcoholContent}</p>
      <h6>Price: ${props.price}</h6>
      <h6>In Stock: {props.pintsLeft}</h6>
    </div>
  </React.Fragment>
);
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent:PropTypes.number,
  pintsLeft: PropTypes.number
};