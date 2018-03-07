<template>
  <div id="rotfukspage">
    <rf-jumbotron :data="welcometext" />
    <div class="row roundimages">
      <template v-for="roundimagetext in roundimagetexts" >
        <rf-rounded-image-panel :v-key="roundimagetext.key" :data="roundimagetext" />
      </template>
    </div>
  </div>
</template>

<script>
  import RfJumbotron from '../../components/cms/generell/Rf-Jumbotron';
  import RfRoundedImagePanel from '../../components/cms/generell/Rf-RoundImagePanel';

  export default {
    components: {
      RfJumbotron,
      RfRoundedImagePanel,
    },
    name: 'rotfukspage',
    data() {
      return {
        welcometext: {
          sitetitle: 'About This Page',
          title: 'How exactly is this Website built?!',
          text: 'This Website is built with Vue.js as Single Page Application. The Backend is provided in style of Backend as a Service (BaaS) by Googles Firebase and can be accessed via a simple REST-Api call. This website uses the cloud-hosted, realtime NoSQL Database of Firebase for saving data. Firebase also handles the user authentication of this application. For a better integration of Firebase into Vue.js this web-app also uses the framework Vuefire.' +
          '\n\nSome of the frontend components are styled via bootstrapVue which transfers the known bootstrap v4 framework to the performant vue.js framework. The messages for successful operations are built with Toastr and for some special icons Fontawesome is integrated. You can find more information about the technologies I used to built this website down below.' +
          '\n\nThis website is not yet final. There is a lot to improve, but it is only a side project, so maintaining and improving it takes two times the time. :)' +
          '\n\nYou can check out the whole Code of this Website. It is completely open source and you can find it on my github page!',
          buttons: [
            {
              href: 'https://github.com/RdFox/RotfuksPage',
              link: 'Look up the Code',
            },
          ],
        },
        roundimagetexts: [
          {
            classes: 'col-md-4',
            key: 0,
            img: 'https://vuejs.org/images/logo.png',
            alt: 'The Vue.js Logo',
            title: 'The main ingridient: Vue.js',
            text: 'Vue.js is a leightweight single page application framework for JavaScript like eg. Angular or React. It is open source, very versatile and performant and has a fast increasing fanbase. Check out the very good documentation for more information to vue.js!',
            button: 'Vue.js Doc',
            href: 'https://vuejs.org/',
          },
          {
            classes: 'col-md-4',
            key: 1,
            img: 'https://bootstrap-vue.js.org/_nuxt/img/icon.f0a8c9e.png',
            alt: 'The BootstrapVue Logo',
            title: 'Making Frontend easy: BootstrapVue',
            text: 'BootstrapVue is importing components from the 4th version of the popular framework for responsive sites and applications named Bootstrap into Vue.js. With it creating beautiful, responsive frontend components is a lot easier. It is also completely open source. Check out the Doc!',
            button: 'BootstrapVue',
            href: 'https://bootstrap-vue.js.org/',
          },
          {
            classes: 'col-md-4',
            key: 2,
            img: 'https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png',
            alt: 'The Firebase Logo',
            title: 'Backend as a Service: Google Firebase',
            text: 'Firebase is basically a bunch of Google-Services which enable you to create a web- or mobile-application with no server-side-programming. It provides a cloud-hosted, realtime NoSQL Database, user authentication, hosting, and so on. It is easy to use and has a very good Doc, check it out!',
            button: 'Google Firebase',
            href: 'https://firebase.google.com/docs/',
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
