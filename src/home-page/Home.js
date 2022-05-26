import React, { Component } from "react";
import UserTest from "./UserTest";
import SupportUs from "..//supportus-page/SupportUs";

class Home extends Component {
  render() {
    return (
      <div>
        <div>Home</div>
        <UserTest />
        <SupportUs />
      </div>
    );
  }
}

export default Home;
