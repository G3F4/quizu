const sessionStorageCache = {
  get: function (key) {
    return JSON.parse(sessionStorage.getItem(key));
  },
  set: function (key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  remove: function (key) {
    sessionStorage.removeItem(key);
  },
  allKeys: function () {
    return Object.keys(sessionStorage);
  }
};

export default {
  domain: 'g3f4.eu.auth0.com',
  client_id: 'K0dlY5LnIMFbTlnWGuZc0Dy5GuKcABLN',
  audience: 'https://quizu-app.herokuapp.com/',
  cache: sessionStorageCache,
  // redirect_uri: 'http://localhost:3000/auth/callback', moved to runtime config
  // useRefreshTokens: true,
}
