<template>
  <form class="entryform col-12" v-on:submit.prevent="addEntry">
    <div class="title-panel">
      <b-form-input class="header" id="header" v-model="newEntry.header" type="text" placeholder="Enter the Entry Header"></b-form-input>
      <b-form-input class="lead" id="lead" v-model="newEntry.lead" type="text" placeholder="Enter the Entry Lead"></b-form-input>
    </div>
    <b-form-input textarea id="text" v-model="newEntry.text" placeholder="Enter the Text Content"></b-form-input>
    <div class="title-panel">
      <b-form-input class="linkhref" id="linkhref" v-model="newEntry.linkhref" type="text" placeholder="Enter an Linkhref"></b-form-input>
      <b-form-input class="linktext" id="linktext" v-model="newEntry.linktext" type="text" placeholder="Enter an Linktext"></b-form-input>
    </div>
    <div class="title-panel">
      <b-form-input class="avatar" id="avatar" v-model="newEntry.avatar" type="text" placeholder="Enter an Imagelink"></b-form-input>
      <input type="submit" class="btn btn-secondary submit" value="Add Entry!"/>
    </div>
  </form>
</template>

<script>
  import toastr from 'toastr';
  import firebase from '../../utils/firebase';

  const entryRef = firebase.database().ref('portfolio/entries');

  export default {
    name: 'CmsEmbededPortfolioForm',
    props: ['data'],
    data() {
      return {
        newEntry: {
          header: '',
          lead: '',
          text: '',
          linkhref: '',
          linktext: '',
          avatar: '',
        },
      };
    },
    methods: {
      addEntry: function addEntry() {
        if (this.newEntry.header && this.newEntry.text) {
          entryRef.push(this.newEntry);
          this.newEntry.header = '';
          this.newEntry.lead = '';
          this.newEntry.text = '';
          this.newEntry.linkhref = '';
          this.newEntry.linktext = '';
          this.newEntry.avatar = '';
          toastr.success('Entry added!');
        } else {
          toastr.warning('Please fill out at least Header and Text!');
        }
      },
    },
  };

</script>
<style scoped>
  .entryform {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 16px;
  }
  #text {
    margin-top: 10px;
    height: 200px;
  }
  @media screen and (min-width: 480px) {
    .title-panel {
      display: flex;
    }
    .linkhref,
    .linktext,
    .header,
    .lead {
      width: 50%;
    }
    .avatar {
      width: 70%;
    }
    .submit {
      width: 30%;
    }
  }
</style>
