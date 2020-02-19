import React, { Component } from 'react';
import { connect } from 'react-redux'
import Popup from "reactjs-popup";
import Button from '@material-ui/core/Button';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import teal from '@material-ui/core/colors/teal'
import red from '@material-ui/core/colors/red'
const moment = require('moment');

const theme = createMuiTheme({
    palette: {
        primary: teal,
        secondary: red
    }
})

class SelectedProject extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_DEVELOPER_PROJECT' })
    }

    handleDelete = () => {
        console.log('clicked Delete!', this.props.reduxStore.developerProject.id);
        this.props.dispatch({
            type: 'DELETE_DEVELOPER_PROJECT',
            payload: this.props.reduxStore.developerProject.id
        })
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <h2>Your Project:</h2>
                    {/* {JSON.stringify(this.props.reduxStore.developerProject)} */}
                    <h3> {this.props.reduxStore.developerProject.organization_name} </h3>
                    <p><b> Estimated Project Timeline:</b></p>
                    <p>{moment(this.props.reduxStore.developerProject.start_date).format('LL')} - {moment(this.props.reduxStore.developerProject.end_date).format('LL')} </p>
                    <p> {this.props.reduxStore.developerProject.description} </p>
                    {/* <button onClick={(event) => { if (window.confirm('Are you sure you want to delete this?')) this.handleDelete(event) }}>Delete Project</button> */}
                    <Popup
                        trigger=
                        {
                            <Button
                                type="button"
                                className="link-button"
                                variant="contained"
                                color="secondary">
                                Delete Project
                            </Button>
                        }
                        modal>
                        {close => (
                            <div>
                                <a onClick={close}>&times;</a>
                                <h2>Are you sure you want to delete this project?</h2>
                                <p>This action cannot be undone.</p>
                                <div>
                                    <Button
                                        type="button"
                                        className="link-button"
                                        variant="contained"
                                        color="primary"
                                        onClick={() => { close(); }} >
                                        No
                                </Button>
                                    <Button
                                        type="button"
                                        className="link-button"
                                        variant="contained"
                                        color="secondary"
                                        onClick={(event) => {
                                            close(this.handleDelete(event));
                                        }}>
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

export default connect(mapReduxStateToProps)(SelectedProject);
