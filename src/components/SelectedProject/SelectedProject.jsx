import React, { Component } from 'react';
import { connect } from 'react-redux'
import Popup from "reactjs-popup";
import Button from '@material-ui/core/Button';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import orange from '@material-ui/core/colors/orange'
import red from '@material-ui/core/colors/red'
import DeleteIcon from '@material-ui/icons/Delete';
import { withRouter } from 'react-router-dom';
const moment = require('moment');

const theme = createMuiTheme({
    palette: {
        primary: orange,
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

    handleAvailableProjectsClick = () => {
        this.props.history.push('/projects')
    }

    render() {
        let project = this.props.reduxStore.developerProject;

        let projectInfo = (
            <>
                <h3> {project.organization_name} </h3>
                <p><b> Estimated Project Timeline:</b> {moment(this.props.reduxStore.developerProject.start_date).format('LL')} - {moment(this.props.reduxStore.developerProject.end_date).format('LL')} </p>
                <p> {this.props.reduxStore.developerProject.website} | {this.props.reduxStore.developerProject.email}</p>
                <p> {this.props.reduxStore.developerProject.description} </p>
                {/* <button onClick={(event) => { if (window.confirm('Are you sure you want to delete this?')) this.handleDelete(event) }}>Delete Project</button> */}
                <Popup
                    trigger=
                    {
                        <Button
                            type="button"
                            className="link-button"
                            variant="contained"
                            color="secondary"
                            >
                            Delete Project
                        <DeleteIcon />
                        </Button>
                    }
                    modal>
                    {close => (
                        <div className="popup">
                            {/* <a onClick={close}>&times;</a> */}
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
            </>
        )
        // if(project.id && project.name)
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <h2>Current Project:</h2>
                    {/* variable to eval ? TRUTHY : FALSY */}
                    {
                        project.id ? projectInfo :
                            <>
                                <p>Select a project!</p>
                                <Button
                                type="button"
                                className="link-button"
                                variant="contained"
                                color="primary"
                                onClick={this.handleAvailableProjectsClick}
                                >Available Projects
                                </Button>
                            </>
                    }
                    {/* {JSON.stringify(this.props.reduxStore.developerProject)} */}

                </div>
            </ThemeProvider>
        )
    }
}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default withRouter(connect(mapReduxStateToProps)(SelectedProject));
