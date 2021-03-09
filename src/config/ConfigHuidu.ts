import { ConfigDefault, IChannel, IConfigData } from './ConfigDefault';

/**
 * 灰度服配置
 *
 * @export
 * @class ConfigHuidu
 * @extends {ConfigDefault}
 */
export class ConfigHuidu extends ConfigDefault<IConfigData> {
	constructor() {
		super();
	}

	/**
	 * 重写-灰度服接口请求列表域名
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
