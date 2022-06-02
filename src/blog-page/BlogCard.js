import React, { Component } from "react";
import "./BlogCard.css";

class BlogCard extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="top-container"></div>
        <div className="bottom-container">
          <div className="header-container">
            <div className="blog-author">by Christina</div>
            <div className="date">January 22, 2022</div>
          </div>
          <div className="blog-title">Disequilibrium in cinema</div>
          <div className="blog-content">
            Disequilibrium. The word that will serve as a common thread in (the
            world of) this year’s Scambi Festival is disequilibrium. It will be
            the theme for the second edition of the Festival and, therefore, for
            the second edition of Dissolvenze.
          </div>
          <div className="blog-tag">
            <div className="tag-text">Category or tags</div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogCard;
