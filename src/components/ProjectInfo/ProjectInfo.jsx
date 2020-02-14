import React, { Component } from 'react';
import { connect } from 'react-redux'
import Popup from "reactjs-popup";


class ProjectInfo extends Component {

  handleYesClick = () => {
    // console.log('clicked YES');
    this.props.history.push('/confirmation')
  }

  render() {
    return (
      <div>
        <h1>Project Info</h1>
        <h3>{this.props.reduxStore.projectInfo.organization_name} </h3>
        <p> {this.props.reduxStore.projectInfo.start_date}</p>
        <p> {this.props.reduxStore.projectInfo.end_date} </p>
        <p>{this.props.reduxStore.projectInfo.description}</p>
        {/* <button onClick={() => this.handleContributeClick()}>Contribute</button> */}
        <Popup trigger={<button > Contribute </button>} modal>
          {close => (
            <div>
              <a onClick={close}>
              </a>
              <h2>Are you sure you want to contribute?</h2>
              <div>
                <button
                  onClick={() => { close(); }} >
                  No
                        </button>
                <button onClick={() => this.handleYesClick()}> Yes </button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapReduxStateToProps)(ProjectInfo);
