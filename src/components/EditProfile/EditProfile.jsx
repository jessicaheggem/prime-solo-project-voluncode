import React, { Component } from 'react';
import { connect } from 'react-redux'

class EditProfile extends Component {

    render() {
        return (
            <div>
                <h1>Edit Profile</h1>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
  })

export default connect (mapReduxStateToProps)(EditProfile);
