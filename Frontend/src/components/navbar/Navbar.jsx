import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context, ContextProvider } from "../../context/Context";
import "./navbar.css";

export default function Navbar() {
  const {user, dispatch} = useContext(Context)
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  const handleLogout = ()=> {
    dispatch({type:"LOGOUT"})
  }
  return (
    <>
    <nav className="nav">
            <button className="hamburger" onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}>
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="navLeft">
        <a href="https://twitter.com/Messallinna">
        <i className="navMediaIcon fa-brands fa-twitter"></i>
        </a>
        {"\u00A0"}
        <a href="https://open.spotify.com/user/melisatkli">
        <i className="navMediaIcon fa-brands fa-spotify"></i>
        </a>
        {"\u00A0"}
        {/* <i className="navMediaIcon fa-solid fa-w"></i> */}
      </div>
      <div className="navCenter">
        <ul className="navList">
          <li className="navListItem">
            <Link to="/" className="link">
              Anasayfa
            </Link>
          </li>
          <li className="navListItem">
            <Link to="/allPosts" className="link">
              Yazılarım
            </Link>
          </li>
          {/* <li className="navListItem">
            <Link to="/" className="link">
              İletişim
            </Link>
          </li> */}
          <li className="navListItem">
            {user ? (
              <Link to="/write" className="link">
                Post Yaz
              </Link>
            ) : (
              <link rel="stylesheet" href="" />
            )}
          </li>
        </ul>
      </div>
      <div className="navRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="navImg"
              src={user.profilePic}
              alt="user"
            />
          </Link>
        ) : (
          <ul className="navList">
            <li className="navListItem">
              <Link to="/login" className="link">
                Giriş Yap
              </Link>
            </li>
            <li className="navListItem">
              <Link to="/register" className="link">
                Kayıt Ol
              </Link>
            </li>
          </ul>
        )}
        {/* <i className="navSearchIcon fas fa-search"></i> */}
        { 
        <ContextProvider>
        <li className="navSearchIcon navList" onClick={handleLogout}>
        {user && "Çıkış Yap"}
        </li>
        </ContextProvider>}
      </div>
    </nav>
    </>
  );
}
