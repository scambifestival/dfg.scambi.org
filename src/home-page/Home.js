import React, { Component } from "react";
import UserTest from "./UserTest";
import NLSubscribe from "./NLSubscribe";
import BlogCard from "./BlogCard";

class Home extends Component {
  render() {
    return (
      <div>
        <div>Home</div>
        <UserTest />
        {/* <NLSubscribe /> */}
        <BlogCard />
      </div>
    );
  }
}

export default Home;
