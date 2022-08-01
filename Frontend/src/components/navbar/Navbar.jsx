import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context, ContextProvider } from "../../context/Context";
import "./navbar.css";

export default function Navbar() {
  const {user, dispatch} = useContext(Context)

  const handleLogout = ()=> {
    dispatch({type:"LOGOUT"})
  }
  return (
    <div className="nav">
      <div className="navLeft">
        <i className="navMediaIcon fa-brands fa-twitter"></i>
        {"\u00A0"}
        <i className="navMediaIcon fa-brands fa-spotify"></i>
        {"\u00A0"}
        <i className="navMediaIcon fa-solid fa-w"></i>
      </div>
      <div className="navCenter">
        <ul className="navList">
          <li className="navListItem">
            <Link to="/" className="link">
              Anasayfa
            </Link>
          </li>
          <li className="navListItem">
            <Link to="/posts" className="link">
              Yazılarım
            </Link>
          </li>
          <li className="navListItem">
            <Link to="/" className="link">
              İletişim
            </Link>
          </li>
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
              src="https://randomuser.me/api/portraits/men/11.jpg"
              p
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
        <li className="navSearchIcon" onClick={handleLogout}>
        {user && "Çıkış Yap"}
        </li>
        </ContextProvider>}
      </div>
    </div>
    
  );
}
