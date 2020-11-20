import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/button";

function KegDetail(props){
  const {keg, onClickingDelete} = props;

  function handleTakeAPint(){
    if(keg.pintsRemaining > 0 ){
      props.onClickingPintRemove({name: keg.name, brand: keg.brand, price: keg.price, alcoholContent: keg.alcoholContent, pintsLeft: keg.pintsLeft - 1 , id: keg.id})
    }
  }
  return(
<React.Fragment>
  <h1>Keg Detail</h1>
  <h2>Keg Name:{keg.name}</h2>
  <h6>Brand:{keg.brand}-alcoholContent:{keg.alcoholContent}</h6>
  <h3>Price: ${keg.price} - pintsLeft:{keg.pintsLeft}</h3>
  <Button variant="warning" onClick={props.onClickingEdit}>Edit Keg</Button>
  <Button variant="danger" onClick={() => onClickingDelete(keg.id)}>Delete Keg</Button>
  <Button variant="primary" onClick={() => handleTakeAPint(keg)}>Add To Cart</Button>
  <hr/>
</React.Fragment>
  );
}

KegDetail.propTypes = {
  keg : PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  handleTakeAPint: PropTypes.func,
}

export default KegDetail;