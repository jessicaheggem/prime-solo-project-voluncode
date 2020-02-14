import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import SelectedProject from '../SelectedProject/SelectedProject'
const moment = require('moment');

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`

const UserPage = (props) => (
  <div>
    <h1 id="welcome">
      Welcome, {props.user.username}!
    </h1>
    <p>Your ID is: {props.user.id}</p>
    <p>Member since: {props.user.timestamp}</p>
    <p>Email: {props.user.email}</p>
    <p>{props.user.first_name} {props.user.last_name}</p>
    <p>{props.user.city}, {props.user.state}</p>
    <p>{props.user.occupation}</p>
    <p><b>Portfolio URL:</b> {props.user.portfolio}</p>
    <p><b>Time available to volunteer:</b> {props.user.time_available}</p>
    <p><b>Known programming languages:</b> {props.user.languages}</p>
    <p><b>Qualifications:</b> {props.user.qualifications}</p>
    <br />
    <SelectedProject />
    <br />
    <LogOutButton className="log-in" />
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
