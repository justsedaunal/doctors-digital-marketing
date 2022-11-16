import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../../data/blogData";
import "./style.css";

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  console.log(blog);

  useEffect(() => {
    if (id) {
      const data = blogData.find((item) => item.id == id);
      setBlog(data);
    }
  }, [id]);

  if (!blog) {
    return <p>blog not found</p>;
  }

  return (
    <div className="blog-container">
      <h2> {blog.blogTitle}</h2>
      <img src={blog.blogImg} alt={blog.blogImgAlt} />
      <p> {blog.blogParagraph} </p>

      <h3> {blog.blogFirstSubtitle} </h3>
      <p> {blog.blogFirstParagraph} </p>

      <h3> {blog.blogSecondSubtitle} </h3>
      <p> {blog.blogSecondParaghraph} </p>

      <h3> {blog.blogThirdSubtitle} </h3>
      <p> {blog.blogThirdParagraph} </p>

      <h3> {blog.blogFourthSubtitle} </h3>
      <p> {blog.blogFourthParagraph} </p>

      <h3> {blog.blogFifthSubtitle} </h3>
      <p> {blog.blogFifthParagraph} </p>
    </div>
  );
}

export default BlogDetail;
