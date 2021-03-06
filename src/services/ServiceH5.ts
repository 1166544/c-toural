import { ServiceTransport } from '@u-core/libs/src/core/services/ServiceTransport';
import { ConfigDefault } from '../config/ConfigDefault';

/**
 * 服务端接口调用H5
 *
 * @class CnNodeService
 * @extends {ServiceH5}
 */
class ServiceH5 extends ServiceTransport {
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
}

export default new ServiceH5();
