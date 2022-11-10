import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../../data/blogData";

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

  return <div>{blog.blogTitle}</div>;
}

export default BlogDetail;
