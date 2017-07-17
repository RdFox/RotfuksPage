<template>
  <div id="portfolio">
    <div class="sidebar">
      <div :v-if="user !== false" class="toggle-bar row justify-content-center">
        {{ user }}
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
    <div class="content">
      <div class="row justify-content-center">
        <div class="auto">
          <h1>{{ sitetitle }}</h1><hr/>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="auto block">
          <h4 class="mt-0">{{ welcometext.title }}</h4>
          <p class="welcometext">{{ welcometext.text }}</p>
        </div>
      </div>
      <div id="portfolio-form" class="portfolio-form row">
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

  import CmsPortfolioEntry from '../components/cms/CmsEmbeddedPortfolioEntry';
  import CmsPortfolioForm from '../components/cms/CmsEmbeddedPortfolioForm';

  const entriesRef = firebase.database().ref('portfolio/entries');

  export default {
    components: {
      CmsPortfolioEntry,
      CmsPortfolioForm,
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
        user: firebase.auth().currentUser,
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
        if (entryform.style.display === 'none') {
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
<style>
  .block {
    padding: 10px;
  }
  .welcometext {
    white-space: pre-wrap;
  }
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
  .entry-overview {
    width: 100%;
    margin: 5px 15px;
  }
  @media screen and (min-width: 740px) {
    #portfolio {
      display: flex;
      margin: 30px;
    }
    .sidebar {
      display: block;
      width: 15%;
      margin-right: 15px;
      padding-right: 15px;
      border-right: 1px solid #ccc;
    }
    .content {
      width: 85%;
      margin-left: 30px;
    }
  }
  @media screen and (max-width: 740px) {
    #portfolio {
      display: block;
      margin: 30px;
    }
    .sidebar {
      display: none;
    }
    .content {
      width: 100%;
    }
  }
</style>
