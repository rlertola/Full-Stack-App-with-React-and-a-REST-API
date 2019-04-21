import React, { Component } from 'react';
import '../styles/global.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './AuthContext';

import Courses from './Courses';
import Header from './Header';
import CreateCourse from './CreateCourse';
import UpdateCourse from './UpdateCourse';
import CourseDetail from './CourseDetail';
import UserSignIn from './UserSignIn';
import UserSignUp from './UserSignUp';
import PrivateRoute from './PrivateRoute';

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
                <Route exact path="/courses/:id" component={CourseDetail} />
                <PrivateRoute
                  exact
                  path="/courses/create"
                  component={CreateCourse}
                />
                <PrivateRoute
                  exact
                  path="/courses/:id/update"
                  component={UpdateCourse}
                />
                <Route exact path="/signin" component={UserSignIn} />
                <Route exact path="/signup" component={UserSignUp} />
              </Switch>
            </AuthProvider>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
