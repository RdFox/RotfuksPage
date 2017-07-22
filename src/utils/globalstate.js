const global = {
  loggedIn: false,
  user: {},
  login: function login(user) {
    this.loggedIn = true;
    this.user = user;
  },
  logout: function logout() {
    this.loggedIn = false;
    this.user = {};
  },
};
export default global;
