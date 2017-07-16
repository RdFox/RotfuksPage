<template>
  <div id="blog">
    <div class="sidebar">
      <div class="toggle-bar row justify-content-center">
        <label for="toggle" class="toggle-label">Toggle Blog-Form</label>
        <a id="toggle" class="btn btn-secondary plus-button" v-on:click="toggleForm"><span id="button-icon" class="fa fa-chevron-right"></span></a>
      </div>
      <b-form-fieldset id="flavours" :label="label" :description="desc">
        <b-form-checkbox v-model="tecblog" v-on:click="changeFlavour">Show Tec</b-form-checkbox>
        <b-form-checkbox v-model="eventblog" v-on:click="changeFlavour">Show Event</b-form-checkbox>
        <b-form-checkbox v-model="privateblog" v-on:click="changeFlavour">Show Private</b-form-checkbox>
      </b-form-fieldset>
    </div>
    <div class="content">
      <div class="row justify-content-center">
        <div class="auto">
          <h1>{{ sitetitle }}</h1>
          <hr/>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12 block" id="blogform">
          <cms-embeded-blogform></cms-embeded-blogform>
        </div>
        <div v-for="blog in blogs" :key="blog.key" :id="blog.key" class="col-12 block">
          <div class="blogspot">
            <cms-embeded-blog :data="blog"></cms-embeded-blog>
            <span class="delete fa fa-trash" v-on:click="removeBlog(blog)"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import toastr from 'toastr';

  import CmsEmbededBlog from '../components/cms/CmsEmbededBlog';
  import CmsEmbededBlogform from '../components/cms/CmsEmbededBlogform';
  import firebase from '../utils/firebase';

  const blogRef = firebase.database().ref('blogs');

  export default {
    components: {
      CmsEmbededBlog,
      CmsEmbededBlogform,
    },
    firebase: {
      blogs: blogRef.orderByChild('sortkey'),
    },
    name: 'blog',
    data() {
      return {
        sitetitle: 'Rotfuks\' Blog',
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
        if (blogform.style.display === 'none') {
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
<style>
  .block {
    padding: 10px;
    max-width: 1040px;
  }
  .blogspot {
    display: flex;
  }
  .toggle-bar {
    margin: 30px 0;
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
  @media screen and (min-width: 740px) {
    #blog {
      display: flex;
      margin: 30px;
    }
    .sidebar {
      width: 15%;
      margin-right: 15px;
      padding-right: 15px;
      border-right: 1px solid #ccc;
    }
    .content {
      width: 85%;
    }
  }
  @media screen and (max-width: 740px) {
    #blog {
      display: block;
      margin: 30px;
    }
    .sidebar {
      width: 100%;
      margin: 15px;
      padding: 15px;
    }
    .content {
      width: 100%;
    }
  }
  .plus-button {
    width: 100%;
  }
  #blogform {
    display: none;
    width: 90%;
  }
</style>
