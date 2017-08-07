<template>
  <div id="app">
    <rf-navbar></rf-navbar>
    <router-view></router-view>
    <rf-footer></rf-footer>
  </div>
</template>

<script>
  import toastr from 'toastr';
  import RfNavbar from './components/Rf-Navbar';
  import RfFooter from './components/Rf-Footer';

  export default {
    components: {
      RfFooter,
      RfNavbar,
    },
    name: 'app',
    created: function created() {
      toastr.options.closeButton = true;
      toastr.options.progressBar = true;
      toastr.options.timeOut = 18000;
      toastr.options.extendedTimeOut = 18000;
      toastr.info(`Please mind, that this website is still work in progress!
          Some bugs or changes may occur. Check the Release-Notes in the Blog for news if you are interested.`);
      toastr.options = {
        closeButton: false,
        progressBar: false,
        timeOut: 6000,
        extendedTimeOut: 12000,
        preventDuplicates: true,
        preventOpenDuplicates: true,
      };
    },
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
