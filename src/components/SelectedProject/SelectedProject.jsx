import React, { Component } from 'react';
import { connect } from 'react-redux'
import Popup from "reactjs-popup";


class SelectedProject extends Component {

  render() {
    return (
      <div>
        <h3>Your Project</h3>
        <h3> {this.props.reduxStore.projectInfo.organization_name} </h3>
        <p> {this.props.reduxStore.projectInfo.start_date} </p>
        <p> {this.props.reduxStore.projectInfo.end_date} </p>
        <p> {this.props.reduxStore.projectInfo.description} </p>
       
      </div>
    )
  }
}

const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapReduxStateToProps)(SelectedProject);
