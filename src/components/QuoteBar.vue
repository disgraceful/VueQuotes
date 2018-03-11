<template>
<div class="quote-bar">
    <div class="filled" :style="width">
       <span>{{quoteCounter}}/10</span>
    </div>
    
</div>
</template>

<script>
import { eventBus } from "../main";

export default {
  props: {
    quoteCounter: Number
  },
  computed: {
    width() {
      return {
        width: this.quoteCounter * 10 + "%"
      };
    }
  },
  created() {
    eventBus.$on("quoteAdded", (quoteCounter, quoteText) => {
      this.quoteCounter = quoteCounter;
    });
  }
};
</script>


<style scoped>
.quote-bar {
  display: inline-block;
  background-color: lightgrey;
  width: 95%;
  height: 30px;
  margin-left: 15px;
  margin-right: 15px;
}

.filled {
  height: 100%;
  width: 10%;
  background-color: royalblue;
  display: flex;
  align-items: center;
  justify-content: center;
}

span {
  color: white;
}
</style>

