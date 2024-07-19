import React from "react";
import "./Blog.css";

function Blog({
  title,
  children,
  date = new Date().toLocaleDateString(),
  copyRight = "&copy; 2024 My Blog",
}) {
  return (
    <div className="blog-container">
      <main className="blog-main">
        <article className="blog-post">
          <h2 className="post-title">{title}</h2>
          <span className="post-date">Date: {date}</span>
          <p className="post-content">{children}</p>
        </article>
      </main>
    </div>
  );
}

export default Blog;
