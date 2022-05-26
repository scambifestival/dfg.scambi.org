import React, { Component } from "react";
import UserTest from "./UserTest";
import Family from "./family";

class Home extends Component {
  render() {
    return (
      <div>
        <div>Home</div>
        <UserTest />
        <Family />
      </div>
    );
  }
}

export default Home;
