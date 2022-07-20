import React from 'react'
import "./navbar.css"

export default function Navbar() {
  return (
    <div className='nav'>
        <div className="navLeft">
            <i className="navMediaIcon fa-brands fa-twitter"></i>{'\u00A0'}
            <i className="navMediaIcon fa-brands fa-spotify"></i>{'\u00A0'}
            <i className="navMediaIcon fa-solid fa-w"></i>
        </div>
        <div className="navCenter">
            <ul className='navList'>
                <li className='navListItem'>Anasayfa</li>
                <li className='navListItem'>Hakkımda</li>
                <li className='navListItem'>Yazılarım</li>
                <li className='navListItem'>İletişim</li>
                <li className='navListItem'>Çıkış</li>
            </ul>
        </div>
        <div className="navRight">
        <img
        className='navImg'
        src="https://randomuser.me/api/portraits/men/11.jpg"
        alt="user" />
        <i className='navSearchIcon fas fa-search'></i>
        </div>
    </div>
  )
}
