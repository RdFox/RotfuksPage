<template>
  <b-form class="blogform">
    <div class="title-panel">
      <b-form-file class="file" id="file" v-model="file" choose-label="Blog-Image"></b-form-file>
      <b-form-input class="title" id="title" v-model="title" type="text" placeholder="Enter the Blog Title"></b-form-input>
    </div>
    <b-form-input textarea id="text" v-model="text" placeholder="Top Text Content"></b-form-input>
    <b-button id="submit" variant="secondary" href="">Commit Entry</b-button>
  </b-form>
</template>

<script>
  export default {
    name: 'CmsEmbededBlogform',
    props: ['data'],
  };
</script>
<style scoped>
  .blogform {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 16px;
    width: 500px;
  }

  .title-panel {
    display: flex;
  }
  .file {
    width: 40%;
  }
  .title {
    width: 60%;
  }

  #text {
    margin-top: 10px;
    height: 200px;
  }

  #submit {
    margin: 10px;
  }
</style>
