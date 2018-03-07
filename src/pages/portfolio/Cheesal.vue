<template>
  <div id="cheesal">
    <rf-jumbotron :data="welcometext" />
    <div class="row roundimages">
      <template v-for="roundimagetext in roundimagetexts" >
        <rf-round-image-panel :v-key="roundimagetext.key" :data="roundimagetext" />
      </template>
    </div>
  </div>
</template>

<script>
  import RfJumbotron from '../../components/cms/generell/Rf-Jumbotron';
  import RfRoundImagePanel from '../../components/cms/generell/Rf-RoundImagePanel';


  export default {
    components: {
      RfJumbotron,
      RfRoundImagePanel,
    },
    name: 'cheesal',
    data() {
      return {
        welcometext: {
          sitetitle: 'Cheesal',
          title: 'Developing a game in 48 hours',
          text: 'In one of my Games Engineering courses we did a GameJam. In GameJams you have to develop a whole game in only 48 hours. A whole game means everything of the game has to be developed by you: The idea, sprites, assets, music and so on, just everything.' +
          '\n\nBecause I had some previous good experience with the JavaScript Game-Framework phaser.io I used that technology for my Game. I wanted to do some puzzle game inspired by the game Portal. So I came up with the idea of a mouse that wants to get cheese from mouse-traps (Therefore Cheesal => Cheese + Portal).' +
          '\n\nFor that you have to push blocks standing in the levels on top of the mouse trap. You can pull the blocks with the button \'e\', jump or go through mouse holes with space and walk with the arrow buttons. I wanted to keep it as simple and clean as possible.' +
          '\n\nThe endresult after the 48 hours is still a bit buggy but I want to keep the competition authentic :) You can check out the code on my Github or play the game with the buttons below.',
          buttons: [
            {
              href: 'https://github.com/RdFox/Cheesal',
              link: 'Look up the Code',
            },
            {
              href: 'https://cheesal.rotfuks.de',
              link: 'Play It Online',
            },
          ],
        },
        roundimagetexts: [
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
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrQzctCytIFwQdmRUZlk37pWo1OkRSUsUT2Qu3rP5FKSZHn69xHFkfo8',
            alt: 'The GameJolt Logo',
            title: 'The GameJam Platform',
            text: 'We did the GameJam competition on a platform called GameJolt. it\'s an easy to use GameJam Platform with a lot of good GameJam-Games from other GameJam competitors. Check it out!',
            button: 'GameJolt',
            href: 'http://gamejolt.com/games/cheesal/154549',
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
