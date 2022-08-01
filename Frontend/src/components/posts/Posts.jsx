// import React from "react";
// import Post from "../post/Post";
// import "./posts.css";

// export default function Posts({ postss }) {
//   return (
//     <div className="posts">
//       {postss.map((p) => (
//         <Post post={p} />
//       ))}
//     </div>
//   );
// }


import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}