import { ConfigDefault } from '@/config/ConfigDefault';
import { MockBase, IMock, IMockData } from '@fdd-components/fdd-identify-lib/src/core/mocks/MockBase';

/**
 * MockServiceH5 mock
 *
 * @export
 * @class MockServiceH5
 */
export class MockServiceH5 extends MockBase {

	constructor() {
		super(ConfigDefault.DEFAULT_CHANNEL);
	}

	/**
	 * MOCK数据填充
	 *
	 * @memberof MockServiceH5
	 */
	public render(): void {
		// 接口api/v1/topics数据结构
		this.mockList.push({
			url: 'api/v1/topics',
			method: MockBase.GET,
			responseData:
			{
				id: '5fdb44d70f99cb37f45e3410',
				author_id: '56f3686f02c237a73a1a8acf',
				tab: 'share',
				content: '<div class="markdown-text"><p>RT.</p>\n<p>请大家遵守法律法规，勿发布不合规内容。</p>\n</div>',
				title: 'MOCK 1 数据返回请大家遵纪守法，勿发布不合规内容',
				last_reply_at: '2021-01-31T07:45:13.403Z',
				good: false,
				top: true,
				reply_count: 91,
				visit_count: 17494,
				create_at: '2020-12-17T11:45:27.667Z',
				author: { loginname: 'thonatos', avatar_url: 'https://avatars2.githubusercontent.com/u/958063?v=4&s=120' }
			}
		});
	}
}
