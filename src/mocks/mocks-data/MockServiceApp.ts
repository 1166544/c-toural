import { MockBase, IMock, IMockData } from '@fdd-components/fdd-identify-lib/src/core/mocks/MockBase';
import { ConfigDefault } from '@/config/ConfigDefault';
/**
 * APP服务 mock
 *
 * @export
 * @class MockServiceApp
 */
export class MockServiceApp extends MockBase {
	constructor() {
		super(ConfigDefault.DEFAULT_CHANNEL);
	}

	/**
	 * MOCK数据填充
	 *
	 * @memberof MockServiceApp
	 */
	public render(): void {
		// 接口api/v1/topics数据结构--示例
		this.mockList.push(
			{
				url: 'api/v1/topics',
				method: MockBase.GET,
				responseData: {
					id: '5fdb44d70f99cb37f45e3410',
					author_id: '56f3686f02c237a73a1a8acf',
					tab: 'share',
					content: '<div class="markdown-text"><p>RT.</p>\n<p>请大家遵守法律法规，勿发布不合规内容。</p>\n</div>',
					title: 'MOCK 2 数据返回请大家遵纪守法，勿发布不合规内容',
					last_reply_at: '2021-01-31T07:45:13.403Z',
					good: false,
					top: true,
					reply_count: 91,
					visit_count: 17494,
					create_at: '2020-12-17T11:45:27.667Z',
					author: { loginname: 'thonatos', avatar_url: 'https://avatars2.githubusercontent.com/u/958063?v=4&s=120' }
				}
			}
		);

		// 接口v3/tFddAppConfig/getConfigList数据结构--示例
		this.mockList.push(
			{
				url: 'v3/tFddAppConfig/getConfigList',
				method: MockBase.POST,
				responseData: {
					code: '0',
					data: [
						{
							configKey: 'theme-color',
							configValue: '#012969',
							type: '0'
						},
						{
							configKey: 'font-color',
							configValue: '#333',
							type: '0'
						},
						{
							configKey: 'show-nav-bar',
							configValue: 1,
							type: '0'
						},
						{
							configKey: 'nav-bar-color',
							configValue: '#333',
							type: '0'
						},
						{
							configKey: 'idcard-photo-optional',
							configValue: 2,
							type: '0'
						},
						{
							configKey: 'skip-guide',
							configValue: 0,
							type: '0'
						},
						{
							configKey: 'show-collect-agreement',
							configValue: 1,
							type: '0'
						},
						{
							configKey: 'nav-bar-content',
							configValue: '实名认证-小康康',
							type: '0'
						}
					],
					msg: '成功'
				}
			}
		);
	}
}
