import "./setting.css" 
import Sidebar from "../../components/sidebar/Sidebar"

export default function Setting() {
  return (
    <div className="settings" >
        <div className="settingWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Hesab Ayarları</span>
            <span className="settingsDeleteTitle">Hesabı Sil</span>
          </div>
          <form className="settingsForm">
            <label>Profil Resmi</label>
            <div className="settingsPP">
              <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>
              </label>
              <input type="file" id="fileInput" style={{display:"none"}} />
            </div>
            <label>Kullanıcı Adı</label>
          <input type="text" placeholder="Melisa" name="name" />
          <label>Email</label>
          <input type="email" placeholder="melisatekeli000@gmail.com" name="email" />
          <label>Şifre</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmit" type="submit">
            Kaydet
          </button>
          </form>
        </div>
        <Sidebar/>
    </div>
  )
}
