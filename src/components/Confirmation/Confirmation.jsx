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
    handleHomeClick = () => {
        // console.log('clicked YES');
        this.props.history.push('/home')
    }

    render() {
        return (
            <ThemeProvider theme={theme}>

                <div className="confirmation">
                    <h2>You are now a contributor of this project!</h2>
                    <Button
                        type="button"
                        className="link-button"
                        variant="contained"
                        color="primary"
                        onClick={() => this.handleHomeClick()} >
                        Back to Home
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
