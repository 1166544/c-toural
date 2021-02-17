import { Commit } from 'vuex';
/** state */
const state: any = {
	name: ''
};

/** mutations */
const mutations: any = {
	/** save name */
	saveName(states: any, params: object): any {
		states.name = params;
	}
};

/** actions */
const actions: any = {
	/** save name */
	saveName(context: { commit: Commit }, params: object): any {
		context.commit('saveName', params);
	}
};

export default {
	// namespaced
	// false: state,mutations,actions全局可以调用
	// true:生成作用域，引用时要声明模块名称
	namespaced: true,
	state,
	mutations,
	actions
};
