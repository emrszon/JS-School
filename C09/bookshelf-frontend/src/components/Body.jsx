import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import {withRouter} from 'react-router';
import {connect} from 'react-redux'
import { updateDisplay, search } from '../actions/userAction'
class Body extends Component {
  constructor(props){
    super(props);
    this.onSearch= this.onSearch.bind(this)
  }
  state = {
    display: '250px'
  }

  onSearch=(user, filter) =>{
    this.props.onSearch(user, filter);
  }

  getSearch = (dataFromChild) => {
    this.onSearch(this.props.user, dataFromChild)
}
  componentDidMount(){
    this.getSearch()
  }
  
  render() {
    
    
    return (
      <>
        <Header getSearch={this.getSearch}/>
        <Main display={this.state.display} search={this.props.user.search} />
      </>

    );
  }
}
const mapStateToProps= state =>({
  user: state.user
})

const mapActionsToProps = {
  onUpdateDisplay: updateDisplay,
  onSearch: search
}
export default withRouter(connect(mapStateToProps, mapActionsToProps)(Body));