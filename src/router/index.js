import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import table from '@/components/table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      	path: '/',
      	name: 'HelloWorld',
      	component: HelloWorld
    },{
    	path: '/table',
    	name: 'table',
    	compnent: table
    }

    
  ]
})
