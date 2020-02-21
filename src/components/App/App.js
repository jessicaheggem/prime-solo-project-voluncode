import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import HomePage from '../HomePage/HomePage';
import UserPage from '../UserPage/UserPage';
import AvailableProjects from '../AvailableProjects/AvailableProjects';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import Confirmation from '../Confirmation/Confirmation';
import EditProfile from '../EditProfile/EditProfile'

import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
    

  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/dashboard */}
            <Redirect exact from="/" to="/dashboard" />
            {/* Visiting localhost:3000/dashboard will show the dashboard page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/home"
              component={HomePage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/dashboard"
              component={UserPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/projects"
              component={AvailableProjects}
            />
            <ProtectedRoute
              exact
              path="/project_info/:id"
              component={ProjectInfo}
            />
            <ProtectedRoute
              exact
              path="/confirmation"
              component={Confirmation}
            />
            <ProtectedRoute
              exact
              path="/edit_profile"
              component={EditProfile}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
