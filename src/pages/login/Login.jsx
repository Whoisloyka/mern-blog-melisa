import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <form className="loginForm">
            <label>Email</label>
            <input type="text" placeholder="Email giriniz" />
            <label>Parola</label>
            <input type="text" placeholder="Parola giriniz" />
            <button className="loginButton">Giriş</button>
            <button className="loginRegisterButton">Kayıt ol</button>
        </form>

    </div>
  )
}
