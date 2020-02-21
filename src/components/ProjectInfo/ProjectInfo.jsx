import React, { Component } from 'react';
import { connect } from 'react-redux'
import Popup from "reactjs-popup";
import Button from '@material-ui/core/Button';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import orange from '@material-ui/core/colors/orange'
import red from '@material-ui/core/colors/red'
const moment = require('moment');

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: red
  }
})

class ProjectInfo extends Component {

  state = {
    project_id: '',
  }


  handleYesClick = (event) => {
    this.props.dispatch({
      type: 'POST_PROJECT',
      payload: {
        project_id: this.props.reduxStore.projectInfo.id
      }
    })
    this.props.history.push('/confirmation')
  }

  handleBackClick = () => {
    this.props.history.push('/projects')
  }

  render() {

    let project = this.props.reduxStore.projectInfo;

    return (
      <ThemeProvider theme={theme}>

        <div className="content">
          <h1>Project Info</h1>
          <h3> {project.organization_name} </h3>
          <p> {moment(project.start_date).format('LL')} - {moment(project.end_date).format('LL')} </p>
          <p> {project.website} | {project.email}</p>
          <p> {project.description} </p>
          <Button
            type="button"
            className="link-button"
            variant="contained"
            color="secondary"
            onClick={() => this.handleBackClick()}>
            Back to Projects
          </Button>
          <Popup
            trigger={
              <Button
                type="button"
                className="link-button"
                variant="contained"
                color="primary">
                Contribute
              </Button>}
            modal>
            {close => (
            <div className="popup">
                <h2>Are you sure you want to contribute to this project?</h2>
                <div>
                  <Button
                    type="button"
                    className="link-button"
                    variant="contained"
                    color="secondary"
                    onClick={() => { close(); }} >
                    No
                  </Button>
                  <Button
                    type="button"
                    className="link-button"
                    variant="contained"
                    color="primary"
                    onClick={() => this.handleYesClick()}>
                    Yes
                  </Button>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </ThemeProvider>
    )
  }
}

const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapReduxStateToProps)(ProjectInfo);
