import React, { Component } from 'react';
import '../styles/global.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Courses from './Courses';
import Header from './Header';
import CreateCourse from './CreateCourse';
import UpdateCourse from './UpdateCourse';
import CourseDetail from './CourseDetail';
import UserSignIn from './UserSignIn';
import UserSignUp from './UserSignUp';

const MyContext = React.createContext();
class MyProvider extends Component {
  state = {
    emailAddress: '',
    password: ''
  };
  render() {
    return (
      <MyContext.Provider> value={this.props.children}</MyContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="root">
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Courses} />
              <Route exact path="/courses/create" component={CreateCourse} />
              <Route exact path="/courses/:id" component={CourseDetail} />
              <Route
                exact
                path="/courses/:id/update"
                component={UpdateCourse}
              />
              <Route exact path="/signin" component={UserSignIn} />
              <Route exact path="/signup" component={UserSignUp} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
