import Vue from 'vue';
import 'amfe-flexible';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/styles/StyleCommon.less';
import '@/styles/StyleReset.less';
import PluginsExtened from '@/plugins/PluginsExtened';

// 注册自定义插件-包括混入、指令、扩充方法等
Vue.use(PluginsExtened);

// production tip
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	created(): any {
		// hole
	},
	render: (h: any): any => h(App)
}).$mount('#app');
