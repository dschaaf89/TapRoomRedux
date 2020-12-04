import React from "react";
import KegList from "./KegList";
//import EditKegForm from "./EditKegForm";
import NewKegForm from "./NewKegForm";
import KegDetail from './KegDetail';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
//import Button from "react-bootstrap/button";


class KegControl extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      selectedKeg: null,
    };
  }

    handleClick = () => {
      if (this.state.selectedTicket != null) {
        this.setState({
          selectedTicket: null,
          formVisibleOnPage: false
        });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleChangingSelectedKeg = (id) => { 
    const selectedKeg = this.props.kegList[id];
    this.setState({selectedKeg: selectedKeg});
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
}

handleDeletingKeg = (id) => {
  const { dispatch } = this.props;
  const action = a.deleteKeg(id);
  dispatch(action);
  this.setState({selectedKeg: null});
}
  handlePintRemove = (kegToEdit) => {
    
    const editedMasterKegList = this.state.masterKegList
      .filter(keg=>keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
      masterKegList: editedMasterKegList,
      selectedKeg: null
      
    });
  }
  handleEditClick = () => { 
    
    const { dispatch } = this.props;
      const action = a.startEditingKeg(true);
      dispatch(action);
    //this.setState({editing: true});
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const action = a.addKeg(kegToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedTicket: null
    });
  }
  render(){
  let currentlyVisibleState = null;
  let buttonText = null;

  if (this.state.selectedKeg != null) {
    currentlyVisibleState = 
    <KegDetail 
    keg = {this.state.selectedKeg} 
    onClickingDelete = {this.handleDeletingKeg} />
    buttonText = "Return to Keg List";
  } else if (this.props.formVisibleOnPage) {
    currentlyVisibleState = <NewKegForm 
    onNewKegCreation={this.handleAddingNewKegToList} />
    buttonText = "Return to Keg List";
  } else {
    currentlyVisibleState = <KegList 
    kegList={this.props.kegList} 
    onKegSelection={this.handleChangingSelectedKeg}
    onSellPint={this.handleSellingPint}/>
    buttonText = "Add Keg";
  }

  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
  )
}
}

//   render(){
//     let currentlyVisibleState = null;
//     let buttonText = null;

//     if (this.props.editing) {
//       currentlyVisibleState = 
//       <EditKegForm 
//       keg = {this.props.selectedKeg} 
//       onEditKeg = {this.handleEditingKegInList} />
//       buttonText = "Return to Keg List"
//     }else if(this.props.selectedKeg != null) {
//       currentlyVisibleState = <KegDetail
//       keg = {this.props.selectedKeg}
//       onClickingDelete = {this.handleDeletingKeg}
//       onClickingPintRemove = {this.handlePintRemove}
//       onClickingEdit = {this.handleEditClick} />
//       buttonText = "Return to Keg List";
//     }
//     else if(this.props.formVisibleOnPage){
//       currentlyVisibleState = <NewKegForm onNewKegCreation = {this.handleAddingNewKegToList} />
//       buttonText = "Return to Keg List";
//     }
//     else{
//       currentlyVisibleState = <KegList kegList = {this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />
//       buttonText = "Add Keg"
//     }
//     return (
//       <React.Fragment>
//         {currentlyVisibleState}
//         <Button variant ="primary"  onClick={this.handleClick}>{buttonText}</Button>
//       </React.Fragment>
//     );
//   }
// }
KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  editing:PropTypes.bool,
  selectedKeg:PropTypes.object
  
};
const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage,
  }
}
KegControl = connect(mapStateToProps)(KegControl);
export default KegControl;
