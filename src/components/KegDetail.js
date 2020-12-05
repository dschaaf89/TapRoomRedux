
import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/button";

function KegDetail(props){

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
  const { keg, onClickingDelete } = props;
  let quantity = keg.pintsLeft;
  if(parseInt(quantity) === 0) {
    quantity = 'Out Of Stock';
  }



  function handlePintRemove(){
    if(keg.pintsLeft > 0 ){
      props.onClickingPintRemove({name: keg.name, brand: keg.brand, price: keg.price, alcoholContent: keg.alcoholContent, pintsLeft: keg.pintsLeft - 1 , id: keg.id})
    }
  }

  return(
    <React.Fragment>
      <div id = "Details">
        <div className ="card" style ={cardPadding}>
          <div className ="container"style ={topStyle}>
      <h1>Keg Details</h1>
      <h3>Name:{keg.name} </h3>
      <h3>Brand:{keg.brand}</h3>
      <p>price: ${keg.price}</p>
      <p><em>Alcohol Content: {keg.alcoholContent}%</em></p>
      <p>Pints Left: {keg.pintsLeft}</p>
      <Button variant="danger"  onClick={()=>onClickingDelete(keg.id)}>Remove Keg</Button>
      <Button variant="success" onClick={handlePintRemove}>Sell Pint</Button>
      <Button variant="warning" onClick={props.onClickingEdit}>Edit Item</Button>
      <hr/>
      </div>
      </div>
      </div>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingPintRemove: PropTypes.func,
  onClickingEdit:PropTypes.func
}

export default KegDetail;