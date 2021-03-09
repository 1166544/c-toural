import { ConfigDefault, IChannel, IConfigData } from './ConfigDefault';

/**
 * 开发服配置
 *
 * @export
 * @class ConfigDev
 * @extends {ConfigDefault}
 */
export class  ConfigDev extends ConfigDefault<IConfigData> {
	constructor() {
		super();
	}

	/**
	 * 重写-开发服接口请求列表域名
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
