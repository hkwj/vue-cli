import Vue from 'vue';
import Router from 'vue-router';


import HelloWorld from '@/components/HelloWorld';
import table from '@/components/table';

Vue.use(Router);



let routes = [
		{ path: '/home', component: HelloWorld },
		{ path: '/table', component: table }
];


/**
 *  路由中有个# 加上mode : history 
 * 选项就好了 
* */
let router = new Router({
		routes: routes,
		mode: 'history'
});




export default router;
