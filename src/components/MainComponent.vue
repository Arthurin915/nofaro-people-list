<template>
  <main class="container">
    <section class="informative-section">
      <div class="page-title" v-if="backIcon">
         <router-link to="/people-list">
          <v-icon name="arrow-left" class="mr-1" scale="1.3"/>
          {{pageTitle}}
         </router-link>
      </div>
      <div class="page-title" v-else>
          {{pageTitle}}
      </div>
      <router-link to="create-person">
        <custom-btn>+ Adicionar Perfil</custom-btn>
      </router-link>
    </section>
    <section class="box">
      <slot/>
    </section>
  </main>
</template>

<script>
import CustomBtn from "@/components/CustomBtn"
export default {
  name: "MainComponent",
  props: {
    pageTitle: {
      type:String,
      required: true
    },
    backIcon: {
      type: Boolean,
      default: false
    }
  },
  components: {
    CustomBtn
  },
}
</script>

<style lang="scss" scoped>
  .container {
    width: 40%;
    margin: 0 auto;
    margin-bottom: 3rem;
    .informative-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      .page-title {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        color: $primary-color;
       
      }
      @media (max-width: 778px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
    }
    .box {
      border-radius: 1rem;
      padding: 1.5rem;
      border: 1px solid $primary-color;
      height: 500px;
      overflow-y: auto;

    }
  }
</style>