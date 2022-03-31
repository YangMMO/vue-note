import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import VModel from '../views/VModel.vue'
import Emit from '../views/Emit.vue'
import CustomEvent from '../views/CustomEvent.vue'
import Tab from '../views/Tab.vue'
import Slot from '../views/Slot.vue'
import Slot1 from '../views/Slot1.vue'
import Prop from '../views/Prop.vue'
import PropAttribute from '../views/PropAttribute.vue'
import Switch from '../views/Switch.vue'

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/v-modle',
    component: VModel
  },
  {
    path: '/emit',
    component: Emit
  },
  {
    path: '/customEvent',
    component: CustomEvent
  },
  {
    path: '/tab',
    component: Tab
  },
  {
    path: '/slot',
    component: Slot
  },
  {
    path: '/slot1',
    component: Slot1
  },
  {
    path: '/prop',
    component: Prop
  },
  {
    path: '/propAttribute',
    component: PropAttribute
  },


  ,{
    path: '/switch',
    component: Switch
  },
  
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

