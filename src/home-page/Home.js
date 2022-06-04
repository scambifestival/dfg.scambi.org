import React, { Component } from "react";
import UserTest from "./UserTest";
import Values from "../values-page/Values";

class Home extends Component {
  render() {
    return (
      <div>
        <div>Home</div>
        <UserTest />
        <Values />
      </div>
    );
  }
}

export default Home;
