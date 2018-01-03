<template>
    <b-carousel controls indicators :interval="data.interval" :background="data.background" :height="data.height">
      <!-- Text slides -->
      <r-f-carousel-slide
        v-for="slide in data.slides"
        :key="slide.caption"
        :url="slide.link"
        :background="slide.background ? slide.background : data.background"
        :caption="slide.caption"
        :text="slide.text"
        :img="slide.img"
        :v-link="slide.link"
        :height="slide.height ? slide.height : data.height"
        :button="slide.button"
        :href="slide.href"
        :textalign="slide.textalign">
      </r-f-carousel-slide>
    </b-carousel>
</template>

<script>
  import RFCarouselSlide from '../../Rf-CarouselSlide';

  export default {
    name: 'CmsSlider',
    props: ['data'],
    components: {
      RFCarouselSlide,
    },
  };
</script>
<style scoped>
  .carousel-inner {
    height: 100%;
  }
</style>
