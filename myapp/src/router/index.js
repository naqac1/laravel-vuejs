import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import EmployeeView from '@/components/EmployeeView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/employeeview',
      name: 'EmployeeView',
      component: EmployeeView
    }
  ]
})
