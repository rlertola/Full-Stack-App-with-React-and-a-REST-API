import React, { Component } from 'react';
import '../styles/global.css';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Courses from './Courses';
import Header from './Header';
import CreateCourse from './CreateCourse';
import UpdateCourse from './UpdateCourse';

class App extends Component {
  render() {
    return (
      <HashRouter basename="/courses">
        <div className="root">
          <div>
            <Header />
            <Switch>
              <Route exact path="/" render={() => <Courses />} />
              <Route exact path="/create" component={CreateCourse} />
              <Route exact path="/update" component={UpdateCourse} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
