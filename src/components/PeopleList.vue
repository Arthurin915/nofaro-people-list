<template>
  <main>
    <ul class="people-list">
      <li v-for="(person, index) in people" :key="index" @click="viewProfile(person.id)">
        <div :class="[index % 2 == 0 ? 'even' : 'odd', 'people-list-item']">
          <div>{{person.name}}</div>
          <div class="person-email">{{person.email}}</div>
          <div class="actions" @click.stop>
            <router-link :to="`edit/${person.id}`" class="icon-container">
              <v-icon name="edit" scale="1" />
            </router-link>
            <div class="icon-container" @click="deletePerson(person.id)">
              <v-icon name="regular/trash-alt" scale="1"/>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  props: ['people'],
  data:(() => {
    return {
      
    }
  }),
  methods: {
    viewProfile(id) {
      this.$emit("onViewProfile", id)
    },
    deletePerson(id) {
      this.$emit('onDeletePerson', id)
    },
    editPerson(id) {
      this.$emit('onEditPerson', id)
    }
  }
}
</script>

<style lang="scss" scoped>
.even {
  background-color: #f2f2f2;
}
.odd {
  background-color: #fffafb;
}
.people-list {
.people-list-item {
  padding: .25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
  .person-email {
    margin-left: auto;
    max-width: 180px;
    word-break: break-all;
    margin-right: 2rem;
    text-transform: lowercase;
    color: #9a9a9a;
  }
}

}
  @media (max-width: 768px) {
    .people-list {

      .people-list-item {
        padding: .25rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
        &:hover {
          cursor: pointer;
        }
        .person-email {
          margin: 0;
          word-break: break-all;
          text-transform: lowercase;
          color: #9a9a9a;
        }
      }
    }
  }
</style>