import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Posts from '../../components/posts/Posts'
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import "./allPosts.css"


export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation()


  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts"+search);
      console.log(res);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <div className='allPosts'>
      <Sidebar/>
        {/* <div className=''></div> */}
        <Posts posts={posts} />
    </div>
  )
}
