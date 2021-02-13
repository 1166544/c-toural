import { IMenus, ITrackPluginMenus } from '@/components/fashion-show/interfaces/IMenus';

/**
 * 页面数据结构
 *
 * @export
 * @interface IPageData
 */
export interface IPageData {
	/**
	 * 左边列表
	 *
	 * @type {Array<IMenus>}
	 * @memberof IPageData
	 */
	navDataList: Array<IMenus>;

	/**
	 * 右边数据列表
	 *
	 * @type {Array<ITrackPluginMenus>}
	 * @memberof IPageData
	 */
	rightTrackList: Array<ITrackPluginMenus>;
}
