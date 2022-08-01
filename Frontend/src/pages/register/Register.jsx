import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)


const handleSubmit = async (e) => {
  e.preventDefault();
  setError(false)
  try {
    const res = await axios.post("/auth/register",{
      username,
      email,
      password
    })
    console.log(res)
    res.data && window.location.replace("/login")
  } catch (error) {
    setError(true)
  }

}

  
  return (
    <div className="register">
      <div className="registerWrapper">
        <span className="registerTitle">Kayıt ol</span>
        <form className="registerForm" onSubmit={handleSubmit}>
        <label>Kullanıcı Adı</label>
          <input
            type="text"
            placeholder="Kullanıcı Adı giriniz"
            className="registerInput"
            onChange={e=>setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            placeholder="Email giriniz"
            className="registerInput"
            onChange={e=>setEmail(e.target.value)}
          />
          <label>Parola</label>
          <input
            type="password"
            placeholder="Parola giriniz"
            className="registerInput"
            onChange={e=>setPassword(e.target.value)}
          />
          <button className="registerButton" type="submit">Kayıt ol</button>
        </form>
        <button className="registerLoginButton">
          <Link className="link" to="/login">
          Giriş Yap
          </Link>
        </button>
      </div>
      {error && <span style={{color: "red"}}>Bir şeyler yanlış gitti!</span>}
    </div>
  );
}
