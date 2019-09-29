<template>
  <main>
    <div class="person-header">
        <img :src="person.avatar" class="person-avatar mr-1" alt="Avatar de usuário">
        <div class="person-name">{{person.name}}</div>
        <div class="actions">
          <router-link :to="`/edit/${person.id}`" v-if="!hideEdit" class="icon-container" @click="$emit('onEditPerson', person.id)">
            <v-icon name="edit" scale="1" />
          </router-link>
          <div v-if="!hideDelete" class="icon-container" @click="$emit('onDeletePerson', person.id)">
            <v-icon name="regular/trash-alt" scale="1"/>
          </div>
        </div>
      </div>
  </main>
</template>

<script>
export default {
  name:'ProfileHeader',
  props: {
    person: Object,
    hideEdit: {
      type: Boolean,
      default: false
    },
    hideDelete: {
      type: Boolean,
      default: false
    },
  }
}
</script>

<style lang="scss" scoped>
.person-header {
  display: flex;
  align-items: center;
  .person-avatar {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
  .person-name {
    font-size: 1.75rem;
    color: $primary-color;
  }
  .actions {
    align-self: flex-start;
    margin-left: auto;
  }
}
@media (max-width: 768px) {
  .person-header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .person-avatar {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
  .person-name {
    font-size: 1.75rem;
    color: $primary-color;
  }
  .actions {
    align-self: center;
    margin: 0;
    margin-top: 1rem;
  }
}
}
</style>