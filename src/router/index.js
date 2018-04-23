import Vue from 'vue'
import Router from 'vue-router'
import table from '@/components/table'
import form from '@/components/form'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path:'/form',
          name:'form',
          component:form
      },{
          path:'/table',
          name:'table',
          component:table
      }
  ]
})
