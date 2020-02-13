import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class AvailableProjects extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_PROJECTS' })
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
                <Link to="/project_info">
                  {project.organization_name}
                </Link>
                <p>{project.description}</p>
                <p>{project.start_date}</p>
                <p>{project.end_date}</p>
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
