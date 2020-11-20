
import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const {keg, onClickingDelete} = props;

  let pintsLeft = keg.pintsLeft;
  if(pintsLeft === 0){
    pintsLeft= "Out of Stock"
  }else if (pintsLeft < 10 && pintsLeft > 0){
    pintsLeft = "Almost Empty"
  }

  function handlePintRemove(){
    if(keg.pintsLeft > 0 ){
      props.onClickingPintRemove({name: keg.name, brand: keg.brand, price: keg.price, alcoholContent: keg.alcoholContent, pintsLeft: keg.pintsLeft - 1 , id: keg.id})
    }
  }

  return(
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>{keg.name} - {keg.brand}</h3>
      <p>{keg.price}</p>
      <p><em>{keg.alcoholContent}</em></p>
      <p>Pints Left: {keg.pintsLeft}</p>
      <button onClick={()=>onClickingDelete(keg.id)}>Remove Keg</button>
      <button onClick={handlePintRemove}>Sell Pint</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingPintRemove: PropTypes.func
}

export default KegDetail;