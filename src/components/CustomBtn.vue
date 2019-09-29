<template>
  <main class="add-btn-main">
    <button :class="[inverted ? 'inverted-btn': 'default-btn', small ? 'btn-small-container' :'btn-default-container']">
      <slot/>
    </button>
  </main>
</template>

<script>
export default {
name: 'AddProfileBtn',
props: {
  inverted: {
    type: Boolean,
    default: false
  },
  small: {
    type: Boolean,
    default: false
  },
}
}
</script>

<style lang="scss" scoped>
  button {
    outline: none;
    border: none;
  }
  .default-btn {
    background-color: $primary-color;
    color: white;
    &:hover {
      cursor: pointer;
      background-color: $primary-hover-color;
    }
  }
  .inverted-btn {
    background-color: white;
    color: $primary-color;
    &:hover {
      cursor: pointer;
      background-color: #F3F3F3;
    }
  }
  .btn-default-container {
    border-radius: 1rem;
    padding: .4rem 1rem;
  }
  .btn-small-container {
    border-radius: 1rem;
    padding: .2rem 1.5rem;
  }
</style>