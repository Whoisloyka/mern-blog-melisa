import "./register.css"

export default function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
      <span className="registerTitle">Kayıt ol</span>
        <form className="registerForm">
            <label>Email</label>
            <input type="text" placeholder="Email giriniz" className="registerInput" />
            <label>Kullanıcı Adı</label>
            <input type="text" placeholder="Kullanıcı Adı giriniz" className="registerInput" />
            <label>Parola</label>
            <input type="password" placeholder="Parola giriniz" className="registerInput"/>
            <button className="registerButton">Kayıt ol</button>
        </form>
        <button className="registerLoginButton">Giriş Yap</button>
        </div>
    </div>
  )
}
