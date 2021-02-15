import DirectivesAutoFocus from '@/directives/DirectivesAutoFocus';
import { PluginCustomFilters } from '@/plugins/PluginsCustomFilter';
import { PluginsCustomFunc } from '@/plugins/PluginsCustomFunc';
import { PluginsMixin } from '@/plugins/PluginsMixin';

/**
 * 自定义插件
 * 自定义插件-包括混入、指令、扩充方法等
 *
 * @class PluginsExtened
 */
class PluginsExtened {
	public customFilters!: PluginCustomFilters;
	public customFunc!: PluginsCustomFunc;
	public customMixin!: PluginsMixin;

	constructor() {
		this.customFilters = new PluginCustomFilters();
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
		vue.globalFilters = this.customFilters.globalFilters;

		// 2.注册全局资源
		vue.directive('focus', DirectivesAutoFocus);

		// 3.注入选项，混入等
		vue.mixin(this.customMixin);

		// 4.添加实例方法
		vue.prototype.$customFunc = this.customFunc.invokeSome;
	}
}

export default new PluginsExtened();
