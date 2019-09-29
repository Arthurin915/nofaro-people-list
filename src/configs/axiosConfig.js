import Vue from 'vue'
import axios from 'axios'

const apiCall = (url) => {
  const client = axios.create({
    baseURL: url,
  })
  return {
    getAllPeople: () => client.get('/person'),
    getPersonById: (id) => client.get(`/person/${id}`),
    createPerson: (payload) => client.post('/person', payload),
    editPerson: (id, payload) => client.put(`/person/${id}`, payload),
    deletePerson: (id) => client.delete(`/person/${id}`),
  }
}
Vue.prototype.$api = apiCall('http://5c9d09be3be4e30014a7d331.mockapi.io/nofaro/api/v1')