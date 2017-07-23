<template>
  <b-card>
    <b-media>
      <div slot="aside">
        <img :src="data.avatar">
        <br/><br/>
        <p>Postet on:<br/>
        {{ data.date }}</p>
      </div>
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
   width: 100px;
   height:100px;
 }
 .text {
   white-space: pre-wrap;
 }
</style>
