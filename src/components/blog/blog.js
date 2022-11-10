import React from "react";
import "./blog.css";

import "../button/button.css";
import { blogData } from "../../data/blogData";

import { Link } from "react-router-dom";

function Blog() {
  return (
    <>
      {" "}
      <div className="card-blog-container">
        {blogData.map((item) => {
          return (
            <div class="card-blog" key={item.id}>
              <img src={item.imgUrl} alt={item.imgAlt} />
              <div class="content">
                <h2> {item.header} </h2>
                <p>
                  {" "}
                  {item.content}
                  <Link to={`/blogs/${item.id}`}>
                    <button> {item.buttonText} </button>
                  </Link>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Blog;
