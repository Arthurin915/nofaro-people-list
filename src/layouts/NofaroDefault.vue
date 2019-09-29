5<template>
  <main class="default-layout">
    <header class="layout-header">
      <img src="@/assets/logo-img.png" alt="" width="120">
    </header>
    <slot/>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.layout-header {
  margin: 3rem 0;
}
</style>