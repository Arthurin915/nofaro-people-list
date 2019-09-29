import Vue from 'vue'
import Router from 'vue-router'
import PeopleList from './views/PeopleList.vue'
import PersonProfile from './views/PersonProfile.vue'
import EditProfile from './views/EditProfile.vue'
import NewProfile from './views/NewProfile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/people-list'
    },
    {
      path: '/people-list',
      name: 'PeopleList',
      component: PeopleList
    },
    {
      path: '/profile/:id',
      name: 'PersonProfile',
      component: PersonProfile
    },
    {
      path: '/edit/:id',
      name: 'EditProfile',
      component: EditProfile
    },
    {
      path: '/create-person',
      name: 'NewProfile',
      component: NewProfile
    },
  ]
})
