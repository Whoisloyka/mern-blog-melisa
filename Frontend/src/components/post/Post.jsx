import React from "react";
import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const publicFiles = "http://localhost:5000/images/"
  return (
    <div key= {post._id} className="post">
    <Link to={`/post/${post._id}`} className="link">

      {post.photo ? <img className="postImg" src={publicFiles + post.photo} alt="" />:
      <img className="postImg" src="https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />}
      <div className="postInfo">
        {/* <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div> */}
          <span className="postTitle">{post.title}</span>
        
        {/* <hr /> */}
        {/* <span className='postDate'>{new Date(post.createdAt).toDateString()}</span> */}
        <article>
        <p className="postDesc">{post.desc}</p>
        </article>
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      {/* <div>{post.content}</div> */}
    </Link>
    {/* <div className="postTitleBottom">{post.title}</div> */}
    </div>
  );
}
