import React, { Component } from 'react';
import { connect } from 'react-redux'


class ProjectInfo extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_PROJECT_INFO' })
  }

  render() {
    return (
        <div>
            <h1>Project Info</h1>
        </div>

    )
  }
}

const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapReduxStateToProps)(ProjectInfo);
