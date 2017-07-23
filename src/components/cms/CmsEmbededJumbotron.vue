<template>
  <div class="titles col-12">
    <b-jumbotron :header="data.sitetitle" :lead="data.title" >
      <p class="welcometext">{{ data.text }}</p>
      <b-btn variant="outline-danger" :href="data.href">{{data.link}}</b-btn>
    </b-jumbotron>
    <hr/>
  </div>
</template>

<script>
  export default {
    name: 'CmsEmbededJumbotron',
    props: ['data'],
  };
</script>
<style scoped>
  .jumbotron {
    background-color: #fff;
    margin: -30px 0;
  }
  .welcometext {
    white-space: pre-wrap;
  }
</style>
