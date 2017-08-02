<template>
  <div class="component2">
    <input type="text" name="message" v-on:key-type="updated()" v-model="name"/>
    Hello {{ name }}
  </div>
</template>

<script>
export default {
  name: 'component2',
  components: { },
  data () {
    return {
      name: "Anonymous"
    }
  },
  updated: function() {
    this.$store.commit("setMessage",this.name);
  }
}
</script>

<style>
html {
  position: relative;
  min-height: 100%;
}
body {
  /* Margin bottom by footer height */
  margin-bottom: 60px;
}
.app-content {
  padding: 60px 15px 0;
}
</style>
