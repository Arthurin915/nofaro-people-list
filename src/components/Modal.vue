<template>
  <main>
    <transition name="modal-transition">
      <section class="modal" v-if="show" @click="$emit('close')">
        <div class="modal-content" @click.stop>
          <slot name="body">
          </slot>
          <slot name="actions">
          </slot>
        </div>
      </section>
    </transition>
  </main>
</template>

<script>
export default {
props: ['show']
}
</script>

<style lang="scss" scoped>
.modal-transition-enter-active, .modal-transition-leave-active {
  transition: opacity .1s;
}
.modal-transition-enter, .modal-transition-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.modal {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto;  
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
  transition: opacity .3s ease;
  .modal-content {
    position: relative;
    top: 50%;
    color: $primary-color;
    font-weight: bold;
    border-radius: 1.5rem;
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    width: 20%;
    padding: .75rem;
    @media (max-width: 850px) {
      width: 60%;
    }
  }
}
</style>