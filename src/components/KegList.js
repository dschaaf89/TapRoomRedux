import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {

  return (

    <React.Fragment>
      <hr/>
      {Object.values(props.kegList).map((keg) =>
      <Keg
      whenKegClicked = { props.onKegSelection }
      key = {keg.id}
      id = {keg.id}
      name={keg.name}
      brand={keg.brand}
      price={keg.price}
      alcoholContent={keg.alcoholContent}
      pintsLeft={keg.pintsLeft}
      />
      )}
    </React.Fragment>
  );
}
KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func,
  
}

export default KegList;



{/* {Object.values(props.kegList).map((keg) =>{
        <Keg
        whenKegClicked = { props.onKegSelection }
        key={keg.id}
        id={keg.id}
        name={keg.name}
        brand={keg.brand}
        pintsLeft={keg.pintsLeft}
        price={keg.price}
        alcoholContent={keg.alcoholContent}
        
      />

})
}
    </React.Fragment>
  );
} */}