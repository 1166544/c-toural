import { ConfigDefault, IChannel, IConfigData } from './ConfigDefault';

/**
 * 生产服配置
 *
 * @export
 * @class ConfigProd
 * @extends {ConfigDefault}
 */
export class ConfigProd extends ConfigDefault<IConfigData> {
	constructor() {
		super();
	}

	/**
	 * 重写-生产服接口请求列表域名
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
