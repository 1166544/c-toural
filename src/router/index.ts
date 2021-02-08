import Vue from 'vue';
import VueRouter, { Route, RouteConfig } from 'vue-router';

Vue.use(VueRouter);

/**
 * rotes
 */
const routes: RouteConfig[] = [
	{
		path: '/',
		name: 'H5Index',
		component: (): any => import(/* webpackChunkName: "H5Index" */ '../views/ViewsH5.vue')
	},
	{
		path: '/h5',
		name: 'H5Index',
		component: (): any => import(/* webpackChunkName: "H5Index" */ '../views/ViewsH5.vue')
	}
];

/**
 * reouter
 */
const router: any = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
