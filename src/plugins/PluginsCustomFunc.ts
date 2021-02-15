/**
 * 扩充VUE实例方法
 * extends vue prototype func
 *
 * @export
 * @class PluginsCustomFunc
 */
export class PluginsCustomFunc {
	/**
	 * custom function
	 *
	 * @param {*} [methodOptions]
	 * @returns {*}
	 * @memberof PluginsCustomFunc
	 */
	public invokeSome(methodOptions?: any): any {
		console.log('start custom func');
	}
}
