import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods:{
    addQuote(quoteCounter,quoteText){
      this.$emit("quoteAdded",quoteCounter,quoteText);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
