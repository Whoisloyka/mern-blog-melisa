import { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const publicFiles = "http://localhost:5000/images/"
  const {user} = useContext(Context)
  const [title,setTitle] = useState("")
  const [desc,setDesc] = useState("")
  const [content,setContent] = useState("")
  const [updateMode,setUpdateMode] = useState(false)


  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title)
      setDesc(res.data.desc)
      setContent(res.data.content)
    };
    getPost();
  }, [path]);
  

  const handleDelete = async() => {
    try {
      await axios.delete(`/posts/${post._id}`,{data:{username:user.username},})
      window.location.replace("/")
    } catch (error) {
      
    }
  }

  const handleUpdate = async (e) => {
    try {
      await axios.put(`/posts/${post._id}`,
      {username:user.username,title,desc},)
      window.location.reload("/")
    } catch (error) {
      
    }
  }



  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImg" src={publicFiles + post.photo} alt="" />
        )}{
          updateMode ? <input type="text" value={title} autoSave className="singlePostTitleInput" onChange={(e)=>setTitle(e.target.value)}/> : (
            <h1 className="singlePostTitle">
            {post.title}
            {post.username === user?.username &&
            (<div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit" onClick={()=>setUpdateMode(true)}></i>
              <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
            </div>)
            }
          </h1>
          )
        }

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: 
            <Link to={`/?user=${post.username}`} className='link'>
            <b>{post.username}</b>
            </Link>
          </span>
          {/* <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Melisa Tekeli
              </Link>
            </b>
          </span> */}
          <span className="singlePostDate">1 gün önce</span>
        </div>
        {updateMode ? <textarea className="singlePostDescInput" value={desc} onChange={(e)=>setDesc(e.target.value)}/> :
        (<p className="singlePostDesc">{post.desc}</p>)
        }{
          updateMode ? <textarea className="singlePostContentInput" value={content} onChange={(e)=>setContent(e.target.value)}/> :
          <div className="singlePostContent">{post.content}</div> 
        }
        {
        updateMode ?  
        <button className="singlePostButton" onClick={handleUpdate}>Güncelle</button>:(<span></span>)
        }
      </div>
    </div>
  );
}
