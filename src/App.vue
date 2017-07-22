<template>
  <div id="app">
    <rf-navbar></rf-navbar>
    <router-view></router-view>
    <rf-footer></rf-footer>
  </div>
</template>

<script>
  import RfNavbar from './components/Rf-Navbar';
  import RfFooter from './components/Rf-Footer';

  export default {
    components: {
      RfFooter,
      RfNavbar,
    },
    name: 'app',
  };
</script>

<style>
  body{
    overflow-x:hidden;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
  }
</style>
