export default class UserInfo {
  constructor(name, about, avatar) {
    this._nameUser = name;
    this._aboutUser = about;
    this._userAvatar = avatar;
  }

  getUserInfo() {
    const data = {
     name: this._nameUser.textContent,
     about: this._aboutUser.textContent
    };
    return data;
  }

  setUserInfo(name, about) {
    //принимает данные пользователя и добавляет на страницу.
    this._nameUser.textContent = name;
    this._aboutUser.textContent = about;
  }

  setUserAvatar(item){
    this._userAvatar.src = item.avatar;
  }
}