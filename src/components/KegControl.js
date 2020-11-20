import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/button';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';

class KegControl extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      formVisibleOnPage:false,
      masterKegList:[],
      selectedKeg: null,
      editing:false
    };
  }
}