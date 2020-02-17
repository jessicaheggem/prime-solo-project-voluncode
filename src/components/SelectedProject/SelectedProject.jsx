import React, { Component } from 'react';
import { connect } from 'react-redux'

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
            <div>
                <h2>Your Project:</h2>
                {/* {JSON.stringify(this.props.reduxStore.developerProject)} */}
                <h3> {this.props.reduxStore.developerProject.organization_name} </h3>
                <p><b> Start date:</b> {this.props.reduxStore.developerProject.start_date} </p>
                <p><b> End date:</b> {this.props.reduxStore.developerProject.end_date} </p>
                <p> {this.props.reduxStore.developerProject.description} </p>
                <button onClick={(event) => {if (window.confirm('Are you sure you want to delete this?')) this.handleDelete(event)}}>Delete Project</button>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStateToProps)(SelectedProject);
