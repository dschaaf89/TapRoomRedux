import React from "react";
import KegList from "./KegList";
import EditKegForm from "./EditKegForm";
import NewKegForm from "./NewKegForm";
import KegDetail from './KegDetail';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
import Button from "react-bootstrap/button";

class KegControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedKeg: null,
      editing:false
    };
  }

  handleClick = () => {
    if(this.state.selectedKeg != null) {
      this.setState({
        
        selectedKeg: null
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
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
    this.setState({
      editing: true
    });
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const action = a.addKeg(kegToEdit)
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = 
      <EditKegForm 
      keg = {this.state.selectedKeg} 
      onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Return to Keg List"
    }else if(this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onClickingDelete = {this.handleDeletingKeg} onClickingPintRemove = {this.handlePintRemove}  onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Keg List";
    }
    else if(this.props.formVisibleOnPage){
      currentlyVisibleState = <NewKegForm onNewKegCreation = {this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List";
    }
    else{
      currentlyVisibleState = <KegList kegList = {this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />
      buttonText = "Add Keg"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Button variant ="primary"  onClick={this.handleClick}>{buttonText}</Button>
      </React.Fragment>
    )
  }
}
KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};
const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage:state.formVisibleOnPage
  }
}
KegControl= connect(mapStateToProps)(KegControl)
export default KegControl;