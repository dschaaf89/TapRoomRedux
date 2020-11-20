import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/button";

function KegDetail (props) {
  const { keg, onClickingDelete } = props;
  let pintsLeft = keg.pintsLeft;
  if (pintsLeft === 0 ){
    pintsLeft="Out of Stock"
  }
  else if (pintsLeft < 10){
    pintsLeft="Almost Empty"+{pintsLeft};
  }
function handleTakeAPint(keg){
  props.OnClickingTakeAPint({
    name: keg.name, 
    brand: keg.brand, 
    alcoholContent:keg.alcoholContent,
    price: keg.price,
    pintsLeft:keg.pintsLeft-1,
    id:keg.id

  });
}
<React.Fragment>
  <h1>Keg Detail</h1>
  <h2>Keg Name:{keg.name}</h2>
  <h6>Brand:{keg.brand}-alcoholContent:{keg.alcoholContent}</h6>
  <h3>Price: ${keg.price} - pintsLeft:{pintsLeft}</h3>
  <Button variant="warning" onClick={props.onClickingEdit}>Edit Keg</Button>
  <Button variant="danger" onClick={() => onClickingDelete(keg.id)}>Delete Keg</Button>
  <Button variant="primary" onClick={() => handleTakeAPint(keg)}>Add To Cart</Button>
  <hr/>
</React.Fragment>


}

KegDetail.propTypes = {
  keg : PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  handleTakeAPint: PropTypes.func,
}

export default KegDetail;