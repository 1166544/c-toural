import DirectivesAutoFocus from '@/directives/DirectivesAutoFocus';
import { PluginsCustomGlobalFunc } from '@/plugins/PluginsCustomGlobalFunc';
import { PluginsCustomFunc } from '@/plugins/PluginsCustomFunc';
import { PluginsMixin } from '@/plugins/PluginsMixin';
import { capitalize } from '@/plugins/PluginsCustomFilter';

/**
 * 自定义插件
 * 自定义插件-包括混入、指令、扩充方法等
 *
 * @class PluginsExtened
 */
class PluginsExtened {
	public customGlobalFunc!: PluginsCustomGlobalFunc;
	public customFunc!: PluginsCustomFunc;
	public customMixin!: PluginsMixin;

	constructor() {
		this.customGlobalFunc = new PluginsCustomGlobalFunc();
		this.customFunc = new PluginsCustomFunc();
		this.customMixin = new PluginsMixin();
	}

	/**
	 * 安装入口
	 *
	 * @memberof PluginsExtened
	 */
	public install(vue: any, options: any): void {
		/** 1.添加全局方法或 property */
		vue.globalFilters = this.customGlobalFunc.globalFilters;

		// 2.注册全局资源
		vue.directive('focus', DirectivesAutoFocus);

		// 3.注入选项，混入等
		vue.mixin(this.customMixin);

		// 4.添加实例方法
		vue.prototype.$customFunc = this.customFunc.invokeSome;

		// 5.添加过滤器
		vue.filter('captialize', capitalize);
	}
}

export default new PluginsExtened();
