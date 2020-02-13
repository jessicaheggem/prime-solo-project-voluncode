import React, { Component } from 'react';
import { connect } from 'react-redux'


class ProjectInfo extends Component {
  // componentDidMount() {
  //   this.props.dispatch({ type: 'FETCH_PROJECT_INFO' })
  // }

  render() {
    return (
      <div>
        <h1>Project Info</h1>
        <h3>{this.props.reduxStore.projectInfo.organization_name} </h3>
        <p> {this.props.reduxStore.projectInfo.start_date}</p>
        <p> {this.props.reduxStore.projectInfo.end_date} </p>
        <p>{this.props.reduxStore.projectInfo.description}</p>

      </div>
    )
  }
}

const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapReduxStateToProps)(ProjectInfo);
