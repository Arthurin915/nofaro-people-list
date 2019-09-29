<template>
  <main>
    <div class="form-container">
      <div class="mb-1">
        <div style="text-align: left"><label :for="`name-${_uid}`">Nome:</label></div>
        <input v-model="formData.name" type="text" :id="`name-${_uid}`">
      </div>
      <div class="mb-1">
        <div style="text-align: left"><label :for="`email-${_uid}`">E-mail</label></div>
        <input v-model="formData.email" type="text" :id="`email-${_uid}`">
      </div>
      <div class="form-action">
        <custom-btn small @click.native="$emit('onSaveForm', formData)">Salvar</custom-btn>
      </div>
    </div>
  </main>
</template>

<script>
import CustomBtn from "@/components/CustomBtn"
export default {
  name: 'CustomForm',
  components: {
    CustomBtn
  },
  props: ['person'],
  data:(() => {
    return {
      formData: {
        name: null,
        email: null
      }
    }
  }),
  watch: {
    person: function() {
      this.formData.name = this.person.name
      this.formData.email = this.person.email
    }
  }
}
</script>

<style lang="scss" scoped>
.form-container {
  margin-top: 1.5rem;
  text-align: left;
  color: $secondary-color;
  
  input {
    border-radius: 2rem;
    outline: none;
    border: 1px solid $secondary-color;
    padding: 4px;
    color: $secondary-color;
    
  }
  .form-action {
    display: flex;
    justify-content: center;
    text-align: center;
  }
}
@media (max-width: 450px) {
  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    input {
      max-width: 80px;
    }
  }
}
</style>