import React, { Component } from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'
class AboutPage extends Component {

  render() {

    return (
      <div className="confirmation">
        <h1>WELCOME TO VOLUNCODE</h1>
        <p>Voluncode is a platform for developers to volunteer their time to develop
           websites or apps for Minnesota-based non-profit organizations.</p>
      </div>
    )
  }
}


export default AboutPage;
