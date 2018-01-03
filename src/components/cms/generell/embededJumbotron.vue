<template>
  <div class="titles col-12">
    <b-jumbotron :header="data.sitetitle" :lead="data.title" >
      <p class="welcometext">{{ data.text }}</p>
      <div class="buttons">
        <template v-for="button in data.buttons" :v-key="button.link">
          <b-btn class="button" variant="outline-danger" :href="button.href">{{button.link}}</b-btn>
        </template>
      </div>
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
  .buttons {
    display: inline-block;
  }
  .button {
    margin-right: 20px;
  }
</style>
