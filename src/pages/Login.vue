<template>
  <div id="login">
    <b-tabs small card ref="tabs" v-model="tabIndex">
      <b-tab title="Login">
        I'm the first fading tab
      </b-tab>
      <b-tab title="Register">
        I'm the second tab
        <b-card>I'm the card in tab</b-card>
      </b-tab>
    </b-tabs>
    <div class="row justify-content-center">
      <div class="auto">
        <h1>{{ sitetitle }}</h1><hr/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    name: 'login',
    data() {
      return {
      };
    },
  };
</script>
<style>
  #login {
    margin-top: -50px;
    width: 200px;
  }
  .form {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 16px;
  }
</style>
