/**
 * 统一处理全局混入
 * plugins mixin
 *
 * @export
 * @class PluginsMixin
 */
export class PluginsMixin {
	/**
	 * 扩充生命周期 created
	 *
	 * @memberof PluginsMixin
	 */
	public created(): void {
		console.log('mixin test');
	}
}
