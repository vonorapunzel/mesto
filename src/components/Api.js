export default class Api {
  headers = {
    authorization: '4eb3e4fd-35e6-4e03-a07a-c921c4bb1bec',
    'Content-Type': 'application/json'
  }
  constructor() {
    this._url = 'https://mesto.nomoreparties.co/v1/cohort-27';
  }

  editUserProfile(data, button) {
    this._renderLoading(button, true);
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(data)
    })
      .finally(() => {
        this._renderLoading(button, false);
      }) 
  }

  getUserProfile() {
    return fetch(`${this._url}/users/me`, {
      headers: this.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
  
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  } 
  

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
  
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
  
  addNewCard(data, button) {
    this._renderLoading(button, true);
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .finally(() => {
        this._renderLoading(button, false);
      })
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: this.headers,
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
  
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  likeCard(id, method) {
    if(method == true) {
      this._method = 'PUT'
    } else {
      this._method = 'DELETE'
    }
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: this._method,
      headers: this.headers,
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
  
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  changeAvatar(data, button) {
    this._renderLoading(button, true);
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: data.link,
      })
    })
      .finally(() => {
        this._renderLoading(button, false);
      })
  }

  _renderLoading(button, isLoading) {
    if(isLoading) {
      button.textContent = 'Сохранение...';
    } else {
      button.textContent = 'Сохранить';
    }
  } 
}

