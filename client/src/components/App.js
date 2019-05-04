import React, { Component } from 'react';
import '../styles/global.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { AuthProvider } from './AuthContext';
import Courses from './Courses';
import Header from './Header';
import CreateCourse from './CreateCourse';
import UpdateCourse from './UpdateCourse';
import CourseDetail from './CourseDetail';
import UserSignIn from './UserSignIn';
import UserSignUp from './UserSignUp';
import PrivateRoute from './PrivateRoute';
import Forbidden from './Forbidden';
import NotFound from './NotFound';
import UnhandledError from './UnhandledError';

// PrivateRoute on Create and UpdateCourse.
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="root">
          <div>
            <AuthProvider>
              <Header />
              <Switch>
                <Route exact path="/" component={Courses} />
                <PrivateRoute
                  exact
                  path="/courses/create"
                  component={CreateCourse}
                />
                <Route exact path="/courses/:id" component={CourseDetail} />
                <PrivateRoute
                  exact
                  path="/courses/:id/update"
                  component={UpdateCourse}
                />
                <Route exact path="/signin" component={UserSignIn} />
                <Route exact path="/signup" component={UserSignUp} />
                <Route exact path="/forbidden" component={Forbidden} />
                <Route exact path="/notfound" component={NotFound} />
                <Route exact path="/error" component={UnhandledError} />
                <Route render={() => <Redirect to="/notfound" />} />
              </Switch>
            </AuthProvider>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
