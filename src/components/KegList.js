import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";

function KegList(props) {
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
  
  return (
    <React.Fragment>
      <h1 style={topStyle}>The Tap-Room</h1>
      <hr/>
      <Row>
        {props.KegList.map((keg) =>
          <Col xs ={4}>       
            <div className="card" style={cardPadding}> 
              <div className="container">       
                <Keg
                whenItemClicked={props.onKegSelection}
                name={keg.name}
                description={keg.brand}
                alcoholContent={keg.alcoholContent}
                price={keg.price}
                pintsLeft={keg.pintsLeft}
                id={keg.id}
                key={keg.id}
                />
               
              </div>
            </div>
        </Col>
        )}
      </Row>
   </React.Fragment>
  );
}

KegList.propTypes = {
  KegList: PropTypes.array,
  onItemSelection: PropTypes.func
  
};


export default KegList;