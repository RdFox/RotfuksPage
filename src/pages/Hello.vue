<template>
  <div class="hello">
    {{ user }}


    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  </div>
</template>

<script>
import toastr from 'toastr';
import firebase from '../utils/firebase';

const hello = {
  name: 'hello',
  data() {
    return {
      user: false,
    };
  },
  methods: {
  },
};
firebase.auth().onAuthStateChanged((firebaseUser) => {
  if (firebaseUser) {
    hello.user = true;
    toastr.success(`Hello State Changed!
    ${firebaseUser.email}
    ${hello.user}`);
    hello.$forceUpdate();
  } else {
    this.data.user = false;
  }
});

export default hello;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    margin: 30px;
  }
</style>
