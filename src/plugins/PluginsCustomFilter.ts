/**
 * 首字母大写过滤器
 *
 * @param {*} value
 * @returns {*}
 * @memberof PluginsCustomFilter
 */
export function capitalize(value: any): any {
	if (!value) {
		return;
	}

	const valueStr: string = value.toString();

	return `${valueStr.charAt(0).toUpperCase()}${value.slice(1)}`;
}
