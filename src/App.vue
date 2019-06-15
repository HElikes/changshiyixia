<template>
    <div class="sm-app">
      <div class="sm-app-header">
        <SmHeader></SmHeader>
      </div>
      <div class="sm-app-main">
        <router-view></router-view>
      </div>
      <div class="sm-app-footer">
        <router-view name="footer"></router-view>
      </div>
    </div>
</template>

<script>
import SmHeader from '@/components/SmHeader'

export default {
  created () {
  },
  components: {
    SmHeader
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'iconfont';  /* project id 1231859 */
  src: url('//at.alicdn.com/t/font_1231859_h6rwf8yjzyr.eot');
  src: url('//at.alicdn.com/t/font_1231859_h6rwf8yjzyr.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1231859_h6rwf8yjzyr.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1231859_h6rwf8yjzyr.woff') format('woff'),
  url('//at.alicdn.com/t/font_1231859_h6rwf8yjzyr.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1231859_h6rwf8yjzyr.svg#iconfont') format('svg');
}
.icon {
  font-family: 'iconfont';
}
  html, body, div, span,
  h1, h2, h3, h4, h5, h6, p,
  a,
  em, img,
  small, strike, strong,
  b, u, i,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav,  section, summary,
  audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html,
  body {
    height: 100%;
  }
  .sm-app{
    height: 100%;
    display: flex;
    flex-direction: column;

    &-main {
      flex: 1;
      overflow-x: hidden;
    }

  }
</style>
