<template>
  <div id="rf-navbar">
    <b-navbar toggleable type="light" variant="faded" :fixed="fixed">

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
        <b-nav is-nav-bar class="ml-auto" v-for="navbaritem in navbaritemsright" :key="navbaritem.title">
          <template v-if="navbaritem.type === 'dropdown'">
            <b-nav-item-dropdown :text="navbaritem.title" :v-for="sub in navbaritem.subs">
              <b-nav-item :to="sub.link">{{ sub.title }}</b-nav-item>
            </b-nav-item-dropdown>
          </template>
          <template v-else>
            <b-nav-item :to="navbaritem.link">{{ navbaritem.title }}</b-nav-item>
          </template>
        </b-nav>

        </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    name: 'rf-navbar',
    data() {
      return {
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
        navbaritemsright: [
          {
            type: 'normal',
            title: 'Login',
            link: '/login',
          },
        ],
      };
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
</style>
