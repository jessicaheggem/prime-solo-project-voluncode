import React, { Component } from 'react';
import { connect } from 'react-redux'
import Popup from "reactjs-popup";


class ProjectInfo extends Component {

  state = {
    addProject: {
        user_id: '',
        project_id: '',
    }
}

  handleYesClick = (event) => {
    this.props.dispatch({
      type: 'POST_PROJECT',
      payload: this.state.addProject
    })
    this.props.history.push(`/home`);
    // this.props.history.push('/confirmation')
  }

  render() {
    return (
      <div>
        <h1>Project Info</h1>
        <h3> {this.props.reduxStore.projectInfo.organization_name} </h3>
        <p> {this.props.reduxStore.projectInfo.start_date} </p>
        <p> {this.props.reduxStore.projectInfo.end_date} </p>
        <p> {this.props.reduxStore.projectInfo.description} </p>
        <Popup trigger={<button > Contribute </button>} modal>
          {close => (
            <div>
              <a onClick={close}>&times;</a>
              <h2>Are you sure you want to contribute?</h2>
              <div>
                <button
                  onClick={() => { close(); }} >
                  No
                </button>
                <button onClick={() => this.handleYesClick()}> Yes </button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapReduxStateToProps)(ProjectInfo);
