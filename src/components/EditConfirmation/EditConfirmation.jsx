import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import orange from '@material-ui/core/colors/orange'
import red from '@material-ui/core/colors/red'
const moment = require('moment');

const theme = createMuiTheme({
    palette: {
        primary: orange,
        secondary: red
    }
})

class Confirmation extends Component {
    handleDashClick = () => {
        // console.log('clicked YES');
        this.props.history.push('/dashboard')
    }

    render() {
        return (
            <ThemeProvider theme={theme}>

                <div className="confirmation">
                    <h2>Your changes have been saved!</h2>
                    <Button
                        type="button"
                        className="link-button"
                        variant="contained"
                        color="primary"
                        onClick={() => this.handleDashClick()} >
                        Back to Dashboard
                    </Button>
                </div>
            </ThemeProvider>
        )
    }
}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStateToProps)(Confirmation);
