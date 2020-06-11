const mix = require('laravel-mix');

mix.setPublicPath('client/public');

mix.webpackConfig({
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '~': __dirname + '/client/resources/js'
    }
  }
});

if (mix.inProduction()) {
  mix.version();
}

const jspath = 'js';
const csspath = 'css';

mix
  .js('client/resources/js/app.js', jspath)
  .sass('client/resources/sass/app.sass', csspath)