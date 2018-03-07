<template>
  <div id="falltown">
    <rf-jumbotron :data="welcometext" />
    <div class="row roundimages">
      <template v-for="roundimagetext in roundimagetexts" >
        <rf-rounded-image-panel :v-key="roundimagetext.key" :data="roundimagetext" />
      </template>
    </div>
    <hr class="disrupter" />
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
    name: 'falltown',
    data() {
      return {
        welcometext: {
          sitetitle: 'Falltown - The mobile RPG',
          title: 'Falltown is a mobile RPG developed in JavaScript',
          text: 'Falltown was created in my 4th Semester in the course Labor Games which is one of the 2 major courses from my subject specialisation. There we had to build a mobile game in a bigger team, where everyone in the team would have a specific role matching a usual job in the gaming industry.' +
          '\n\nI was the \'Producer\' of our team, did the game design and also implemented some of the features. You can look up my whole contribution to the project in the Doc you can download on this page. We had to do everything by our own. Our own ideas, our own assets and sprites, our own music and so on.' +
          '\n\nThe whole project is developed as a hybrid app nested in the PhoneGap container and is implemented in JavaScript using the Phaser.io Framework. With that technology it is also possible to play the Game on Web-Browsers. It is hosted here and you can access it by clicking on the Play Button.' +
          '\n\nYou can find the whole Codebase in my Github.',
          buttons: [
            {
              href: 'https://github.com/RdFox/Falltown',
              link: 'Look up the Code',
            },
            {
              href: 'https://falltown.rotfuks.de',
              link: 'Play It Online',
            },
          ],
        },
        roundimagetexts: [
          {
            classes: 'col-md-4',
            key: 0,
            img: 'static/img/assets/lightbulb.png',
            alt: 'A lightbulb',
            title: 'The Falltown Idea Pitch',
            text: 'The first step to our project was coming up with the idea of the game and pitching it to our Prof and the whole course in a small presentation. You can look up the initial pitch here. (Only in German!)',
            download: true,
            button: 'Download the Pitch Doc',
            href: 'static/portfolio/falltown/FalltownPitch.pdf',
          },
          {
            classes: 'col-md-4',
            key: 1,
            img: 'static/portfolio/falltown/logo.png',
            alt: 'The Falltown Logo',
            title: 'The Falltown Doc',
            text: 'Parallel to the development of the Game we also needed to document everything. Here you can look up the Doc we created for the finished Mobile Game. (Only in German!)',
            download: true,
            button: 'Download the Doc',
            href: 'static/portfolio/falltown/FalltownDoku.pdf',
          },
          {
            classes: 'col-md-4',
            key: 1,
            img: 'https://cdn-de.yeeply.com/blog/wp-content/uploads/2017/04/7222fb7bcc84bbd0772974b9b9b37a69_android-police-android-app-clipart-size_1345-1600.jpeg',
            alt: 'The Android Logo',
            title: 'Falltown for Android',
            text: 'The project is developed as a hybrid App in the PhoneGap Container. With the Cloud compiling of PhoneGap we could actually pretty easy create a Version for Android, Iphone, Windowsphone and others. Here is the Android one for a start. (Only in German)',
            download: true,
            button: 'Download the APK',
            href: 'static/portfolio/falltown/FalltownRPG.apk',
          },
          {
            classes: 'col-md-6',
            key: 1,
            img: 'https://phaser.io/images/img.png',
            alt: 'The Phaser Logo',
            title: 'JS Game-Framework Phaser.io',
            text: 'We used Phaser.io as a very helpful Framework providing functions for asset-management, physical calculations and so on. It is open source and easy to learn with a great Doc.',
            button: 'Phaser.io',
            href: 'http://phaser.io/',
          },
          {
            classes: 'col-md-6',
            key: 1,
            img: 'https://phonegap.com/uploads/artwork/PhoneGap-Symbol-Black.png',
            alt: 'PhoneGap Logo',
            title: 'Mobile Container-Framework PhoneGap',
            text: 'PhoneGap is basically a Container-Framework to build Mobile-Apps with Web-Technology. It is like Cordova, only managed and further developed from Adobe. The Code is still open source and the Doc fantastic!',
            button: 'PhoneGap',
            href: 'https://phonegap.com/',
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
  .disrupter {
    margin: 40px 0;
  }
</style>
