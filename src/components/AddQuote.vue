<template>
    <div class="addquote center">
        <p>Quote</p>
        <textarea v-model="defaultText" placeholder="Insert Quote Here"></textarea>
        <div class="addquote center">
            <button class="add-button" @click="addQuote">Add Quote</button>
        </div>
    </div>  
</template>

<script>
import { eventBus } from "../main";

export default {
  data() {
    return {
      defaultText: "",
      quoteText: ""
    };
  },
  props: {
    quotes: Array
  },

  methods: {
    addQuote() {
      if (this.quotes.length < 10) {
        this.quoteText = this.defaultText;
        this.quotes.push(this.quoteText);
        eventBus.addQuote(this.quotes.length, this.quoteText);
      } else {
        alert("Can't add more than 10 quotes. Delete some");
      }
      this.defaultText = "";
    }
  }
};
</script>


<style scoped>
.add-button {
  height: 40px;
  width: 80px;
  background-color: royalblue;
  color: white;
  margin: 10px;
}
textarea {
  height: 150px;
  width: 500px;
}
.addquote {
  margin: auto;
  width: 60%;
  align-items: center;
}
</style>


