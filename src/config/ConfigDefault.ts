import { IConfig } from '@fdd-components/fdd-identify-lib/src/core/bootstrap/BootstrapEnvironment';

/**
 * config default
 */
export class ConfigDefault<T> implements IConfigData {

	/**
	 * 当前语言环境
	 *
	 * @type {string}
	 * @memberof ConfigDefault
	 */
	public locale!: string;

	/**
	 * 当前环境
	 *
	 * @type {string}
	 * @memberof ConfigDefault
	 */
	public env!: string;

	/**
	 * 当前访问路由地址
	 *
	 * @type {string}
	 * @memberof ConfigDefault
	 */
	public httpUrl!: string;

	/**
	 * 显示日志
	 *
	 * @type {boolean}
	 * @memberof ConfigDefault
	 */
	public isDisplayLogs!: boolean;

	/**
	 * 默认频道
	 *
	 * @static
	 * @type {string}
	 * @memberof ConfigDefault
	 */
	public static DEFAULT_CHANNEL: string = 'default';

	/**
	 * 接口请求列表域名
	 *
	 * @type {IChannel}
	 * @memberof ConfigDefault
	 */
	public channel: IChannel = {
		default: {
			url: 'https://cnodejs.org/'
		}
	};

	/**
	 * XSS配置
	 *
	 * @type {*}
	 * @memberof ConfigDefault
	 */
	public xssConfig: any = {
		// 在这里增加其他白名单 tag
		font: ['face', 'color', 'style', 'size', 'class', 'id'],
		img: ['id', 'src', 'class', 'width', 'height', 'style'],
		i: ['id', 'class', 'width', 'height', 'style'],
		span: ['id', 'class', 'width', 'height', 'style']
	};
}

/**
 * 实际配置数据接口
 *
 * @export
 * @interface IConfigData
 * @extends {IConfig}
 */
export interface IConfigData extends IConfig {
	channel: IChannel;
}

/**
 * 接口频道
 *
 * @export
 * @interface IChannel
 */
export interface IChannel {
	default: IChannelData;
}

/**
 * 频道数据结构
 *
 * @export
 * @interface IChannelData
 */
export interface IChannelData {
	url: string;
}
