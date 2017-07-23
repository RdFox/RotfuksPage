<template>
  <div class="carousel-item" :style="{background,height}">
    <img class="d-block img-fluid" v-if="img" :src="img" :alt="imgAlt">
    <div :class="textalign + ' carousel-caption d-md-block'">
      <p class="caption" v-if="caption" v-html="caption"></p>
      <p v-if="text" v-html="text"></p>
      <p v-if="button">
        <b-btn class="button" variant="danger" :href="href" @click="slideClick">{{ button }}</b-btn>
      </p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      img: {
        type: String,
      },
      imgAlt: {
        type: String,
      },
      caption: {
        type: String,
      },
      text: {
        type: String,
      },
      background: {
        type: String,
      },
      height: {
        type: String,
      },
      url: {
        type: String,
      },
      button: {
        type: String,
      },
      href: {
        type: String,
      },
      textalign: {
        type: String,
      },
    },
    methods: {
      slideClick() {
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
  @media screen and (min-width: 740px) {
    .carousel-item {
      font-size: 150%;
    }
    .caption {
      font-size: 250%;
    }
    .button {
      font-size: 100%;
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 740px) {
    .carousel-item {
      font-size: 110%;
    }
    .caption {
      font-size: 150%;
    }
    .button {
      font-size: 100%;
    }
  }
</style>
