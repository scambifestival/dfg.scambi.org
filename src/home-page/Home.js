import React, { Component } from "react";
import UserTest from "./UserTest";
import BlogCard from "../blog-page/Blog";

class Home extends Component {
  render() {
    return (
      <div>
        <div>Home</div>
        <UserTest />
        <BlogCard />
      </div>
    );
  }
}

export default Home;
