import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
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
              <li className='sidebarListItem'>Denemeler</li>
              <li className='sidebarListItem'>Polisiye</li>
              <li className='sidebarListItem'>Polisiye</li>
              <li className='sidebarListItem'>Polisiye</li>
              <li className='sidebarListItem'>Küçerek Hikayeler</li>
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
