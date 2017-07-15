<template>
  <div id="blogForm">
    <div class="row justify-content-center">
      <div class="auto">
        <h1>{{ sitetitle }}</h1><hr/>
      </div>
    </div>
    <div class="row justify-content-center blogform">
      <cms-embeded-blogform></cms-embeded-blogform>
    </div>
  </div>
</template>

<script>
  import CmsEmbededBlogform from '../components/cms/CmsEmbededBlogform';

  export default {
    components: {
      CmsEmbededBlogform,
    },
    name: 'blogform',
    data() {
      return {
        sitetitle: 'Neuen Blog erstellen',
      };
    },
  };
</script>
<style>
  .blogform {
    padding: 20px;
  }
</style>
