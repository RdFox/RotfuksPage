<template>
  <div id="rf-navbar">
    <b-navbar toggleable type="inverse" variant="inverse" :fixed="fixed">

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-link class="navbar-brand" to="/">
        <img class="navbar-img" :src="brandsrc"/>
        {{ brandtitle }}
      </b-link>

      <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar v-for="navbaritem in navbaritemsleft" :key="navbaritem.title">
          <template v-if="navbaritem.type === 'dropdown'">
            <b-nav-item-dropdown :text="navbaritem.title">
              <b-nav-item v-for="sub in navbaritem.subs" :key="sub.title" :to="sub.link">{{ sub.title }}</b-nav-item>
            </b-nav-item-dropdown>
          </template>
          <template v-else>
              <b-nav-item :to="navbaritem.link">{{ navbaritem.title }}</b-nav-item>
          </template>
        </b-nav>
        <b-nav is-nav-bar class="ml-auto">
          <template v-if="global.loggedIn"><b-nav-item id="logout" to="#" v-on:click="logout">Logout</b-nav-item></template>
          <template v-else><b-nav-item id="login" to="#" v-b-modal="'rf-login-modal'">Login</b-nav-item></template>
        </b-nav>
      </b-collapse>
    </b-navbar>

    <r-f-login-modal></r-f-login-modal>
  </div>
</template>

<script>
import toastr from 'toastr';
import firebase from '../utils/firebase';
import global from '../utils/globalstate';
import RFLoginModal from './Rf-LoginModal';

export default {
  name: 'rf-navbar',
  components: {
    RFLoginModal,
  },
  data() {
    return {
      global,
      fixed: 'top',
      brandsrc: '/static/img/logo/rotfuks_logo.png',
      brandtitle: 'Rotfuks',
      navbaritemsleft: [
        {
          type: 'normal',
          title: 'About Me',
          link: '/aboutme',
        },
        {
          type: 'normal',
          title: 'Portfolio',
          link: '/portfolio',
        },
        {
          type: 'normal',
          title: 'Blog',
          link: '/blog',
        },
      ],
    };
  },
  methods: {
    logout: function logout() {
      firebase.auth().signOut().then(this.logoutSuccess).catch(this.logoutFail);
    },
    logoutSuccess: function logoutSuccess() {
      function innerAuthChange(user) {
        if (user) {
          global.login(user);
          toastr.success(`Your Login was successful.
          Welcome back!`);
        } else {
          global.logout();
          toastr.success('You logged out successfully!');
        }
      }
      firebase.auth().onAuthStateChanged(innerAuthChange);
    },
    logoutFail: function logoutFail(error) {
      toastr.error(`Sorry! Something went wrong! Errorcode: ${error.code}`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #rf-navbar {
    margin-bottom: 100px;
  }
  .navbar-img {
    height: 35px;
    width: 40px;
  }
  .navlink {
    color: red;
  }
</style>
