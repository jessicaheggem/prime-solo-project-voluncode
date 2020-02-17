import React, { Component } from 'react';
import { connect } from 'react-redux'
import Popup from "reactjs-popup";


class SelectedProject extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_DEVELOPER_PROJECT' })
      }

  render() {
    return (
      <div>
        <h2>Your Project:</h2>
        {JSON.stringify(this.props.reduxStore.developerProject)}
        <h3> {this.props.reduxStore.developerProject.organization_name} </h3>
        <p> {this.props.reduxStore.developerProject.start_date} </p>
        <p> {this.props.reduxStore.developerProject.end_date} </p>
        <p> {this.props.reduxStore.developerProject.description} </p>
        <button>Delete</button>
      </div>
    )
  }
}

const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapReduxStateToProps)(SelectedProject);
