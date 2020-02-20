import React, { Component } from 'react';
import { connect } from 'react-redux'
import Popup from "reactjs-popup";
const moment = require('moment');

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class AvailableProjects extends Component {

  componentDidMount() {
    this.props.dispatch
      ({ type: 'FETCH_PROJECTS' })
  }

  handleNameClick = (id) => {
    console.log(id);
    this.props.dispatch({
      type: 'FETCH_PROJECT_INFO',
      payload: id
    })
    this.props.history.push(`/project_info/${id}`);
  }

  // handleYesClick = () => {
  //   this.props.history.push('/confirmation')
  // }

  render() {
    return (
      <div className="content">
        <h1>Available Projects</h1>
        {/* {JSON.stringify(this.props.reduxStore.projectInfo)} */}
        {/* projects.map : the word projects connects back to the renamed reducer in reducer/index.js in the combineReducers */}
        <ul>
          {this.props.reduxStore.projects.map(project =>
            <li key={project.id}>
              <div>
                <h3 onClick={() => this.handleNameClick(project.id)} >
                  {project.organization_name}
                </h3>
                <p>{moment(project.start_date).format('LL')} - {moment(project.end_date).format('LL')}</p>
                <p>{project.website} | {project.email}</p>
                <p>{project.description}</p>

                {/* <Popup trigger={<button> Contribute </button>} modal>
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
                </Popup> */}
              </div>
            </li>
          )}
        </ul>
      </div>
    )
  }
};

const mapReduxStateToProps = (reduxStore) => ({
  reduxStore,
  // projectInfo 
})

export default connect(mapReduxStateToProps)(AvailableProjects);
