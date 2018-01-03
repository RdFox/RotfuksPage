<template>
  <div class="portfolio-entry row justify-content-center">
    <div class="auto block">
      <h2>{{ data.header }}</h2>
      <p class="lead">{{ data.lead }}</p>
      <div class="image">
        <img class="img-fluid rf-img" :src="data.avatar"  :alt="data.header"/>
      </div>
      <p class="text">{{ data.text }}</p>
      <template v-if="data.download">
        <b-btn download class="button" variant="outline-danger" :href="data.linkhref">{{ data.linktext }}</b-btn>
      </template>
      <template v-else>
        <b-btn class="button" variant="outline-danger" :href="data.linkhref">{{ data.linktext }}</b-btn>
      </template>
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
  .image {
    margin: 5px 20px 20px 20px;
  }
  img {
    display: block;
    margin: 0 auto;
  }
</style>
