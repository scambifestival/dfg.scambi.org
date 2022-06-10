import React, { Component } from "react";
import UserTest from "./UserTest";
import Imbalance from "../imbalance-component/Imbalance";

class Home extends Component {
  render() {
    return (
      <div>
        <div>Home</div>
        <UserTest />
        <Imbalance />
      </div>
    );
  }
}

export default Home;
