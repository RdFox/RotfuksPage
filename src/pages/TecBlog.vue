<template>
  <div id="tecBlog">
    <div class="row justify-content-center">
      <div class="auto">
        <h1>{{ sitetitle }}</h1><hr/>
      </div>
    </div>
    <div class="row">
      <div v-for="cmsblock in cmsblocks" :key="cmsblock.id" :id="cmsblock.id" :class="cmsblock.classes">
        <cms-embeded-blog :data="cmsblock.content"></cms-embeded-blog>
      </div>
    </div>
  </div>
</template>

<script>
  import CmsEmbededBlog from '../components/cms/CmsEmbededBlog';
  import CmsEmbededBlogform from '../components/cms/CmsEmbededBlogform';

  export default {
    components: {
      CmsEmbededBlog,
      CmsEmbededBlogform,
    },
    name: 'tecblog',
    data() {
      return {
        sitetitle: 'Rotfuks\' Tec-Blog',
        cmsblocks: [
          {
            id: 'firstblog',
            classes: 'col-12 block',
            content: {
              title: 'First Blog!',
              img: 'static/img/logo/rotfuks_logo.png',
              toptext: 'Hey Leute! Das ist mein aller erster Blog so frikifrikifakkit so vong qualität her das ist nur ein testestetetasjiahjs ojaosjd iajsdo jasod oajsdop jasodj opasjd asd sd asd ashdioasjdi jasiodj aisjd ioajsdio jaisjd iasjdijrimcaidjamiosdc',
              bottomtext: 'asidj ioasjdisamdicwiadj iawjwd ijwnoivfoiegjno rehgprehoaihp iehpwnf aiwfe hawhef hewnfphn ihvalshfwiu hiföohqfioha rgah enwiofn iwhefnio hwfihweihfio ewhfweonif iwefhn iwhefoiwhefi hnewin iwiefhn iwehfi ehwfi hewif newf iwhefn ihfweifhi whenfio',
            },
          },
          {
            id: 'firstblog',
            classes: 'col-12 block',
            content: {
              title: 'First Blog!',
              img: 'static/img/assets/profile.jpeg',
              toptext: 'Hey Leute! Das ist mein aller erster Blog so frikifrikifakkit so vong qualität her das ist nur ein testestetetasjiahjs ojaosjd iajsdo jasod oajsdop jasodj opasjd asd sd asd ashdioasjdi jasiodj aisjd ioajsdio jaisjd iasjdijrimcaidjamiosdc',
              bottomtext: 'asidj ioasjdisamdicwiadj iawjwd ijwnoivfoiegjno rehgprehoaihp iehpwnf aiwfe hawhef hewnfphn ihvalshfwiu hiföohqfioha rgah enwiofn iwhefnio hwfihweihfio ewhfweonif iwefhn iwhefoiwhefi hnewin iwiefhn iwehfi ehwfi hewif newf iwhefn ihfweifhi whenfio',
            },
          },
        ],
      };
    },
  };
</script>
<style>
  #tecBlog {
    margin: 30px;
  }
  .block {
    padding: 10px;
  }
</style>
