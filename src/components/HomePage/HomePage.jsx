import React, { Component } from 'react';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'
class HomePage extends Component {

  render() {

    return (
      <div className="homePageImg container">
        
        <img src="/images/engineering.jpg" alt="Engineers collaborating"/>
        <div className="centered homePageTxt">
        <h1 className="homePageWelcome">WELCOME TO VOLUNCODE</h1>
        <p className="homePageImgText">
          Voluncode is a platform where developers can volunteer to develop
          <br/>
           websites or apps for Minnesota-based non-profit organizations.
        </p>
          </div>

        
      </div>
    )
  }
}


export default HomePage;
