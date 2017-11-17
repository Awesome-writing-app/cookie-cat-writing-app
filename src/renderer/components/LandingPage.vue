<template>
  <div id="wrapper">
    <main>
      <div class="main-col">
        <img id="logo" src="~@/assets/cookiecat.png" alt="cookie-cat">
        <span class="title">
          Cookie Cat Writing App!
        </span>
        <inspirational-quote></inspirational-quote>
        <textarea v-model="text" id="main-textarea" placeholder="Start typing"></textarea>
      <p>wordcount: {{wordcount}}</p>
      <p>text: {{text}} </p>
      </div>

    </main>
  </div>
</template>

<script>
  // import SystemInformation from './LandingPage/SystemInformation';
  import InspirationalQuote from './LandingPage/InspirationalQuote';

  export default {
    components: { InspirationalQuote },
    data() {
      return {
        text: '',
        name: 'landing-page',
        methods: {
          open(link) {
            this.$electron.shell.openExternal(link);
          },
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
    padding: 60px 80px;
    width: 100vw;
  }

  #main-textarea {
    height: 50vh;
    width: 90vw;
    padding: 10px;
  }

  #logo {
    height: auto;
    margin-bottom: 10px;
    width: 150px;
    resize: none;
    overflow: scroll;
  }

  main {
    display: flex;
  }

  main > div {
    justify-content: center;
    align-items: center;
  }

  .main-col {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
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
