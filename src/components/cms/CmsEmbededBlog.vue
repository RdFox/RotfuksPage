<template>
  <b-card>
    <b-media>
      <img slot="aside" :src="data.img">
      <h5 class="mt-0">{{ data.title }}</h5>
      <p>{{ data.toptext }}</p>
      <p class="mb-0">{{ data.bottomtext }}</p>
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
 img {
   width: 64px;
   height: 64px;
 }
</style>
