<template>
  <div :class="data.classes + ' rf-round-image-panel'">
    <div class="row justify-content-center">
      <div class="auto">
        <img class="rounded-circle" :src="data.img" :alt="data.alt" width="140" height="140">
      </div>
    </div>
    <h2 v-if="data.title" v-html="data.title"></h2>
    <p v-if="data.text" v-html="data.text"></p>
    <p v-if="data.button">
      <template v-if="data.download">
        <b-button variant="outline-primary" :href="data.href" download>{{ data.button }}</b-button>
      </template>
      <template v-else>
        <b-button variant="outline-danger" @click="buttonClick" :href="data.href">{{ data.button }}</b-button>
      </template>

    </p>
  </div>
</template>

<script>
  export default {
    name: 'rf-round-image-panel',
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
  .rf-round-image-panel {
    padding: 30px;
  }
  .rounded-circle {
    margin: 10px;
  }
  .btn-outline-danger {
    border-color: #dc3545;
  }

</style>
