<template>
  <div class="portfolio-entry row justify-content-center">
    <div class="auto block">
      <h2>{{ data.header }}</h2>
      <p class="lead">{{ data.lead }}</p>
      <img class="img-fluid rf-img" :src="data.avatar"  :alt="data.header"/>
      <p class="text">{{ data.text }}</p>
      <b-btn class="button" variant="outline-danger" :href="data.linkhref">{{ data.linktext }}</b-btn>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CmsPortfolioEntry',
    props: ['data'],
  };
</script>
<style scoped>
  .portfolio-entry {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 16px;
  }
  img {
    margin: 0 0 20px 0;
  }
</style>
