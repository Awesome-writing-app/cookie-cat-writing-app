<template>
  <div id="markdown-preview" ref="markdownbox" v-html="markdownHTML" class="preview col">
  </div>
</template>


<script>
  const marked = require('marked');
  export default {
    components: { },
    props: [
      'text',
      'scroll',
    ],
    computed: {
      markdownHTML() {
        return marked(this.text) || '<p style="color:lightgray">Preview</p>';
      },
    },
    data() {
      return {
        name: 'markdown-preview',
      };
    },
    updated() {
      const divToScroll = this.$refs.markdownbox;
      console.log(divToScroll);
      divToScroll.scrollTop = this.scroll * divToScroll.scrollHeight;
      console.log(this.scroll);
    },
  };
</script>

<<style>
  .preview {
    background-color: #fff;
    width: 50%;
    padding: 2%;
    overflow: scroll;
    height: 75vh;
    margin: 5px;
  }
  .preview > p {
    padding-bottom: 10px;
  }
  li {
    padding-left: 0%;
    margin-left: 7%;
  }
</style>
