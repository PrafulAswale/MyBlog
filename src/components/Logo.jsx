import React from "react";
import myBlog from "../assets/my-blog-logo.png";

function Logo({ width = "100px" }) {
  return <img src={myBlog} alt="My Blog" srcSet="" width={width} />;
}

export default Logo;
