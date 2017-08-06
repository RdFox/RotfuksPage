<template>
  <div id="blog" class="row">
    <cms-embeded-jumbotron :data="welcometext"></cms-embeded-jumbotron>
    <div class="sidebar col-12 col-md-3">
      <div class="about">
        <h4>About</h4>
        <p><i class="fa fa-wrench" aria-hidden="true"></i> My Blog is - as is the whole Homepage - still under construction. Sorry if anything (like e.g. the flavour selection) is not yet working.</p>
        <p>I am trying to get it to work as fast as possible but this is not my only project. Thanks! :)</p>
      </div>
      <div v-if="global.loggedIn" class="toggle-bar row justify-content-center">
        <label for="toggle" class="toggle-label">Toggle Blog-Form</label>
        <a id="toggle" class="btn btn-secondary plus-button" v-on:click="toggleForm"><span id="button-icon" class="fa fa-chevron-right"></span></a>
      </div>
      <b-form-fieldset id="flavours" :label="label" :description="desc">
        <b-form-checkbox v-model="tecblog" v-on:click="changeFlavour">Show Tec</b-form-checkbox>
        <b-form-checkbox v-model="eventblog" v-on:click="changeFlavour">Show Event</b-form-checkbox>
        <b-form-checkbox v-model="privateblog" v-on:click="changeFlavour">Show Private</b-form-checkbox>
      </b-form-fieldset>
    </div>
    <div class="content col-12 col-md-9">
      <div class="row justify-content-center">
        <div v-if="global.loggedIn" class="col-12" id="blogform">
          <cms-embeded-blogform></cms-embeded-blogform>
        </div>
        <div v-for="blog in blogs" :key="blog.key" :id="blog.key" class="col-12">
          <span v-if="global.loggedIn" class="delete fa fa-trash" v-on:click="removeBlog(blog)"></span>
          <cms-embeded-blog :data="blog"></cms-embeded-blog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import toastr from 'toastr';

  import CmsEmbededBlog from '../components/cms/CmsEmbededBlog';
  import CmsEmbededBlogform from '../components/cms/CmsEmbededBlogform';
  import CmsEmbededJumbotron from '../components/cms/CmsEmbededJumbotron';
  import firebase from '../utils/firebase';
  import global from '../utils/globalstate';

  const blogRef = firebase.database().ref('blog/blogs');

  export default {
    components: {
      CmsEmbededBlog,
      CmsEmbededBlogform,
      CmsEmbededJumbotron,
    },
    firebase: {
      welcometext: {
        source: firebase.database().ref('blog/welcometext'),
        asObject: true,
      },
      blogs: blogRef.orderByChild('sortkey'),
    },
    name: 'blog',
    data() {
      return {
        global,
        label: 'Choose Your Flavours:',
        desc: 'Which Category do you want to read? (Not yet functional, Sorry!)',
        selected: [],
        tecblog: true,
        eventblog: true,
        privateblog: true,
      };
    },
    methods: {
      removeBlog: function removeBlog(blog) {
        blogRef.child(blog['.key']).remove();
        toastr.error('Blog removed!');
      },
      toggleForm: function toggleForm() {
        const blogform = document.getElementById('blogform');
        const buttonicon = document.getElementById('button-icon');
        if (blogform.style.display === 'none' || blogform.style.display === '') {
          blogform.style.display = 'block';
          buttonicon.setAttribute('class', 'fa fa-chevron-left');
        } else {
          blogform.style.display = 'none';
          buttonicon.setAttribute('class', 'fa fa-chevron-right');
        }
      },
      changeFlavour: function changeFlavour() {
        toastr.error('Sorry, that is not working yet!');
      },
    },
  };
</script>
<style scoped>
  .about {
    background-color: #f5f5f5;
    padding: 10px;
  }
  .toggle-bar {
    margin: 30px 0;
  }
  .delete {
    cursor: pointer;
    position: absolute;
    right: 30px;
    top: 20px;
  }
  .delete:hover {
    color: gray;
  }
  .plus-button {
    width: 100%;
  }
  #blogform {
    display: none;
    width: 90%;
  }
  #blog {
    display: flex;
    margin: 30px;
  }
  @media screen and (min-width: 768px) {
    .sidebar {
      border-right: 1px solid #ccc;
    }
  }
  @media screen and (max-width: 768px) {
    .sidebar {
      border-bottom: 1px solid #ccc;
      margin-bottom: 25px;
    }
  }
</style>
