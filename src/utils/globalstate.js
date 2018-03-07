import firebase from './firebase';

const global = {
  loggedIn: false,
  admin: false,
  user: {},
  activeblog: {
    text: '',
    open: {
      votes: 0,
    },
  },
  login: function login(user) {
    // eslint-disable-next-line
    console.log("foo");
    firebase.database().ref(`admin/${user.uid}`)
      .once('value', (snapshot) => {
        // eslint-disable-next-line
        console.log('Meeeeeh' + snapshot);
      });
    this.loggedIn = true;
    this.user = user;
  },
  logout: function logout() {
    this.loggedIn = false;
    this.admin = false;
    this.user = {};
  },
};
export default global;
