import React, { Component } from "react";
import "./BlogCard.css";

class BlogCard extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="title">The latest from our blog</div>
        <div className="left-container">
          <div className="left-photo"></div>
          <div className="bottom-container">
            <div className="header-container">
              <div className="blog-author">by Christina</div>
              <div className="date">January 22, 2022</div>
            </div>
            <div className="blog-title">Disequilibrium in cinema</div>
            <div className="blog-content">
              Disequilibrium. The word that will serve as a common thread in
              (the world of) this year’s Scambi Festival is disequilibrium. It
              will be the theme for the second edition of the Festival and,
              therefore, for the second edition of Dissolvenze.
            </div>
            <div className="blog-tag">
              <div className="tag-text">Category or tags</div>
            </div>
          </div>
        </div>
        <div className="middle-container">
          <div className="middle-photo"></div>
          <div className="bottom-container">
            <div className="header-container">
              <div className="blog-author">By LEo</div>
              <div className="date">December 10, 2021</div>
            </div>
            <div className="blog-title">The Paneuretic Universe of Scambi</div>
            <div className="blog-content">
              What does “paneuretic” mean? In this article you will discover the
              philosophy ...What does “paneuretic” mean? In this article you
              will discover the philosophy...
            </div>
            <div className="blog-tag">
              <div className="tag-text">Category or tags</div>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="right-photo"></div>
          <div className="bottom-container">
            <div className="header-container">
              <div className="blog-author">By Miranda</div>
              <div className="date">December 5, 2021</div>
            </div>
            <div className="blog-title">Miranda’s exchange</div>
            <div className="blog-content">
              In Erasmus+ Training courses, new competences not only reach the
              participants, but also influence their communities and workplaces.
              Exchange means to share your perspective and to learn from one
              another.
            </div>
            <div className="blog-tag">
              <div className="tag-text">Category or tags</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogCard;
