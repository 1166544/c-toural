import Vue from 'vue';
import Vuex from 'vuex';
import apps from './modules/apps';

Vue.use(Vuex);

export default new Vuex.Store({
	// 忽略全局内容
	state: {},
	mutations: {},
	actions: {},
	modules: {
		// 各个模块分治治理全局模块,适用于大型系统
		// 即每个模块包含自已的 state, action mutions
		apps
	}
});
