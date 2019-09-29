<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>
<script>
export default {
  name: 'App',
  computed: {
    layout() {
      return 'default-layout';
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
