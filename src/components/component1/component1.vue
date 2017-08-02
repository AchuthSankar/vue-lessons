<template>
  <div class="component1">
    Hello {{ name }}
  </div>
</template>

<script>
export default {
  name: 'component1',
  components: { },
  data () {
    return {
      name: "Anonymous"
    }
  },
  created () {
    this.$store.subscribe((state)=>{
      console.log(state);
      if(state.type==="setMessage") {
        this.name=state.payload
      }
    });
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
