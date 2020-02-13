import React, { Component } from 'react';
import { connect } from 'react-redux'


class Confirmation extends Component {
    handleHomeClick = () => {
        // console.log('clicked YES');
        this.props.history.push('/home')
    }

    render() {
        return (
            <div>
                <h2>You are now a contributor of this project!</h2>
                <button onClick={() => this.handleHomeClick()} >Back to Home</button>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStateToProps)(Confirmation);
