<template>
  <div id="blog" class="row">
    {{ global.admin }}
    <rf-jumbotron :data="welcometext" />
    <div class="sidebar col-12 col-md-3">
      <div class="about">
        <h4>About</h4>
        <p><i class="fa fa-heart-o" aria-hidden="true"></i> If you like a Blog Entry you can now 'Heart' him. And you can not only heart once but as often as you like - because sometimes something is just 3 hearts good. :D</p>
        <p>Also you can now comment on Blog-Entrys in the Entry-Detail page. You just need to register or login if you already registered. So have fun participating! :)</p>
      </div>
      <div v-if="global.admin" class="toggle-bar row justify-content-center">
        <label for="toggle" class="toggle-label">Toggle Blog-Form</label>
        <a id="toggle" class="btn btn-secondary plus-button" v-on:click="toggleForm"><span id="button-icon" class="fa fa-chevron-right"></span></a>
      </div>
      <b-form-group id="flavours" :label="label" :description="desc">
        <b-form-checkbox-group name="flavour1" v-model="filter" :options="options">
        </b-form-checkbox-group>
      </b-form-group>
    </div>
    <div class="content col-12 col-md-9">
      <div class="row justify-content-center">
        <div v-if="global.admin" class="col-12" id="blogform">
          <blog-form></blog-form>
        </div>
          <div v-for="blog in filteredBlogs" :key="blog.keylink" :id="blog.keylink" class="col-12">
            <div class="delete">
              <span>{{ blog.open.votes }}</span>
              <span class="fa fa-heart-o" v-on:click="upvote(blog)"></span>
              <span v-if="global.admin" class="fa fa-trash" v-on:click="remove(blog)"></span>
            </div>
            <blog-entry :data="blog" />
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import toastr from 'toastr';

  import firebase from '../utils/firebase';
  import global from '../utils/globalstate';

  import BlogEntry from '../components/cms/blog/blogEntry';
  import BlogForm from '../components/cms/blog/blogForm';
  import RfJumbotron from '../components/cms/generell/Rf-Jumbotron';

  const blogRef = firebase.database().ref('blog/blogs');

  export default {
    components: {
      BlogEntry,
      BlogForm,
      RfJumbotron,
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
        filter: ['tec', 'event', 'personal'],
        options: [
          { text: 'Show Tec', value: 'tec' },
          { text: 'Show Event', value: 'event' },
          { text: 'Show Private', value: 'personal' },
        ],
        currentPage: 0,
      };
    },
    computed: {
      filteredBlogs() {
        return this.blogs.filter(blog => this.filter.includes(blog.category));
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
