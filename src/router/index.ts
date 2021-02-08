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
		// route level code-splitting
		// this generates a separate chunk (H5Index.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		redirect: (to: Route): any => {
			const { hash, params, query }: Route = to;
			const flowCode: any = query.flowCode;

			return params && params.token ? `/${flowCode}&token=${query.tokem}` : `/${flowCode}`;
		}
		// component: (): any => import(/* webpackChunkName: "H5Index" */ '../views/ViewsH5.vue')
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
