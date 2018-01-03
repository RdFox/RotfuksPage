<template>
  <div class="blog-entry">
    <div class="row justify-content-center title-segment">
      <div class="col-auto image">
        <img :src="data.avatar">
      </div>
      <div class="col-auto title-col align-self-center">
        <p class="title">{{ data.title }}</p>
        <p class="posted">Posted on: {{ data.date }}</p>
      </div>
    </div>
    <div class="text" v-html="compiledMarkdown"></div>
    <div class="row justify-content-center">
      <b-btn variant="outline-danger" :href="'#/blogdetail?blog=' + data.keylink">Read More</b-btn>
    </div>
  </div>
</template>

<script>
  import marked from 'marked';

  export default {
    name: 'CmsEmbededBlog',
    props: ['data'],
    computed: {
      compiledMarkdown: function compiledMarkdown() {
        return marked(this.data.text, { sanitize: true });
      },
    },
  };
</script>
<style scoped>
  .blog-entry {
    border: 1px solid #ccc;
    border-radius: 16px;
    padding: 20px;
    margin: 10px 0;
    width: 100%;
  }
  img {
    max-width: 100px;
  }
  .text {
    max-height: 500px;
    margin-bottom: -20px;
    overflow:hidden;
    text-overflow: ellipsis;
    background: -webkit-linear-gradient(#000, #eee);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .title-segment {
    margin: 0 0 20px;
  }
  .image {
    margin: 0 20px 20px;
  }
  .title-col {
    max-width: 100%;
  }
  .title {
    font-size: 200%;
    margin-bottom: 5px;
    line-height: 90%;
  }
  .posted {
    font-size: 75%;
    font-style: italic;
  }
</style>
