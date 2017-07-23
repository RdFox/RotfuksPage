<template>
  <div id="hello">
    <cms-slider class="slider" :data="slider"></cms-slider>
    <div class="container">
      <div class="row roundimages">
        <template v-for="roundimagetext in roundimagetexts" >
          <cms-embeded-round-image-text :v-key="roundimagetext.key" :data="roundimagetext"></cms-embeded-round-image-text>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import global from '../utils/globalstate';
  import CmsSlider from '../components/cms/CmsSlider';
  import CmsEmbededRoundImageText from '../components/cms/CmsEmbededRoundImageText';

  export default {
    components: {
      CmsSlider,
      CmsEmbededRoundImageText,
    },
    name: 'hello',
    data() {
      return {
        global,
        slider: {
          height: '450px',
          background: '#777',
          width: '100%',
          interval: 6000,
          slides: [
            {
              caption: 'About Me',
              text: 'Welcome to my Page! Do you want to know who made this page? To find out more about me you can check the \'aboutMe\'-page!',
              button: 'About Me',
              href: '#/aboutme',
              textalign: 'text-left',
            },
            {
              caption: 'About This Page',
              text: 'Do you want to know more about this Webpage? Just click this button and you can find a description of what technologies were used as well as the github-link.',
              button: 'About this Page',
              href: '#/rotfukspage',
            },
            {
              caption: 'I Have A Blog!',
              text: 'You can find a lot of geeky-Tec-Stuff worth a read, tips for upcoming events in Heilbronn and maybe even some private thoughts in my Blog. Check it out!',
              button: 'My Blog',
              href: '#/blog',
              textalign: 'text-right',
            },
          ],
        },
        roundimagetexts: [
          {
            classes: 'col-md-4',
            key: 0,
            img: 'https://cdn.worldvectorlogo.com/logos/xing-icon.svg',
            alt: 'The Xing Logo',
            title: 'Do you want to get in touch?',
            text: 'If you want to get in touch with me about business stuff you can check out my Xing-Account. It is like LinkedIn. Should I get LinkedIn? I don\'t know. Is it better? \nWrite me! :)',
            button: 'My Xing',
            href: 'https://www.xing.com/profile/Dominik_Kress5?sc_o=mxb_p',
          },
          {
            classes: 'col-md-4',
            key: 1,
            img: 'https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png',
            alt: 'The Github Logo',
            title: 'Check out my Github Account',
            text: 'You can find a lot of my projects on my Github Account. I try to keep as much of my Code open-source as possible. Check it out!',
            button: 'My Github',
            href: 'https://github.com/RdFox',
          },
          {
            classes: 'col-md-4',
            key: 2,
            img: 'https://avatars0.githubusercontent.com/u/9892522?v=4&s=400',
            alt: 'The FreeCodeCamp Logo',
            title: 'Check out my FreeCodeCamp',
            text: 'FreeCodeCamp is a very good online platform to learn coding with web-technologies. You can achieve some well known certificates by solving a lot of exercises. Check out my progress there!',
            button: 'My FreeCodeCamp',
            href: 'https://www.freecodecamp.org/rdfox',
          },
        ],
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #hello {
    margin-bottom: 100px;
  }
  .slider{
    margin-top: -50px;
    margin-bottom: 50px;
  }
  .roundimages {
    margin-bottom: 75px;
  }
  .divider {
    margin: 75px 0;
  }
</style>
