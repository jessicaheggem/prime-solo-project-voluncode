import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
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

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`

class UserPage extends Component {

  render() {

    const props = this.props;

    return (
      <ThemeProvider theme={theme}>
        <div className="userPage">
          <h1 id="welcome">
            Welcome, {props.user.first_name} {props.user.last_name}!
    </h1>
          <p>Your ID is: {props.user.id}</p>
          <p><b>Member since:</b></p> 
          <p>{moment(props.user.timestamp).format('LL')}</p>
          <p>{props.user.email}</p>
          <p>{props.user.city}, {props.user.state}</p>
          <p>{props.user.occupation}</p>
          <p><b>Portfolio URL:</b></p> 
          <p>{props.user.portfolio}</p>
          <p><b>Time available to volunteer:</b></p> 
          <p>{props.user.time_available}</p>
          <p><b>Known programming languages:</b></p> 
          <p>{props.user.languages}</p>
          <p><b>Qualifications:</b></p> <p>{props.user.qualifications}</p>

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

          <br />
          <SelectedProject />
          <br />
          <LogOutButton className="log-in" />
        </div >
      </ThemeProvider>
    )
  }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default withRouter(connect(mapStateToProps)(UserPage));
