<template>
  <form class="blogform col-12" v-on:submit.prevent="addBlog">
    <div class="title-panel">
      <b-form-input class="avatar" id="avatar" v-model="newBlog.avatar" type="text" placeholder="Enter an Imagelink"></b-form-input>
      <b-form-input class="title" id="title" v-model="newBlog.title" type="text" placeholder="Enter the Blog Title"></b-form-input>
    </div>
    <b-form-input textarea id="text" v-model="newBlog.text" placeholder="Enter the Text Content"></b-form-input>
    <div class="title-panel">
      <b-form-select class="dropdown" v-model="newBlog.category" :options="options" />
      <input type="submit" class="btn btn-secondary submit" value="Add Blog!"/>
    </div>
  </form>
</template>

<script>
  import toastr from 'toastr';
  import firebase from '../../utils/firebase';
  import timeStamp from '../../utils/timestamp';

  const blogRef = firebase.database().ref('blog/blogs');

  export default {
    name: 'CmsEmbededBlogform',
    props: ['data'],
    data() {
      return {
        options: [
          {
            text: 'Tec-Blog',
            value: 'tec',
          },
          {
            text: 'Event-Blog',
            value: 'event',
          },
          {
            text: 'Personal-Blog',
            value: 'personal',
          },
        ],
        newBlog: {
          avatar: '',
          title: '',
          text: '',
          category: 'tec',
        },
      };
    },
    methods: {
      addBlog: function addBlog() {
        if (this.newBlog.title && this.newBlog.text) {
          this.newBlog.date = timeStamp();
          this.newBlog.sortkey = (-1 * Date.now());
          blogRef.push(this.newBlog);
          this.newBlog.avatar = '';
          this.newBlog.title = '';
          this.newBlog.text = '';
          toastr.success('Blog added!');
        } else {
          toastr.warning('Please fill out at least Title and Text!');
        }
      },
    },
  };

</script>
<style scoped>
  .blogform {
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
    .avatar,
    .title {
      width: 50%;
    }
    .dropdown {
      width: 70%;
    }
    .submit {
      width: 30%;
    }
  }
</style>
