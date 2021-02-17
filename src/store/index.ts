import Vue from 'vue';
import Vuex from 'vuex';
import apps from './modules/apps';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		apps
	}
});
