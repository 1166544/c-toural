import { ServiceTransport } from '@fdd-components/fdd-identify-lib/src/core/services/ServiceTransport';
import { ConfigDefault } from '../config/ConfigDefault';

/**
 * 服务端接口调用PC
 *
 * @class CnNodeService
 * @extends {ServicePC}
 */
class ServicePC extends ServiceTransport {
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

export default new ServicePC();
