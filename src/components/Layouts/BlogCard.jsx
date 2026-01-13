import React from "react";
import "./BlogCard.css";

const BlogCard = ({ Img1 }) => {
  return (
    <div className="blog-card-single">
      <div className="blog-image-wrapper">
        <img src={Img1} alt="Blog" className="blog-img-single" />
      </div>
      <div className="blog-content-single pt-3">
        <h3 className="blog-title-single">
          How to grow your business. How to grow your business.
        </h3>
        <p className="blog-desc-single">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
          consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
