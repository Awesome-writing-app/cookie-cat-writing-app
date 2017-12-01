<template>
  <div id="wrapper">
    <div id="header">
      <span class="title">
        <img id="logo" src="~@/assets/cookiecat.png" alt="cookie-cat">
        Cookie Cat Writing App!
      </span><br />
      <button v-on:click="saveDialog()">Save</button>
      <button v-on:click="exportDialog()">Export</button>
      <button v-on:click="openDialog()">Open</button>
    </div>
    <main>
      <div class="main col">
        <textarea v-model="text" id="main-textarea" placeholder="Start typing" v-on:scroll="(event) => setScroll(event)">
        </textarea>
      </div>
      <markdown-preview v-bind:text="text" v-bind:scroll="scroll"></markdown-preview>
    </main>
    <div id="footer">
      <p>wordcount: {{wordcount}}</p>
    </div>
  </div>
</template>

<script>
  import MarkdownPreview from './LandingPage/MarkdownPreview';
  const { ipcRenderer } = require('electron');

  export default {
    components: { MarkdownPreview },
    data() {
      return {
        text: '',
        scroll: 0,
        name: 'landing-page',
        saveDialog() {
          ipcRenderer.send('save-file-dialog', this.text);
        },
        exportDialog() {
          this.$emit('export-file-dialog', this.text);
        },
        openDialog() {
          ipcRenderer.send('open-file-dialog');
          ipcRenderer.on('here-is-text-to-open', (event, arg) => {
            this.text = arg;
          });
        },
      };
    },
    computed: {
      wordcount() {
        const match = this.text.match(/\S+/g);
        if (match) return match.length;
        return 0;
      },
    },
    methods: {
      setScroll(event) {
        this.scroll = event.target.scrollTop / event.target.scrollHeight;
      },
    },
  };

</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
  }

  #wrapper {
    background:
      linear-gradient(45deg,#ffedee,#ffefdd);
    height: 100vh;
    padding: 7px 7px;
    width: 100vw;
    justify-content: center;
    align-items: center;
  }

  main {
    display: flex;
    height: 85vh;
    width: 100%;
  }

  #header {
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #main-textarea {
    width: 100%;
    padding: 10px;
    resize: none;
    overflow: scroll;
    border: 0px;
    margin-right: 5px;
  }
  #main-textarea, #markdown-preview {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1em;
    height: 80vh;
  }

  #main-textarea:focus {
    outline: 0px;
  }

  #logo {
    height: auto;
    margin-bottom: 0px;
    width: 30px;
  }



  main > div {
    justify-content: center;
    align-items: center;
    width: 50%;
    margin-left: 5px;
    margin-right: 5px;
  }

  .title {
    color: #2c3e50;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 3px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }
</style>
