import React, { Component } from "react";
import "./Home.css";
import Family from "../family-page/family";
import BlogCard from "../blog-page/Blog";
import Values from "../values-page/Values";
import Partners from "../partners-page/partners";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="mainhome-container">
          <Family />
          <BlogCard />
          <Values />
          <Partners />
        </div>
      </div>
    );
  }
}

export default Home;
