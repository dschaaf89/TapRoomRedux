import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {

  return (

    <React.Fragment>
      <hr />
      {Object.values(props.kegList).map((keg) =>
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

      )}
    </React.Fragment>
  );
}
KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  
}

export default KegList;