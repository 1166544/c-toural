import Vue from 'vue';
import 'amfe-flexible';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/styles/StyleCommon.less';
import '@/styles/StyleReset.less';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	created(): any {
		// hole
	},
	render: (h: any): any => h(App)
}).$mount('#app');