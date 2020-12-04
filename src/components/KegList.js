
import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";
// import Row from "react-bootstrap/row";
// import Col from "react-bootstrap/col";

function KegList(props){
  // const topStyle = {
  //   textAlign: 'center',
  //   fontFamily: 'tahoma',
  //   color: 'white'
  // }
  // const cardPadding = {
  //   marginBottom: "30px",
  //   marginLeft: "15px",
  //   marginTop: "15px",
  //   marginRight: "15px",
  //   backgroundColor: 'rgba(52, 52, 52, .6)',
  //   color: "white",    
  // }
  return(
    <React.Fragment>
      <hr />
        { Object.values(props.kegList).map((keg) => {
          return <Keg
            whenKegClicked = { props.onKegSelection }
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            alcoholContent = {keg.alcoholContent}
            pintsLeft = {keg.pintsLeft}
            id={keg.id}
            key={keg.id}/>
        })}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func
};

export default KegList;