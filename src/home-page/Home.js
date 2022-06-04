import React, { Component } from "react";
import UserTest from "./UserTest";
import Partners from "../partners-page/partners";

class Home extends Component {
  render() {
    return (
      <div>
        <div>Home</div>
        <UserTest />
        <Partners />
      </div>
    );
  }
}

export default Home;
