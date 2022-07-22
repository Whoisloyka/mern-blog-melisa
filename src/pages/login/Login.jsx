import "./login.css"

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Giriş Yapınız</span>
        <form className="loginForm">
            <label>Email</label>
            <input type="text" placeholder="Email giriniz" className="loginInput" />
            <label>Parola</label>
            <input type="text" placeholder="Parola giriniz" className="loginInput"/>
            <button className="loginButton">Giriş</button>
        </form>
        <button className="loginRegisterButton">Kayıt Ol</button>
    </div>
  )
}
