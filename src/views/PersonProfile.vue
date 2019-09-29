<template>
  <main>
    <main-component backIcon :pageTitle="`Perfil de ${person.name || ''}`">
      <profile-header :person="person" @onDeletePerson="showDeleteModal=true"></profile-header>
      <div class="person-info">
        <div>Nome: {{person.name}}</div>
        <div>E-mail: {{person.email}}</div>
        <div>Data de cadastro: {{person.createdAt | moment('DD/MM/YYYY')}}</div>
      </div>
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

export default {
  name:"PersonProfile",
  components: {
    MainComponent,
    Modal,
    ProfileHeader,
    CustomBtn
  },
  data: (() => {
    return {
      person: {
        createdAt: new Date()
      },
      showDeleteModal: false
    }
  }),
  methods: {
    async getPersonById() {
      const res = await this.$api.getPersonById(this.$route.params.id)
      this.person = res.data
    },
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
  },
  mounted() {
    this.getPersonById()
  }
}
</script>

<style lang="scss" scoped>

.person-info {
  margin-top: 2rem;
  color: rgba(0, 0, 0, 0.7);
  text-align: left;
  max-width: 100%;
  word-break: break-word;
}
</style>