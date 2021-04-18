import { ConfigDefault, IChannel, IConfigData } from './ConfigDefault';

/**
 * 测试服配置
 *
 * @export
 * @class ConfigTest
 * @extends {ConfigDefault}
 */
export class ConfigTest extends ConfigDefault<IConfigData> {
	constructor() {
		super();
	}

	/**
	 * 重写-测试服接口请求列表域名
	 *
	 * @type {IChannel}
	 * @memberof ConfigDefault
	 */
	public channel: IChannel = {
		default: {
			url: 'https://cnodejs.org/'
		}
	};
}
