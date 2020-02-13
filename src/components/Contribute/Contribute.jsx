import React, { Component } from 'react';
import { connect } from 'react-redux'


class Contribute extends Component {
    handleYesClick = () => {
        // console.log('clicked YES');
        this.props.history.push('/confirmation')
    }

    handleNoClick = () => {
        // console.log('clicked NO');
        this.props.history.push('/projects')

    }

    render() {
        return (
            <div>
                <h2>Are you sure you want to contribute?</h2>
                <button onClick={() => this.handleNoClick()} >NO</button>
                <button onClick={() => this.handleYesClick()} >YES</button>

            </div>
        )
    }
}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStateToProps)(Contribute);
