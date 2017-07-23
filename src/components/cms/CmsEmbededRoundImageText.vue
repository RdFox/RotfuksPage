<template>
  <div :class="data.classes + ' cms-embeded-roundimage-text'">
    <div class="row justify-content-center">
      <div class="auto">
        <img class="rounded-circle" :src="data.img" :alt="data.alt" width="140" height="140">
      </div>
    </div>
    <h2 v-if="data.title" v-html="data.title"></h2>
    <p v-if="data.text" v-html="data.text"></p>
    <p v-if="data.button">
      <b-btn variant="outline-danger" @click="buttonClick" :href="data.href">{{ data.button }}</b-btn>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'CmsEmbededText',
    props: ['data'],
    methods: {
      buttonClick() {
        const isExternal = /^(http(s?):)?\/\//.test(this.url);

        if (isExternal) {
          window.open(this.url, '_blank');
        } else {
          location.href = this.url;
        }
      },
    },
  };
</script>
<style scoped>
  .cms-embeded-roundimage-text {
    padding: 30px;
  }
  .rounded-circle {
    margin: 10px;
  }
</style>
