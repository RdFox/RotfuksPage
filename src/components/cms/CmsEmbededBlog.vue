<template>
  <b-card>
    <b-media>
      <img slot="aside" :src="data.avatar">
      <h5 class="mt-0">{{ data.title }}</h5>
      <p class="text">{{ data.text }}</p>
    </b-media>
  </b-card>
</template>

<script>
  export default {
    name: 'CmsEmbededBlog',
    props: ['data'],
  };
</script>
<style scoped>
  .card {
    width: 100%;
  }
 img {
   width: 64px;
   height: 64px;
 }
 .text {
   white-space: pre-wrap;
   word-wrap: break-word;
 }
</style>
