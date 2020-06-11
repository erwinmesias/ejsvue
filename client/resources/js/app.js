import Vue from '~/vue';
import axios from 'axios';
import Hero from '~/components/Hero';

new Vue({
  el: '#app',
  components: {
    Hero
  },
  data() {
    return {
      posts: [],
      fileRecords: [],
      uploadUrl: 'https://example.com',
    }
  },
  async mounted() {
    this.$log('Log from the app.js');
    
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    this.posts = posts;
  }
})