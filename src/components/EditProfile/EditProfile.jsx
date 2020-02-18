import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

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

    handleEdit = () => {
        // dispatches edit to redux
        console.log('clicking to submit edit', this.state);
        this.props.dispatch({
            type: 'SUBMIT_EDIT',
            payload: this.state,
            // url: `/api/edit_profile/${this.state.id}`
        })
        this.props.history.push(`/home`)
    }

    render() {
        return (
            <div>
                <h2>Edit Profile</h2>
                First Name: 
                <input 
                // defaultValue={this.state.first_name} 
                value={this.state.first_name} 
                onChange={(event) => this.editProfile(event, 'first_name')}>
                </input>
                <br />
                Last Name: 
                <input 
                // defaultValue={this.state.last_name} 
                value={this.state.last_name} 
                onChange={(event) => this.editProfile(event, 'last_name')}>
                </input>
                <br />
                Email: 
                <input 
                // defaultValue={this.state.email} 
                value={this.state.email} 
                onChange={(event) => this.editProfile(event, 'email')}>
                </input>
                <br />
                City: 
                <input 
                // defaultValue={this.state.city} 
                value={this.state.city} 
                onChange={(event) => this.editProfile(event, 'city')}>
                </input>
                <br />
                State: 
                <input 
                // defaultValue={this.state.state} 
                value={this.state.state} 
                onChange={(event) => this.editProfile(event, 'state')}>
                </input>
                <br />
                Job Title/Occupation: 
                <input 
                // defaultValue={this.state.occupation} 
                value={this.state.occupation} 
                onChange={(event) => this.editProfile(event, 'occupation')}>
                </input>
                <br />
                Github URL or another link to your portfolio: 
                <input 
                // defaultValue={this.state.portfolio} 
                value={this.state.portfolio} 
                onChange={(event) => this.editProfile(event, 'portfolio')}>
                </input>
                <br />
                How much time can you commit to a project?: 
                <input 
                // defaultValue={this.state.time_available} 
                value={this.state.time_available} 
                onChange={(event) => this.editProfile(event, 'time_available')}>
                </input>
                <br />
                List your known programming languages: 
                <textarea 
                // defaultValue={this.state.languages} 
                value={this.state.languages} 
                onChange={(event) => this.editProfile(event, 'languages')}>
                </textarea>
                <br />
                What qualifications do you have? Include degrees, certifications, courses, etc.: 
                <textarea 
                // defaultValue={this.state.qualifications} 
                value={this.state.qualifications} 
                onChange={(event) => this.editProfile(event, 'qualifications')}>
                </textarea>
                <br />
                <button onClick={this.handleEdit}>Submit Changes</button>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default withRouter(connect(mapReduxStateToProps)(EditProfile));
