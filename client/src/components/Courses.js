import React, { Component } from 'react';
import Course from './Course';

// class Courses extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       courses: this.props.data
//     };
//   }

//   render() {
//     return (
//       <div>
//         <hr />
//         <div className="bounds">hello</div>
//       </div>
//     );
//   }
// }

const Courses = props => {
  const courses = props.data;
  let titles;

  titles = courses.map(course => {
    return <Course title={course.title} key={course._id} />;
  });

  return (
    <div>
      <hr />
      <div className="bounds">{titles}</div>
    </div>
  );
};

export default Courses;
