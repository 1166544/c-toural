import { IPageData } from '@/components/fashion-show/interfaces/IPageData.ts';

/**
 * FashionShow
 *
 * @export
 * @class FashionShow
 */
export class FashionShow {
	constructor() {
		console.log('init FashionShow sub controller');
	}

	/**
	 * 获取页面数据结构
	 *
	 * @returns {IPageData}
	 * @memberof FashionShow
	 */
	public getPageData(): IPageData {
		return {
			// 导航数据列表
			navDataList: [
				{
					imgClass: 'cards-fashion-show-left-list-home',
					nameValue: 'Home'
				},
				{
					imgClass: 'cards-fashion-show-left-list-project',
					nameValue: 'Clients'
				},
				{
					imgClass: 'cards-fashion-show-left-list-time',
					nameValue: 'Time tracking'
				},
				{
					imgClass: 'cards-fashion-show-left-list-hardware',
					nameValue: 'Hardware'
				},
				{
					imgClass: 'cards-fashion-show-left-list-documents',
					nameValue: 'Documents'
				}
			],

			/** 右边导航栏数据结构 */
			rightTrackList: [
				{
					leftTitle: 'MR',
					title: 'Michal Rome',
					subTitle: 'Senior UI Designer'
				},
				{
					leftTitle: 'DK',
					title: 'Dominika Kropp',
					subTitle: 'Visual Designer'
				},
				{
					leftTitle: 'MT',
					title: 'Marcin Twardowski',
					subTitle: 'UX Designer'
				}
			]
		};
	}
}
