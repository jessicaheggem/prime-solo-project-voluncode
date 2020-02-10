import React, { Component } from 'react';
import { connect } from 'react-redux';

class RegisterPage extends Component {
  state = {
    // firstName: '',
    // lastName: '',
    username: '',
    password: '',
    // city: '',
    // state: '',
    // occupation: '',
    // portfolioUrl: '',
    // timeAvailable: '',
    // languages: '',
    // qualifications: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    if (
      // this.state.firstName &&
      // this.state.lastName &&
      this.state.username &&
      this.state.password 
      // &&
      // this.state.city &&
      // this.state.state &&
      // this.state.occupation &&
      // this.state.portfolioUrl &&
      // this.state.timeAvailable &&
      // this.state.languages &&
      // this.state.qualifications
      ) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          // firstName: this.state.firstName,
          // lastName: this.state.lastName,
          username: this.state.username,
          password: this.state.password,
          // city: this.state.city,
          // state: this.state.state,
          // occupation: this.state.occupation,
          // portfolioUrl: this.state.portfolioUrl,
          // timeAvailable: this.state.timeAvailable,
          // languages: this.state.languages,
          // qualifications: this.state.qualifications,
        },
      });
    } else {
      this.props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form onSubmit={this.registerUser}>
          <h1>Register User</h1>
          {/* <div>
            <label htmlFor="firstName">
              First Name:
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleInputChangeFor('firstName')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="lastName">
              Last Name:
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleInputChangeFor('lastName')}
              />
            </label>
          </div> */}
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          {/* <div>
            <label htmlFor="city">
              City:
              <input
                type="text"
                name="city"
                value={this.state.city}
                onChange={this.handleInputChangeFor('city')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="state">
              State:
              <input
                type="text"
                name="state"
                value={this.state.state}
                onChange={this.handleInputChangeFor('state')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="occupation">
              Occupation:
              <input
                type="text"
                name="occupation"
                value={this.state.occupation}
                onChange={this.handleInputChangeFor('occupation')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="portfolioUrl">
              Portfolio URL:
              <input
                type="text"
                name="portfolioUrl"
                value={this.state.portfolioUrl}
                onChange={this.handleInputChangeFor('portfolioUrl')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="timeAvailable">
              Time Available:
              <input
                type="text"
                name="timeAvailable"
                value={this.state.timeAvailable}
                onChange={this.handleInputChangeFor('timeAvailable')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="languages">
              Languages:
              <input
                type="text"
                name="languages"
                value={this.state.languages}
                onChange={this.handleInputChangeFor('languages')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="qualifications">
              Qualifications:
              <input
                type="text"
                name="qualifications"
                value={this.state.qualifications}
                onChange={this.handleInputChangeFor('qualifications')}
              />
            </label>
          </div> */}
          <div>
            <input
              className="register"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </form>
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => { this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' }) }}
          >
            Login
          </button>
        </center>
      </div>



    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);

