<template>
  <div id="esg-website">
    <cms-embeded-jumbotron :data="welcometext"></cms-embeded-jumbotron>
    <div class="row roundimages">
      <template v-for="roundimagetext in roundimagetexts" >
        <cms-embeded-round-images-text :v-key="roundimagetext.key" :data="roundimagetext"></cms-embeded-round-images-text>
      </template>
    </div>
  </div>
</template>

<script>
  import CmsEmbededJumbotron from '../../components/cms/generell/embededJumbotron';
  import CmsEmbededRoundImagesText from '../../components/cms/generell/embededRoundImageText';

  export default {
    components: {
      CmsEmbededJumbotron,
      CmsEmbededRoundImagesText,
    },
    name: 'esgWebsite',
    data() {
      return {
        welcometext: {
          sitetitle: 'E-Sports Germany e.V. Website',
          title: 'A Website like this for THE german e-sports club.',
          text: 'E-Sports Germany e.V. started locally in Heilbronn and I connected early with the club in my role as event-organizer of our IT-students representation when we had a hearthstone tournament together at our university.' +
          '\n\nAs web-dev my role was clear so I started with a companion from my courses to build up their webpage. That was the base for the Rotfuks-Template like for example this website (www.rotfuks.de) uses.' +
          '\n\nIf you want to know more about the tec used to build up the Rotfuks-Templates like the esg-website you can just look up the portfolio-entry of the Rotfuks website.' +
          '\n\nThe whole Codebase is - like always - open source and can be looked up on Github.',
          buttons: [
            {
              href: 'https://github.com/esportsgermany/website',
              link: 'Look up the Code',
            },
          ],
        },
        roundimagetexts: [
          {
            classes: 'col-md-6',
            key: 0,
            img: 'http://esportsgermany.de/static/img/logos/only_logo.png',
            alt: 'The ESG Logo',
            title: 'Look up the online Version',
            text: 'The E-Sports Germany e.V. Website is hosted online and in daily use. You can look it up via click on the button. :)',
            button: 'ESG e.V. Website',
            href: 'https://www.esportsgermany.de',
          },
          {
            classes: 'col-md-6',
            key: 1,
            img: '/static/img/logo/rotfuks_logo.png',
            alt: 'The Rotfuks Logo',
            title: 'Want to know more about the Tec?',
            text: 'The E-Sports Germany e.V. Website uses the Rotfuks-Template. If you want to know more about the Tec used for it you can just check out the Portfolio Entry of this site.',
            button: 'Rotfuks Page',
            href: '#/rotfukspage',
          },
        ],
      };
    },
  };
</script>
<style scoped>
  .roundimages {
    margin: 75px;
  }
</style>
