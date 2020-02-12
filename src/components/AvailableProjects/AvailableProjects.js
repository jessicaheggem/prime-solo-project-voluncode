import React, { Component } from 'react';
import { connect } from 'react-redux'

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
      <ul>
        {this.props.reduxStore.projectsReducer.map(project =>
          <li key={project.id}>
            <div>
              <p>{project.start_date}</p>
              <p>{project.end_date}</p>
              <p>{project.organization_name}</p>
              <p>{project.description}</p>
            </div>
          </li>
        )}
      </ul>

    )
  }
};

const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapReduxStateToProps)(AvailableProjects);
