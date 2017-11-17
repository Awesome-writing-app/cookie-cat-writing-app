<template>
  <div> Quote of the day: {{ quote }}</div>
</template>

<script>
const quotes = [
  'You are braver than you believe, and smarter than you think.',
  'You are awesome',
  'Butts butts butts farts',
];
const newQuote = () => quotes[Math.floor(Math.random() * quotes.length)];
export default {
  data() {
    return {
      quote: newQuote(),
      name: 'inspirational-quote',
    };
  },
};
</script>

<style>

</style>

