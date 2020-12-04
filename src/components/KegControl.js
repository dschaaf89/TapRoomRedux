import React from 'react';
import NewKegForm from './NewKegForm';
import EditKegForm from './EditKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import Button from "react-bootstrap/button";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

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
    if(this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else{
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({selectedKeg: selectedKeg});
  }

  handleAddingNewKegToList = (newKeg) => {
   const {dispatch} = this.props;
   const {id,name,brand,price,alcoholContent}=newKeg;
   const action = {
    type: 'ADD_KEG',
    name: name,
    brand: brand,
    price: price,
    alcoholContent: alcoholContent,
    id: id
   }
   dispatch(action);
   this.setState({formVisibleOnPage:false});
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id: id
    }
    dispatch(action);
    this.setState({
      selectedKeg: null
    });
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

  handleEditingKegInList = (KegToEdit) => {
    const editedMasterKegList = this.state.masterKegList
    .filter(keg => keg.id !== this.state.selectedKeg.id)
    .concat(KegToEdit)
    this.setState({
      masterKegList: editedMasterKegList,
      editing: false,
      selectedItem: null
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
    else if(this.state.formVisibleOnPage){
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
  masterKegList: PropTypes.object
};
const mapStateToProps = state => {
  return {
    masterKegList: state
  }
}
KegControl = connect(mapStateToProps)(KegControl);
export default KegControl;