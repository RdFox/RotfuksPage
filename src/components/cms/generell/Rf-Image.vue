<template>
  <div class="rf-image row justify-content-center">
      <div class="auto">
        <a :href="data.link">
          <img class="img-fluid rf-img" :src="data.src"  :alt="data.alt"/>
        </a>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'RfImage',
    props: ['data'],
  };
</script>
<style scoped>
  .rf-img {
    width: 100%;
  }
</style>
