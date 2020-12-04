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
    console.log(props);
    this.state = {
      formVisibleOnPage: false,
      selectedKeg: null,
      editing:false
    };
  }

  handleClick = () => {  
    if (this.props.selectedKeg != null) {
      const { dispatch } = this.props;
      const action = a.editKeg({
        masterList: this.props.masterList,
        editing: false,
        selectedKeg: null,
        formVisibleOnPage: false,
      });
      dispatch(action);
      // this.setState({
      //   formVisibleOnPage: false,
      //   selectedKeg: null,
      //   editing: false
      // });
    } else {
      // this.setState(prevState => ({
      //   formVisibleOnPage: !prevState.formVisibleOnPage,
      // }));
      const { dispatch } = this.props;
      const action = a.addKeg({
        masterList: this.props.masterList, 
        editing: false,
        selectedKeg: null,
        formVisibleOnPage: !this.props.formVisibleOnPage,
      });
      dispatch(action);
    }
    console.log(this.props)
  }

  handleChangingSelectedKeg = (id) => { 
    const selectedKeg = this.props.masterKegList[id]
    this.setState({selectedKeg: selectedKeg});
  }

  handleAddingNewKegToList = (newKeg) => {
  const { dispatch } = this.props;
  const { id, name, brand , price,alcoholContent,pintsLeft} = newKeg;
  const action = {
    type: 'ADD_KEG',
    id: id,
    name: name,
    brand: brand,
    price: price,
    alcoholContent:alcoholContent,
    pintsLeft:pintsLeft

  }
  dispatch(action);
  this.setState({formVisibleOnPage: false});
}
handleDeletingKeg = (id) => {
  const { dispatch } = this.props;
  const action = {
    type: 'DELETE_KEG',
    id: id
  }
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
    const editedKegList = this.state.masterList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
      console.log(kegToEdit.Quantity)
      const { dispatch } = this.props;
    const action = a.editKeg({
      masterList: editedKegList,
      editing: false,
      selectedKeg: kegToEdit
    });
    dispatch(action);
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.props.editing) {
      currentlyVisibleState = 
      <EditKegForm 
      keg = {this.props.selectedKeg} 
      onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Return to Keg List"
    }else if(this.props.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.props.selectedKeg} onClickingDelete = {this.handleDeletingKeg} onClickingPintRemove = {this.handlePintRemove}  onClickingEdit = {this.handleEditClick} />
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
  formVisibleOnPage: PropTypes.bool,
  editing:PropTypes.bool,
  selectedKeg:PropTypes.object
  
};
const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedKeg: state.selectedKeg,
    editing: state.editing
  }
}
KegControl = connect(mapStateToProps)(KegControl);
export default KegControl;