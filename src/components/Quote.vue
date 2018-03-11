<template>
  <div class="quote" @click="$emit('quoteDeleted')">
      <p>{{quoteText}}</p>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  props: {
    quoteText: String
  },
  created() {
    eventBus.$on("quoteAdded", (quoteCounter, quoteText) => {
      this.quoteText = quoteText;
    });
  }
};
</script>

<style scoped>
p {
  font-family: "Goudy Bookletter 1911", sans-serif;
}

.quote {

}
</style>

