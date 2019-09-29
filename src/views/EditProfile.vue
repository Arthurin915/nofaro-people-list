<template>
  <main>
    <main-component backIcon pageTitle="Editar Perfil">
      <profile-header :person="person" hideEdit @onDeletePerson="showDeleteModal=true"></profile-header>   
      <custom-form :person="person" @onSaveForm="saveProfile"></custom-form>   
    </main-component>
    <modal :show="showDeleteModal" @close="showDeleteModal = false">
      <template v-slot:body>
        <div>Tem certeza que você deseja excluir esse perfil?</div>
      </template>
      <template v-slot:actions>
        <div class="slot-actions">
          <custom-btn small class="mr-1" @click.native="deletePerson()">Sim</custom-btn>
          <custom-btn inverted small @click.native="personIdToDelete = null; showDeleteModal = false">Não</custom-btn>
        </div>
      </template>
    </modal>
  </main>
</template>

<script>
import MainComponent from "@/components/MainComponent"
import Modal from "@/components/Modal"
import ProfileHeader from "@/components/ProfileHeader"
import CustomBtn from "@/components/CustomBtn"
import CustomForm from "@/components/CustomForm"

export default {
  name:"PersonProfile",
  components: {
    MainComponent,
    Modal,
    ProfileHeader,
    CustomBtn,
    CustomForm
  },
  data: (() => {
    return {
      person: {},
      showDeleteModal: false
    }
  }),
  methods: {
    deletePerson() {
      this.$api.deletePerson(this.person.id)
      .then((res) => {
        this.$router.push("/people-list")
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        this.showDeleteModal = false
      })
    },
    async getPersonById() {
      const res = await this.$api.getPersonById(this.$route.params.id)
      this.person = res.data
    },
    saveProfile(formData) {
      this.$api.editPerson(this.person.id, {...formData})
      .then((res) => {
        this.getPersonById()
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.getPersonById()
  }
}
</script>

<style>

</style>