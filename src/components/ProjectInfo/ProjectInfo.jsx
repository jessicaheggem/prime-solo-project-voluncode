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
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_PROJECT_INFO' })
  }

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
    // this.props.history.push(`/home`);
    this.props.history.push('/confirmation')
  }

  render() {
    return (
      <ThemeProvider theme={theme}>

        <div>
          <h1>Project Info</h1>
          <h3> {this.props.reduxStore.projectInfo.organization_name} </h3>
          <p> {moment(this.props.reduxStore.developerProject.start_date).format('LL')} - {moment(this.props.reduxStore.developerProject.end_date).format('LL')} </p>
          <p> {this.props.reduxStore.projectInfo.description} </p>
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
              <div>
                <a onClick={close}>&times;</a>
                <h2>Are you sure you want to contribute?</h2>
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
