import React from "react";
import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const publicFiles = "http://localhost:5000/images/"
  return (
    <div key= {post._id} className="post">
      {post.photo && <img className="postImg" src={publicFiles + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        {/* <span className='postDate'>{new Date(post.createdAt).toDateString()}</span> */}
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
