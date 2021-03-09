import { ServiceTransport } from '@u-core/libs/src/core/services/ServiceTransport';
import { ConfigDefault } from '../config/ConfigDefault';

/**
 * 服务端接口调用APP
 *
 * @class CnNodeService
 * @extends {ServiceApps}
 */
class ServiceApps extends ServiceTransport {
	constructor() {
		super(ConfigDefault.DEFAULT_CHANNEL);
	}

	/**
	 * 调用接口示例
	 *
	 * @returns {Promise<any>}
	 * @memberof CnNodeService
	 */
	public async getTopics(params: any): Promise<any> {
		return await this.get('api/v1/topics', params);
	}

	/**
	 * 获取页面配置数据
	 * /v3/tFddAppConfig/getConfigList
	 *
	 * @returns {Promise<any>}
	 * @memberof CnNodeService
	 */
	public async getConfigList(params: any): Promise<any> {
		return await this.post('v3/tFddAppConfig/getConfigList', params);
	}
}

export default new ServiceApps();
