<template>
  <div class="row" id="portfolio">
    <cms-embeded-jumbotron :data="welcometext"></cms-embeded-jumbotron>
    <div class="sidebar col-3 col-md-2">
      <div v-if="global.loggedIn" class="toggle-bar row justify-content-center">
        <label for="toggle">Toggle Entry-Form</label>
        <a id="toggle" class="btn btn-secondary plus-button" v-on:click="toggleForm"><span id="button-icon" class="fa fa-chevron-right"></span></a>
      </div>
      <div class="entrylist row justify-content-center">
        Entry-Overview
        <ul class="entry-overview list-group">
          <template v-for="entry in entries">
            <li class="list-group-item">{{entry.header }}</li>
          </template>
        </ul>
      </div>
    </div>
    <div class="content col-12 col-sm-9 col-md-10 ">
      <div v-if="global.loggedIn" id="portfolio-form" class="portfolio-form row">
        <cms-portfolio-form></cms-portfolio-form>
      </div>
      <div class="portfolio-entries row">
        <div v-for="entry in entries" :key="entry.id" :id="entry.id" class="col-lg-4 col-sm-6 col-12 entryspot">
          <cms-portfolio-entry :data="entry"></cms-portfolio-entry>
          <span class="delete fa fa-trash" v-on:click="removeEntry(entry)"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import toastr from 'toastr';
  import firebase from '../utils/firebase';
  import global from '../utils/globalstate';

  import CmsPortfolioEntry from '../components/cms/CmsEmbeddedPortfolioEntry';
  import CmsPortfolioForm from '../components/cms/CmsEmbeddedPortfolioForm';
  import CmsEmbededJumbotron from '../components/cms/CmsEmbededJumbotron';

  const entriesRef = firebase.database().ref('portfolio/entries');

  export default {
    components: {
      CmsPortfolioEntry,
      CmsPortfolioForm,
      CmsEmbededJumbotron,
    },
    firebase: {
      welcometext: {
        source: firebase.database().ref('portfolio/welcometext'),
        asObject: true,
      },
      entries: entriesRef,
    },
    name: 'portfolio',
    data() {
      return {
        global,
        sitetitle: 'Portfolio',
      };
    },
    methods: {
      removeEntry: function removeEntry(entry) {
        entriesRef.child(entry['.key']).remove();
        toastr.error('Entry removed!');
      },
      toggleForm: function toggleForm() {
        const entryform = document.getElementById('portfolio-form');
        const buttonicon = document.getElementById('button-icon');
        if (entryform.style.display === 'none' || entryform.style.display === '') {
          entryform.style.display = 'block';
          buttonicon.setAttribute('class', 'fa fa-chevron-left');
        } else {
          entryform.style.display = 'none';
          buttonicon.setAttribute('class', 'fa fa-chevron-right');
        }
      },
    },
  };
</script>
<style scoped>
  .portfolio-form {
    padding: 20px;
    display: none;
  }
  /** Portfolio Entries **/
  .entryspot {
    display: flex;
  }
  .portfolio-entries {
    display: flex;
  }
  .delete {
    cursor: pointer;
    position: relative;
    left: -25px;
    top: 10px;
  }
  .delete:hover {
    color: gray;
  }
  /** sidebar **/
  .plus-button {
    width: 100%;
  }
  .toggle-bar {
    margin: 30px 0;
  }
  .entrylist {
    width: 100%;
    text-overflow: ellipsis;
  }
  .entry-overview {
    width: 150%;
    margin: 5px -10px;
  }
  #portfolio {
    display: flex;
    margin: 30px;
  }
  @media screen and (min-width: 740px) {
    .sidebar {
      display: block;
      border-right: 1px solid #ccc;
    }
    .content {
      padding-left: 25px;
    }
  }
  @media screen and (max-width: 740px) {
    .sidebar {
      display: none;
    }
  }
</style>
