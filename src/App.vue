<template>
  <div id="app">
    <rf-navbar></rf-navbar>
    <router-view></router-view>
    <rf-footer></rf-footer>
  </div>
</template>

<script>
  import RfNavbar from './components/RF-Navbar';
  import RfFooter from './components/RF-Footer';

  export default {
    components: {
      RfFooter,
      RfNavbar,
    },
    name: 'app',
  };
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 98.1%;
}
</style>
