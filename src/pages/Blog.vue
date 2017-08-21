<template>
  <div id="blog" class="row">
    <cms-embeded-jumbotron :data="welcometext"></cms-embeded-jumbotron>
    <div class="col-12">
      {{ filteredBlogs }}
    </div>
    <div class="sidebar col-12 col-md-3">
      <div class="about">
        <h4>About</h4>
        <p><i class="fa fa-heart-o" aria-hidden="true"></i> If you like a Blog Entry you can now 'Heart' him. And you can not only heart once but as often as you like - because sometimes something is just 3 hearts good. :D</p>
        <p>With that system you can now take influence and show me directly which kind of content you'd like to see more on my blog. This is part of my feedback-plan, where's also a comment function planned. So have fun participating! :)</p>
      </div>
      <div v-if="global.loggedIn" class="toggle-bar row justify-content-center">
        <label for="toggle" class="toggle-label">Toggle Blog-Form</label>
        <a id="toggle" class="btn btn-secondary plus-button" v-on:click="toggleForm"><span id="button-icon" class="fa fa-chevron-right"></span></a>
      </div>
      <b-form-fieldset id="flavours" :label="label" :description="desc">
        <b-form-checkbox v-model="tecblog">Show Tec</b-form-checkbox>
        <b-form-checkbox v-model="eventblog">Show Event</b-form-checkbox>
        <b-form-checkbox v-model="privateblog">Show Private</b-form-checkbox>
      </b-form-fieldset>
    </div>
    <div class="content col-12 col-md-9">
      <div class="row justify-content-center">
        <div v-if="global.loggedIn" class="col-12" id="blogform">
          <cms-embeded-blogform></cms-embeded-blogform>
        </div>
          <div v-for="blog in filteredBlogs" :key="blog.keylink" :id="blog.keylink" class="col-12">
            <div class="delete">
              <span>{{ blog.open.votes }}</span>
              <span class="fa fa-heart-o" v-on:click="upvote(blog)"></span>
              <span v-if="global.loggedIn" class="fa fa-trash" v-on:click="remove(blog)"></span>
            </div>
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
        desc: 'Which Category do you want to read?',
        selected: [],
        tecblog: true,
        eventblog: true,
        privateblog: true,
        currentPage: 0,
      };
    },
    created: function created() {
      this.tecblog = false;
      this.eventblog = false;
      this.privateblog = false;
      this.tecblog = true;
      this.eventblog = true;
      this.privateblog = true;
    },
    computed: {
      filteredBlogs: {
        cache: false,
        get() {
          const blogs = {};
          const tec = this.tecblog;
          const event = this.eventblog;
          const priv = this.privateblog;
          blogRef.orderByChild('sortkey').once('value', (snapshot) => {
            snapshot.forEach((childSnapshot) => {
              const childKey = childSnapshot.key;
              const childData = childSnapshot.val();
              if ((childData.category === 'tec' && tec) ||
                (childData.category === 'event' && event) ||
                (childData.category === 'personal' && priv)) {
                blogs[childKey] = childData;
              }
            });
          });
          // eslint-disable-next-line
          console.log(blogs);
          toastr.success('computed!');
          return blogs;
        },
      },
    },
    methods: {
      remove: function remove(blog) {
        blogRef.child(blog['.key']).remove();
        toastr.error('Blog removed!');
      },
      upvote: function upvote(update) {
        blogRef.child(update['.key']).child('open').transaction((open) => {
          if (open) {
            // eslint-disable-next-line
            open.votes++;
          }
          return open;
        });
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
  .delete > span:hover {
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
