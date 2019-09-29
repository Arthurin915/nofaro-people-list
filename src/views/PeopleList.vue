<template>
  <main>
    <main-component pageTitle="Lista de Pessoas">
      <people-list :people="people" @onViewProfile="viewProfile" @onEditPerson="editPerson()" @onDeletePerson="openDeleteModal"></people-list>
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
import CustomBtn from "@/components/CustomBtn"
import Modal from "@/components/Modal"
import PeopleList from "@/components/PeopleList"

export default {
  components: {
    MainComponent,
    PeopleList,
    Modal,
    CustomBtn
  },
  data:(() => {
    return {
      people: [],
      personIdToDelete: null,
      showDeleteModal: false
    }
  }),
  methods: {
    openDeleteModal(id) {
      this.personIdToDelete = id
      this.showDeleteModal = true
    },
    deletePerson() {
      this.$api.deletePerson(this.personIdToDelete)
      .then((res) => {
        this.getAllPeople()
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        this.showDeleteModal = false
      })
    },
    editPerson() {

    },
    viewProfile(id) {
      this.$router.push(`/profile/${id}`)
    },
    formatName(name) {
      return name.charAt(0).toUpperCase() + name.slice(1)
    },
    getAllPeople() {
      this.$api.getAllPeople()
      .then((res) => {
        this.people = res.data.sort((a,b) => this.formatName(a.name) > this.formatName(b.name) ? 1 : -1)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.getAllPeople()
  },

}
</script>

<style lang="scss" scoped>

</style>