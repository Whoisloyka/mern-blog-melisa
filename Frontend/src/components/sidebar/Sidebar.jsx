import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./sidebar.css"

export default function Sidebar() {
  const [cats, setCats] = useState([])

  useEffect(()=>{
    const getCats = async ()=>{
      const res = await axios.get("/categories")
      setCats(res.data)
    }
    getCats()
  },[])


  return (
    <div className='sidebar'>
        <div className="sidebarItem">
          <div className="sidebarTitle">HAKKIMDA</div>
          <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, architecto? Aliquam a ipsa, quae facere deleniti dolorem assumenda delectus tempora, minus quidem quod cumque aperiam magni, modi voluptate itaque odio.</p>
        </div>
        <div className="sidebarItem">
          <div className="sidebarTitle">YAZILARIM</div>
            <ul className='sidebarList'>
              {cats.map((c)=> (
                <Link to={`/?cat=${c.name}`}className="link">
              <li className='sidebarListItem'>{c.name}</li>    
                </Link>
              ))}
          </ul>
        </div>
        <div className="sitebarItem">
          <div className="sidebarTitle">İLETİŞİM</div>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-twitter"></i>{'\u00A0'}
            <i className="sidebarIcon fa-brands fa-spotify"></i>{'\u00A0'}
            <i className="sidebarIcon fa-solid fa-w"></i>
          </div>
        </div>
    </div>
  )
}
