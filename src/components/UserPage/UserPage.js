import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectedProject from '../SelectedProject/SelectedProject'
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import orange from '@material-ui/core/colors/orange'

const moment = require('moment');

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: orange
  }
})

class UserPage extends Component {

  render() {

    const user = this.props.user;

    return (
      <ThemeProvider theme={theme}>
        <div className="content">
          <div className="nameCard">
            <h1 id="welcome">
              {user.first_name} {user.last_name}
            </h1>
            <p>{user.occupation}</p>
            <p>{user.city}, {user.state}</p>
          </div>
          <br />

          <div className="card">
            <p><b>MEMBER SINCE:</b> {moment(user.timestamp).format('LL')}</p>
            <p><b>EMAIL:</b> {user.email}</p>
            <p><b>PORTFOLIO:</b> {user.portfolio}</p>
            <p><b>TIME AVAILABLE:</b> {user.time_available}</p>
            <p><b>KNOWN PROGRAMMING LANGUAGES:</b> {user.languages}</p>
            <p><b>QUALIFICATIONS:</b> {user.qualifications}</p>
            <Button
              type="button"
              className="link-button"
              variant="contained"
              color="primary"
              onClick={() => {
                console.log('clicked Edit Profile');
                this.props.history.push('/edit_profile')
              }}>
              Edit Profile
            </Button>
          </div>
          <br />
          <div className="card">
            <SelectedProject />
          </div>
        </div >
      </ThemeProvider>
    )
  }
}


// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({user});
const mapStateToProps = state => ({
  user: state.user,
  state
});

// this allows us to use <App /> in index.js
export default withRouter(connect(mapStateToProps)(UserPage));
