import React from "react";
import Keg from './Keg';
import PropTypes from 'prop-types'
function KegList(props){
  return (
    <React.Fragment>
      <hr />
      {/* We now need to map over the values of an object, not an array. */}
      {Object.values(props.kegList).map((keg) =>{
        return <Keg
          whenKegClicked = { props.onKEgSelection }
          name={keg.names}
          brand={keg.brand}
          price={keg.price}
          alcoholContent = {keg.alcoholContent}
          pintsLeft = {keg.pintsLeft}
          id={keg.id}
          key={keg.id}/>
       })}
      {/* Don't forget to add the curly brace above - otherwise there will be a syntax error. */}
    </React.Fragment>
  );
}


KegList.propTypes = {
  // The PropType below has been updated - it's now an object, not an array.
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func
};

export default KegList;