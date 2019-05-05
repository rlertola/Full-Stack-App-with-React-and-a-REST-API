# TREEHOUSE TECHDEGREE PROJECT 10 - Full Stack App with React and a REST API

This project was built using React, Express, Mongo DB and Mongoose; routing with React-Router, and simple animation with React Spring.

This combines with project 9 and connects the api with a React frontend.

#### Getting Started

To reset the database:

```
npm run seed
```

Start the application.

```
npm start
```

#### Pages

**Courses**
This is the home page. It renders the Courses component which displays each Course component and NewCourseButton. When a course is clicked on, they are directed to the CourseDetail page.

**Header**
Header is displayed throughout the application. It contains links to the SignIn and SignUp pages. When a user is logged in, it will display user's name and a signout option.

**SignIn, SignUp, signOut & AuthContext**
All signing in and out, and global state is handled in the AuthContext component. The user's credentials are persisted on page refresh. The global signOut method in AuthContext signs the user out and clears the user's credentials from localStorage.

**CreateCourse & UpdateCourse**
These routes are wrapped in a ProtectedRoute component. When user tries to click on NewCourseButton and aren't signed in, they are redirected to SignIn, and redirected back after login.

A unauthenticated user OR if they aren't the registered owner of that particular course cannot access the update or delete buttons on the CourseDetail page.

**Errors**
Errors are displayed via the ValidationErrors component in SignUp, CreateCourse and UpdateCourse if the user leaves any of the required inputs empty.

If a bad url or bad course id is entered, the NotFound component is rendered. If there is a 500 error, the UnhandledError component will render.

**Markdown Support**
User may use markdown to enter text in the course fields and it will display correctly.
