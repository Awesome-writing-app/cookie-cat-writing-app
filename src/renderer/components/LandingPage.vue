<template>
  <div id="wrapper">
    <div id="header">
      <span class="title">
        <img id="logo" src="~@/assets/cookiecat.png" alt="cookie-cat">
        Cookie Cat Writing App!
      </span><br />
      <button v-on:click="saveDialog()">Save</button>
      <button v-on:click="openDialog()">Open</button>
    </div>
    <main>
      <div class="main col">
        <textarea v-model="text" id="main-textarea" placeholder="Start typing">
        </textarea>
      </div>
      <div v-html="markdownHTML" class="preview col">
      </div>
    </main>
    <div id="footer">
      <p>wordcount: {{wordcount}}</p>
    </div>
  </div>
</template>

<script>
  // import SystemInformation from './LandingPage/SystemInformation';
  // import InspirationalQuote from './LandingPage/InspirationalQuote';
  const { ipcRenderer } = require('electron');
  const marked = require('marked');

  export default {
    components: { },
    data() {
      return {
        text: '',
        name: 'landing-page',
        saveDialog() {
          ipcRenderer.send('save-file-dialog', this.text);
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
      markdownHTML() {
        return marked(this.text);
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

  .preview {
    background-color: white;
    width: 50%;
  }

  #wrapper {
    background:
      linear-gradient(45deg,#ffedee,#ffefdd);
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
    justify-content: center;
    align-items: center;
  }

  #header {
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
    height: 75vh;
    width: 90%;
    padding: 10px;
    resize: none;
    overflow: scroll;
  }

  #logo {
    height: auto;
    margin-bottom: 0px;
    width: 30px;
  }

  main {
    display: flex;
  }

  main > div {
    justify-content: center;
    align-items: center;
    width: 50%
  }

  .main > col {
    display: flex;
    flex-direction: column;
    width: 50%;
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

  .doc p {
    color: black;
    margin-bottom: 10px;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }

  .doc button.alt {
    color: #42b983;
    background-color: transparent;
  }
</style>
