import React, { Component } from 'react';
import '../styles/global.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Courses from './Courses';
import Header from './Header';
import CreateCourse from './CreateCourse';
import UpdateCourse from './UpdateCourse';
import CourseDetail from './CourseDetail';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/courses">
        <div className="root">
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Courses} />
              <Route exact path="/create" component={CreateCourse} />
              <Route exact path="/:id" component={CourseDetail} />
              <Route exact path="/:id/update" component={UpdateCourse} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
