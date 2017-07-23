<template>
  <div id="rf-footer">
    <hr />
    <div class="row justify-content-center">
      <div class="col-auto">
        <a class="footerlink" :href="contact.href">{{ contact.text }}</a>
        <img class="footer-img" src="/static/img/logo/rotfuks_logo.png" />
        <a class="footerlink" :href="impressum.href">{{ impressum.text }}</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'rf-footer',
    data() {
      return {
        contact: {
          text: 'Contact',
          href: 'mailto:dk.dkress@gmail.com',
        },
        impressum: {
          text: 'Impressum',
          href: '#/impressum',
        },
      };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #rf-footer {
    padding-bottom: 50px;
  }
  .footer-img {
    width: 40px;
    height: 35px;
    margin-right: 10px;
    margin-left: 10px;
  }
  .footerlink {
    color: black;
  }
  .footerlink:hover,
  .footerlink:active {
    text-decoration: none;
    color: dimgray;
  }
</style>
