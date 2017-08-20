<template>
  <div id="blogdetail">
    <div class="blog-entry">
      <div class="delete">
        <span>{{ global.activeblog.open.votes }}</span>
        <span class="fa fa-heart-o" v-on:click="upvote(blog)"></span>
      </div>
      <div class="row justify-content-center title-segment">
        <div class="col-auto image">
          <img :src="global.activeblog.avatar">
        </div>
        <div class="col-auto title-col align-self-center">
          <p class="title">{{ global.activeblog.title }}</p>
          <p class="posted">Postet on: {{ global.activeblog.date }}</p>
        </div>
      </div>
      <div class="text" v-html="compiledMarkdown"></div>
      <div class="row justify-content-center">
        <b-btn variant="outline-danger" href="#/blog">Back</b-btn>
      </div>
    </div>
  </div>
</template>

<script>
  import marked from 'marked';
  import global from '../utils/globalstate';
  import firebase from '../utils/firebase';

  const blogsRef = firebase.database().ref('blog/blogs/');

  export default {
    components: {
    },
    name: 'blogdetail',
    data() {
      return {
        global,
      };
    },
    computed: {
      compiledMarkdown: function compiledMarkdown() {
        return marked(global.activeblog.text, { sanitize: true });
      },
    },
    beforeCreate: function beforeCreate() {
      function gup(name, url) {
        // eslint-disable-next-line
        const newName = name.replace(/[\[]/,'\\\[').replace(/[\]]/,'\\\]');
        // eslint-disable-next-line
        const regexS = '[\\?&]' + newName +'=([^&#]*)';
        const regex = new RegExp(regexS);
        const results = regex.exec(url);
        return results === null ? null : results[1];
      }
      function successCallback(snap) {
        // eslint-disable-next-line
        console.log(snap.val(), global.activeblog);
        global.activeblog = snap.val();
      }
      blogsRef.child(gup('blog', document.location.href)).once('value', successCallback);
    },
    methods: {
      upvote: function upvote() {
        blogsRef.child(global.activeblog.keylink).child('open').transaction((open) => {
          if (open) {
            // eslint-disable-next-line
            open.votes++;
            global.activeblog.open.votes = open.votes;
          }
          return open;
        });
      },
    },
  };
</script>
<style scoped>
  #blogdetail {
    margin-top: -30px;
    display: flex;           /* establish flex container */
    flex-direction: column;  /* make main axis vertical */
    justify-content: center; /* center items vertically, in this case */
    align-items: center;     /* center items horizontally, in this case */
  }
  .blog-entry {
    border: 1px solid #ccc;
    border-radius: 16px;
    padding: 20px;
    margin: 30px;
    max-width: 1024px;
  }
  img {
    max-width: 100px;
  }
  .title-segment {
    margin: 0 0 20px;
  }
  .image {
    margin: 0 20px 20px;
  }
  .title-col {
    max-width: 100%;
  }
  .title {
    font-size: 200%;
    margin-bottom: 5px;
    line-height: 90%;
  }
  .posted {
    font-size: 75%;
    font-style: italic;
  }
  .delete {
    cursor: pointer;
    position: relative;
    text-align: right;
    margin-bottom: -15px;
  }
  .delete > span:hover {
    color: gray;
  }
</style>
