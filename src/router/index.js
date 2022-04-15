import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import VModel from '../views/VModel.vue'
import Emit from '../views/Emit.vue'
import Tab from '../views/Tab.vue'
import Slot from '../views/Slot.vue'
import Slot1 from '../views/Slot1.vue'
import Prop from '../views/Prop.vue'
import PropAttribute from '../views/PropAttribute.vue'
import CustomEvent from '../views/CustomEvent.vue'
import Provide from '../views/Provide.vue'
import DynamicAsync from '../views/DynamicAsync.vue'
import Ref from '../views/Ref.vue'
import DomUpdate from '../views/DomUpdate.vue'
import VOnce from '../views/VOnce.vue'
import Transition from '../views/Transition.vue'
import Transition1 from '../views/Transition1.vue'
import TransitionGroup from '../views/TransitionGroup.vue'
import KeepAlive from '../views/KeepAlive.vue'
import Teleport from '../views/Teleport.vue'
import Suspense from '../views/Suspense.vue'
import Composables from '../views/Composables.vue'


const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },{
    path: '/v-modle',
    component: VModel
  },{
    path: '/emit',
    component: Emit
  },{
    path: '/tab',
    component: Tab
  },{
    path: '/slot',
    component: Slot
  },{
    path: '/slot1',
    component: Slot1
  },{
    path: '/prop',
    component: Prop
  },{
    path: '/propAttribute',
    component: PropAttribute
  },{
    path: '/customEvent',
    component: CustomEvent
  },{
    path: '/provide',
    component: Provide
  },{
    path: '/dynamic-async',
    component: DynamicAsync
  },{
    path: '/ref',
    component: Ref
  },{
    path: '/dom-update',
    component: DomUpdate
  },{
    path: '/v-once',
    component: VOnce
  },{
    path: '/transition',
    component: Transition
  },{
    path: '/transition1',
    component: Transition1
  },{
    path: '/transition-group',
    component: TransitionGroup
  },{
    path: '/keep-alive',
    component: KeepAlive
  },{
    path: '/teleport',
    component: Teleport
  },{
    path: '/composables',
    component: Composables
  },{
    path: '/suspense',
    component: Suspense
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
