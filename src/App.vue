<template>
  <div class="main">
    <div class ="header">
      <vq-header></vq-header>
    </div>
    <div class="main-content">
      <vq-quotebar :quoteCounter="quotes.length"></vq-quotebar>
      <vq-addquote :quotes="quotes"></vq-addquote>
    </div>
    <hr>    
    <div class="quote-container">
          <div  is="vq-quote"
            v-for="(quote,index) in quotes"
            :key="quote.name"
            :quoteText="quote"
            @quoteDeleted="deleteQuote(index)">   
    </div>
    </div>
    <vq-footer></vq-footer>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import Header from "./components/Header.vue";
import QuoteBar from "./components/QuoteBar.vue";
import AddQuote from "./components/AddQuote.vue";
import Footer from "./components/Footer.vue";

export default {
  data() {
    return {
      quotes: ["I hate Java Script lol kms"]
    };
  },
  components: {
    "vq-quote": Quote,
    "vq-header": Header,
    "vq-quotebar": QuoteBar,
    "vq-addquote": AddQuote,
    "vq-footer": Footer
  },
  methods: {
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  }
};
</script>

<style>
.header {
  margin: 10px 20px;
}
.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
/* ul {
  display: flex;
  column-count: 3;
  column-gap: 0;

} */

.quote-container {
  overflow: hidden;
}
.quote-container .quote {
  float: left;
  box-sizing: border-box;
  height: auto;
  width: 33%;
  border: lightgray;
  border-style: solid;
  text-align: center;
  margin-top: 5px;
  margin-right: 5px;
  word-wrap: break-word;
}
</style>
