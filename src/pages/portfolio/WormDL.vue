<template>
  <div id="wormdl">
    <cms-embeded-jumbotron :data="welcometext"></cms-embeded-jumbotron>
    <div class="row roundimages">
      <template v-for="roundimagetext in roundimagetexts" >
        <cms-embeded-round-images-text :v-key="roundimagetext.key" :data="roundimagetext"></cms-embeded-round-images-text>
      </template>
    </div>
  </div>
</template>

<script>
  import CmsEmbededJumbotron from '../../components/cms/CmsEmbededJumbotron';
  import CmsEmbededRoundImagesText from '../../components/cms/CmsEmbededRoundImageText';

  export default {
    components: {
      CmsEmbededJumbotron,
      CmsEmbededRoundImagesText,
    },
    name: 'wormdl',
    data() {
      return {
        welcometext: {
          sitetitle: 'WormDL - A Snake Project',
          title: 'Revisiting an old school project developed in C++',
          text: 'This was one of my first \'bigger\' projects. I developed it in the Computer Science specialization courses doing my Abitur. There we learned to develop small projects with C++ and could choose between some smaller exercises what we wanted to develop over the schoolyear to get our final mark.' +
          '\n\nI came up with the idea of building a snake, because I really wanted to develop some easy AI-Stuff within the game. This was my first contact with developing games and developing AI, which I immediately fell in love with. :)' +
          '\n\nThe Project was built with a colleague from class and was compiled with the Borland C++ Builder.' +
          '\n\nYou can find the whole Codebase as well all the diagrams in my Github.',
          buttons: [
            {
              href: 'https://github.com/RdFox/WormDL',
              link: 'Look up the Code',
            },
          ],
        },
        roundimagetexts: [
          {
            classes: 'col-md-6',
            key: 0,
            img: 'static/portfolio/wormdl/document.png',
            alt: 'An document Logo',
            title: 'Look up the WormDL Doc',
            text: 'As Part of the school project we had to create an official documentation. You can look into it by downloading the pdf right here if you are interested in more project details. (Only in German!)',
            download: true,
            button: 'Download the Doc',
            href: 'static/portfolio/wormdl/Ausarbeitung.pdf',
          },
          {
            classes: 'col-md-6',
            key: 1,
            img: 'static/portfolio/wormdl/exelogo.png',
            alt: 'An *.exe Logo',
            title: 'Get the WormDL.exe',
            text: 'You can try out WormDL for your self. You just need a Windows System (sorry for that, but it\'s C++ :D). Download the WormDL.exe right here and try it for yourself. (Only in German!)',
            download: true,
            button: 'Download WormDL',
            href: 'static/portfolio/wormdl/WormDL.exe',
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
