import React, { Component } from 'react';
import { connect } from 'react-redux'
import Popup from "reactjs-popup";


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class AvailableProjects extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_PROJECTS' })
  }

  handleNameClick = (id) => {
    console.log(id);
    this.props.dispatch({
      type: 'FETCH_PROJECT_INFO',
      payload: id
    })
    this.props.history.push(`/project_info/${id}`);
  }

  handleContributeClick = () => {
    console.log('clicked Contribute');
    this.props.history.push('/contribute');
    
  }

  render() {
    return (
      <div>
        <h1>Available Projects</h1>
        <ul>
          {/* projects.map : the word projects connects back to the renamed reducer in reducer/index.js in the combineReducers */}
          {this.props.reduxStore.projects.map(project =>
            <li key={project.id}>
              <div>
                <h3 onClick={() => this.handleNameClick(project.id)} >
                  {project.organization_name}
                </h3>
                <p>{project.description}</p>
                <p>{project.start_date}</p>
                <p>{project.end_date}</p>
                <button onClick={() => this.handleContributeClick()} >Contribute</button>
              </div>
            </li>
          )}
        </ul>
      </div>
    )
  }
};

const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapReduxStateToProps)(AvailableProjects);
