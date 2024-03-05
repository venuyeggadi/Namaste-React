import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <User name="Venu (function)" location="Telangana" />
        <UserClass name="Venu (class)" location="Telangana" />
        <UserClass name="Venu (class)" location="Telangana" />
      </div>
    );
  }
}

/*
Parent Constructor
Parent Render

  - Render
  Child Constructor
  Child Render
  Child Constructor
  Child Render

  - Commit (as a batch)
  Child Component Did Mount
  Child Component Did Mount

Parent Component Did Mount
*/

export default About;
