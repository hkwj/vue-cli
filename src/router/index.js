import Vue from 'vue';
import Router from 'vue-router';


import HelloWorld from '@/components/HelloWorld.vue';
import table from '@/components/SupplierTable.vue';
import jsGoodPart from '@/components/JsGoodParts.vue';

Vue.use(Router);



let routes = [
		{ path: '*', redirect: '/home' },
		{ path: '/', redirect: '/home' },
		{ path: '/home', component: HelloWorld },
		{ path: '/table', component: table },
		{ path: '/jsGoodPart',component: jsGoodPart}
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
