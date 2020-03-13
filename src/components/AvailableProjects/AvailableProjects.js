import React, { Component } from 'react';
import { connect } from 'react-redux'
import Popup from "reactjs-popup";
import Link from '@material-ui/core/Link';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import orange from '@material-ui/core/colors/orange'
import blueGrey from '@material-ui/core/colors/blueGrey'
const moment = require('moment');

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: blueGrey
  }
})

class AvailableProjects extends Component {

  componentDidMount() {
    this.props.dispatch
      ({ type: 'FETCH_PROJECTS' })
  }

  handleNameClick = (id) => {
    console.log(id);
    
    this.props.history.push(`/project_info/${id}`);
  }

  // handleYesClick = () => {
  //   this.props.history.push('/confirmation')
  // }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="content ">
          <h1 className="nameCard">Available Projects</h1>
          {/* {JSON.stringify(this.props.reduxStore.projectInfo)} */}
          {/* projects.map : the word projects connects back to the 
          renamed reducer in reducer/index.js in the combineReducers */}
            {this.props.reduxStore.projects.map(project =>
              <p key={project.id} className="card">
                <div>
                  <Link
                    className="availableProjectsHeading"
                    component="button"
                    color="primary"
                    onClick={() => this.handleNameClick(project.id)} ><b>
                      {project.organization_name}
                    </b></Link>
                  {/* <p>{moment(project.start_date).format('LL')} - {moment(project.end_date).format('LL')}</p> */}
                  {/* <p>{project.website} | {project.email}</p> */}
                  <p>{project.description}</p>
                </div>
              </p>
            )}
        </div>
      </ThemeProvider>
    )
  }
};

const mapReduxStateToProps = (reduxStore) => ({
  reduxStore,
  // projectInfo 
})

export default connect(mapReduxStateToProps)(AvailableProjects);
