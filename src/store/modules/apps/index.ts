import { Commit, Module, ModuleTree } from 'vuex';

// ========================= 模块 state、action、mutation 实现 ==================
/** state */
const state: IAppsState = {
	/** 定义属性 name */
	name: ''
};

/** mutations */
const mutations: IAppsMutations = {
	/** save name */
	saveName(states: any, params: object): void {
		states.name = params;
	}
};

/** actions */
const actions: IAppsAction = {
	/** save name */
	saveName(context: { commit: Commit }, params: object): void {
		context.commit('saveName', params);
	}
};
// ========================= 模块 state、action、mutation 实现 ==================

// ========================= 定义数据类型 start =================================
/** apps state */
export interface IAppsState {
	name: string;
}

/** apps mutations */
export interface IAppsMutations {
	/** mutation save name function */
	saveName(states: any, params: object): void;
}

/** apps actions */
export interface IAppsAction {
	/** save name function action */
	saveName(context: { commit: Commit }, params: object): void;
}
// ========================= 定义数据类型 end =================================

/** 导出数据结构 */
const appsStore: any = {
	// namespaced
	// false: state,mutations,actions全局可以调用
	// true:生成作用域，引用时要声明模块名称
	namespaced: true,
	state,
	mutations,
	actions
};
export default appsStore;
