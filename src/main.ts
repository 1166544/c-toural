import Vue from 'vue';
import 'amfe-flexible';
import App from './App.vue';
import router from './router';
import store from './store';

import { ConfigDev } from './config/ConfigDev';
import { ConfigTest } from './config/ConfigTest';
import { ConfigHuidu } from './config/ConfigHuidu';
import { ConfigProd } from './config/ConfigProd';
import ConfigEnv from './config/ConfigEnv';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	created(): any {
		// hole
	},
	render: (h: any): any => h(App)
}).$mount('#app');
