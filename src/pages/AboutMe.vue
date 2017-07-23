<template>
  <div id="aboutme" class="row">
    <cms-embeded-jumbotron :data="welcometext"></cms-embeded-jumbotron>
    <div class="cv-part container">
      <template v-for="block in blocks" :v-key="block.caption.title" >
        <div class="row">
          <div :class="block.image.extclasses + ' row justify-content-center'">
            <div class="auto">
              <img :class="block.image.intclasses" :src="block.image.src" :alt="block.image.alt">
            </div>
          </div>
          <div :class="block.caption.classes">
            <h2>
              {{ block.caption.title }}
              <span class="text-muted">{{ block.caption.subtitle }}</span>
            </h2>
            <p class="text">{{ block.caption.text }}</p>
          </div>
        </div>
        <hr class="disrupter" />
      </template>
    </div>
  </div>
</template>

<script>
  import CmsEmbededJumbotron from '../components/cms/CmsEmbededJumbotron';
  import CmsEmbededImage from '../components/cms/CmsEmbededImage';

  export default {
    components: {
      CmsEmbededImage,
      CmsEmbededJumbotron,
    },
    name: 'aboutMe',
    data() {
      return {
        welcometext: {
          sitetitle: 'About Me',
          title: 'Who is this Rotfuks everybody is talking about?!',
          text: 'Well, I hope not everybody is talking about me and if so hopefully only the good parts! On this Page you can find out who I am and what I do for a living and for fun.\n\nIf you have any further questions about my person, feel free to contact and ask me in any possible way.\nMaybe write me an email?',
          href: 'mailto:dk.dkress@gmail.com',
          link: 'Email Me',
        },
        blocks: [
          {
            image: {
              extclasses: 'image col-lg-3',
              intclasses: '',
              src: './static/img/assets/profile.jpeg',
              alt: 'A picture of me',
            },
            caption: {
              classes: 'caption col-lg-9',
              title: 'My name is Dominik Kress.',
              subtitle: 'And this is my Story.',
              text: 'I am 25 years old and live in Heilbronn am Neckar which is a city in the south of Germany with about 120.000 inhabitants.' +
              '\nCurrently I\'m studying at Heilbronn University. There I started to study Medical Computer Science in 2011, but had to admit after 4 Semesters that the medical terms of this course of studies was not the field I would be happy in.' +
              '\nSo after 5 semesters of Medical Computer Science I changed my course of studies within Heilbronn University to Software Engineering for the Bachelor of Science. With the subject specialization of Games Engineering beginning in the 4th Semester I was a lot more comfortable and happy.' +
              '\nCurrently I am in the 7th Semester, finished all my courses and am working on my bachelor thesis.',
            },
          },
          {
            image: {
              extclasses: 'image col-lg-4 push-lg-8',
              intclasses: 'rounded-circle',
              src: './static/img/assets/workingfrog.jpg',
              alt: 'working frog',
            },
            caption: {
              classes: 'caption col-lg-8 pull-lg-4',
              title: 'The beginning is the most important Part of the work.',
              subtitle: 'Plato said, so when did I begin?',
              text:
              'Working was always a big part in my life. While I was in school i worked in the holidays as a cashier at the local outdoor pool or even for the city cleaning.' +
              '\nI started my first regular Job in Octobre 2009 as a bartender in a local Club. After 3 years I needed a new competition so I started in 2012 as a Service Employee in the local Cinema.' +
              '\nI worked as a cashier, in the gastronomy and cleaned the cinema halls. In 2014 I got promoted to a Service-Team-Lead. Now I had the responsibility for a small Service team and in 2015 I was again promoted to a Service-Lead having responsibility for the whole staff while working.' +
              '\n\nBut in end of 2015 I wanted to switch into IT and so I started to work for Kaufland Omnichannel International GmbH & Co.KG as a Dev in part-time.',
            },
          },
          {
            image: {
              extclasses: 'image col-lg-3',
              intclasses: 'rounded-circle',
              src: 'https://www.kaufland.de/etc/designs/kaufland/clientlib-site/frontend/img/opengraph_image_default-4030a1c7a3.png',
              alt: 'The Kaufland Logo',
            },
            caption: {
              classes: 'caption col-lg-9',
              title: 'My first Steps Working in IT!',
              subtitle: 'What I did at Kaufland IT',
              text:
              'At the start I developed a Spring Application for Vacation Planning and after that I set up automated Frontend-Testing for the online shop with Selenium and Cucumber.' +
              '\nWhen I started my internship-semester in 2016 I was introduced into the frontend-team of the shop project and started working as part of the team at new features and bugfixes. After my internship-semester I stayed and continued that work in part time level and started to work in parallel as Student Assistant for Heilbronn University.' +
              '\n\nCurrently I am working on my bachelor thesis for Kaufland Informationssysteme GmbH & Co.KG with the title:' +
              '\n\nKonzeption und Prototyping eines Public Application Programming Interface im E-Commerce am Beispiel des Onlineshops der Kaufland Omnichannel International GmbH & Co.KG',

            },
          },
          {
            image: {
              extclasses: 'image col-lg-4 push-lg-8',
              intclasses: 'rounded-circle',
              src: './static/img/assets/freetime.jpg',
              alt: 'Freetime image',
            },
            caption: {
              classes: 'caption col-lg-8 pull-lg-4',
              title: 'But work is not Everything!',
              subtitle: 'So what do I do in my leisure?',
              text:
              'I always felt the responsibility to improve the students life not only for me but all my collegues. This is why I am part of the students representation since I started to study.' +
              '\nAlso I like very much to organize Events so in 2014 I created a department for events in the students representation of the IT faculty and I hold the lead of that since. In that department we organize events such as welcoming of the new students, excursions to conferences and fairs and with the MeetIT@HHN2017 even our own fair.' +
              '\nIn 2017 I was elected to be the chairman of the students representation of the IT faculty.' +
              '\nAlso I am member of the local IT networking club Connect.IT Heilbronn-Franken e.V. helping to organize some Events.' +
              '\nSince start of 2017 I am member of a german e-sports club and help to build up that club by developing their website.' +
              '\n\nAnd last but not least: I love to read good books, watch good movies and series, listen to good music, travel a lot, go out with my friends a lot and doing sports.',
            },
          },
        ],
      };
    },
  };
</script>
<style scoped>
  .cv-part {
    margin-top: 30px;
    margin-bottom: 50px;
  }
  .disrupter {
    margin: 40px 0;
  }
  .image {
    margin: 30px 0;
  }
  .caption {
    padding: 0 50px;
  }
  .text {
    white-space: pre-wrap;
  }
  .rounded-circle {
    width: 350px;
  }
</style>
