<template>
  <main>
    <main-component backIcon pageTitle="Novo Perfil">
      <custom-form @onSaveForm="saveProfile"></custom-form>   
    </main-component>
  </main>
</template>

<script>
import MainComponent from "@/components/MainComponent"
import CustomForm from "@/components/CustomForm"
export default {
  name: "NewProfile",
  components: {
    MainComponent,
    CustomForm
  },
  methods: {
     saveProfile(formData) {
      this.$api.createPerson({...formData})
      .then((res) => {
        this.$router.push('/people-list')
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style>

</style>