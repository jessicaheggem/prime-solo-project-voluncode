import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import orange from '@material-ui/core/colors/orange'
import red from '@material-ui/core/colors/red'
import Popup from 'reactjs-popup'

const theme = createMuiTheme({
    palette: {
        primary: orange,
        secondary: red
    }
})

class EditProfile extends Component {
    state = {
        id: this.props.reduxStore.user.id,
        first_name: this.props.reduxStore.user.first_name,
        last_name: this.props.reduxStore.user.last_name,
        email: this.props.reduxStore.user.email,
        city: this.props.reduxStore.user.city,
        state: this.props.reduxStore.user.state,
        occupation: this.props.reduxStore.user.occupation,
        portfolio: this.props.reduxStore.user.portfolio,
        time_available: this.props.reduxStore.user.time_available,
        languages: this.props.reduxStore.user.languages,
        qualifications: this.props.reduxStore.user.qualifications,
    }

    editProfile = (event, propertyValue) => {
        //build a new object in state
        // console.log('editing profile', this.state);
        this.setState({
            ...this.state,
            [propertyValue]: event.target.value,
        })
    }

    handleSubmitEdit = () => {
        // dispatches edit to redux
        console.log('clicking to submit edit', this.state);
        this.props.dispatch({
            type: 'SUBMIT_EDIT',
            payload: this.state,
            // url: `/api/edit_profile/${this.state.id}`
        })
        this.props.history.push(`/dashboard`)
    }

    handleCancel = () => {
        this.props.history.push('/dashboard')
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <div className="editProfileCard">
                    <h1>Edit Profile</h1>
                    First Name:
                    <br />
                    <TextField
                        id="standard-name"
                        variant="outlined"
                        margin="dense"
                        style={{ width: 300 }}
                        value={this.state.first_name}
                        onChange={(event) => this.editProfile(event, 'first_name')}
                    />
                    <br />
                    <br />
                    Last Name:
                    <br />
                    <TextField
                        id="standard-name"
                        variant="outlined"
                        margin="dense"
                        style={{ width: 300 }}
                        value={this.state.last_name}
                        onChange={(event) => this.editProfile(event, 'last_name')}
                    />
                    <br />
                    <br />
                    Email:
                    <br />
                    <TextField
                        id="standard-name"
                        variant="outlined"
                        margin="dense"
                        style={{ width: 300 }}
                        value={this.state.email}
                        onChange={(event) => this.editProfile(event, 'email')}
                    />
                    <br />
                    <br />
                    City:
                    <br />
                    <TextField
                        id="standard-name"
                        variant="outlined"
                        margin="dense"
                        style={{ width: 300 }}
                        value={this.state.city}
                        onChange={(event) => this.editProfile(event, 'city')}
                    />
                    <br />
                    <br />
                    State:
                    <br />
                    <TextField
                        id="standard-name"
                        variant="outlined"
                        margin="dense"
                        style={{ width: 300 }}
                        value={this.state.state}
                        onChange={(event) => this.editProfile(event, 'state')}
                    />
                    <br />
                    <br />
                    Job Title/Occupation:
                    <br />
                    <TextField
                        id="standard-name"
                        variant="outlined"
                        margin="dense"
                        style={{ width: 300 }}
                        value={this.state.occupation}
                        onChange={(event) => this.editProfile(event, 'occupation')}
                    />
                    <br />
                    <br />
                    Portfolio URL:
                    <br />
                    <TextField
                        id="standard-name"
                        variant="outlined"
                        margin="dense"
                        style={{ width: 300 }}
                        value={this.state.portfolio}
                        onChange={(event) => this.editProfile(event, 'portfolio')}
                    />
                    <br />
                    <br />
                    How much time can you commit to a project?
                    <br />
                    <TextField
                        multiline
                        rows="4"
                        margin="dense"
                        variant="outlined"
                        style={{ width: 300 }}
                        value={this.state.time_available}
                        onChange={(event) => this.editProfile(event, 'time_available')}
                    />
                    <br />
                    <br />
                    List your known programming languages:
                    <br />
                    <TextField
                        multiline
                        rows="4"
                        margin="dense"
                        variant="outlined"
                        style={{ width: 300 }}
                        value={this.state.languages}
                        onChange={(event) => this.editProfile(event, 'languages')}
                    />
                    <br />
                    <br />
                    What qualifications do you have? <br/> * Include degrees, certifications, courses, etc.
                    <br />
                    <TextField
                        multiline
                        rows="4"
                        margin="dense"
                        variant="outlined"
                        style={{ width: 300 }}
                        value={this.state.qualifications}
                        onChange={(event) => this.editProfile(event, 'qualifications')}
                    />
                    <br />
                    <Button
                        type="button"
                        className="link-button"
                        variant="contained"
                        color="secondary"
                        onClick={this.handleCancel}>
                        Cancel
                    </Button>
                    <Popup
                        trigger={
                            <Button
                                type="button"
                                className="link-button"
                                variant="contained"
                                color="primary"
                            >
                                Submit Changes
                            </Button>}
                        modal>
                        {close => (
                            <div className="popup">
                                <h2>Are you sure you want to submit these changes?</h2>
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
                                        onClick={() => this.handleSubmitEdit()}>
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

export default withRouter(connect(mapReduxStateToProps)(EditProfile));
