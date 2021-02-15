/**
 * 扩充全局过滤器
 *
 * @class CustomFilters
 */
export class PluginsCustomGlobalFunc {
	/**
	 * 全局过滤器
	 *
	 * @param {string} [source]
	 * @param {string} [target]
	 * @returns {*}
	 * @memberof CustomFilters
	 */
	public globalFilters(source?: string, target?: string): any {
		console.log('Some global func test.');
	}
}
