import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import teal from '@material-ui/core/colors/teal'

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: teal
  }
})

class RegisterPage extends Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    city: '',
    state: '',
    occupation: '',
    portfolioUrl: '',
    timeAvailable: '',
    languages: '',
    qualifications: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    if (
      this.state.firstName &&
      this.state.lastName &&
      this.state.username &&
      this.state.password &&
      this.state.city &&
      this.state.state &&
      this.state.occupation &&
      this.state.portfolioUrl &&
      this.state.timeAvailable &&
      this.state.languages &&
      this.state.qualifications
    ) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          username: this.state.username,
          password: this.state.password,
          city: this.state.city,
          state: this.state.state,
          occupation: this.state.occupation,
          portfolioUrl: this.state.portfolioUrl,
          timeAvailable: this.state.timeAvailable,
          languages: this.state.languages,
          qualifications: this.state.qualifications,
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
      <ThemeProvider theme={theme}>
        <div className="registrationPage">
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
            <div>
              <label htmlFor="firstName">
                <TextField
                  required
                  id="standard-required"
                  label="First Name"
                  margin="dense"
                  value={this.state.firstName}
                  onChange={this.handleInputChangeFor('firstName')}
                />
              </label>
            </div>
            <div>
              <label htmlFor="lastName">
                <TextField
                  required
                  id="standard-required"
                  label="Last Name"
                  margin="dense"
                  value={this.state.lastName}
                  onChange={this.handleInputChangeFor('lastName')}
                />
              </label>
            </div>
            <div>
              <label htmlFor="email">
                <TextField
                  required
                  id="standard-required"
                  label="Email"
                  margin="dense"
                  value={this.state.email}
                  onChange={this.handleInputChangeFor('email')}
                />
              </label>
            </div>
            <div>
              <label htmlFor="username">
                <TextField
                  required
                  id="standard-name"
                  label="Username"
                  margin="dense"
                  value={this.state.username}
                  onChange={this.handleInputChangeFor('username')}
                />
              </label>
            </div>
            <div>
              <label htmlFor="password">
                <TextField
                  required
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  margin="dense"
                  helperText="Minimum of 6 characters"
                  value={this.state.password}
                  onChange={this.handleInputChangeFor('password')}
                />
              </label>
            </div>
            <div>
              <label htmlFor="city">
                <TextField
                  required
                  id="standard-name"
                  label="City"
                  margin="dense"
                  value={this.state.city}
                  onChange={this.handleInputChangeFor('city')}
                />
              </label>
            </div>
            <div>
              <label htmlFor="state">
                <TextField
                  required
                  id="standard-name"
                  label="State"
                  margin="dense"
                  value={this.state.state}
                  onChange={this.handleInputChangeFor('state')}
                />
              </label>
            </div>
            <div>
              <label htmlFor="occupation">
                <TextField
                  required
                  id="standard-name"
                  label="Job Title/Occupation"
                  margin="dense"
                  value={this.state.occupation}
                  onChange={this.handleInputChangeFor('occupation')}
                />
              </label>
            </div>
            <div>
              <label htmlFor="portfolioUrl">
                <p>Github URL or another link to your portfolio:</p>
                <TextField
                  required
                  placeholder="i.e. github.com/name"
                  margin="dense"
                  variant="outlined"
                  value={this.state.portfolioUrl}
                  onChange={this.handleInputChangeFor('portfolioUrl')}
                />
              </label>
            </div>
            <div>
              <label htmlFor="timeAvailable">
                <p>How much time can you commit to a project?</p>
                <TextField
                  required
                  multiline
                  rows="4"
                  placeholder="i.e. 5 hours per week"
                  margin="dense"
                  variant="outlined"
                  value={this.state.timeAvailable}
                  onChange={this.handleInputChangeFor('timeAvailable')}
                />
              </label>
            </div>
            <div>
              <label htmlFor="languages">
                <p>List your known programming languages</p>
                <TextField
                  required
                  multiline
                  rows="4"
                  placeholder="List programming languages here"
                  margin="dense"
                  variant="outlined"
                  value={this.state.languages}
                  onChange={this.handleInputChangeFor('languages')}
                />
              </label>
            </div>
            <div>
              <label htmlFor="qualifications">
                <p>What qualifications do you have? Include degrees, certifications, courses, etc.</p>
                <TextField
                  multiline
                  rows="4"
                  placeholder="List qualifications here"
                  margin="dense"
                  variant="outlined"
                  value={this.state.qualifications}
                  onChange={this.handleInputChangeFor('qualifications')}
                />
              </label>
            </div>
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
            <Button
              type="button"
              className="link-button"
              variant="contained"
              color="primary"
              onClick={() => { this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' }) }}
            >
              Login
            </Button>
          </center>
        </div>
      </ThemeProvider>
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

