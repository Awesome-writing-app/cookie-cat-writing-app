<template>
  <div id="markdown-preview" ref="markdownbox" v-html="markdownHTML" class="preview col">
  </div>
</template>


<script>
  export default {
    components: { },
    computed: {
      markdownHTML() {
        return this.$store.getters.markdownText || '<p style="color:lightgray">Preview</p>';
      },
    },
    data() {
      return {
        name: 'markdown-preview',
      };
    },
    updated() {
      const divToScroll = this.$refs.markdownbox;
      divToScroll.scrollTop = this.$store.state.Scroll.value * divToScroll.scrollHeight;
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
    margin-left: 5px;
  }
  .preview > p {
    padding-bottom: 10px;
  }
  li {
    padding-left: 0%;
    margin-left: 7%;
  }
</style>
