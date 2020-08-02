import { handler, genHandler } from '../utils/Utils';
import { LoaderManager } from './LoaderManager';

/**
 * 加载队列
 *
 * @export
 * @class LoaderLoadingQueue
 */
export class LoaderLoadingQueue {

	/**
	 * 单例
	 *
	 * @static
	 * @returns
	 * @memberof LoaderLoadingQueue
	 */
	public static getInstance(): any {
		if (!this.instance) {
			this.instance = new LoaderLoadingQueue();
		}

		return this.instance;
	}

	constructor() {
		this.loadingMap = new Map();
	}
	private static instance: LoaderLoadingQueue;
	private loadingMap: Map<string, handler[]>;

	/**
	 * 清除
	 *
	 * @memberof LoaderLoadingQueue
	 */
	public clear(): void {
		this.loadingMap.clear();
	}

	/**
	 * 加载预置体
	 *
	 * @param {string} path
	 * @param {handler} cb
	 * @returns {*}
	 * @memberof LoaderLoadingQueue
	 */
	public loadPrefabObj(path: string, cb: handler): any {
		let cbs: any = this.loadingMap.get(path);
		if (!cbs) {
			cbs = [];
			this.loadingMap.set(path, cbs);
		}
		cbs.push(cb);
		if (cbs.length > 1) {
			return;
		}
		LoaderManager.getInstance().loadPrefabObj(
			path,
			genHandler((node: cc.Node): any => {
				const cbs: any = this.loadingMap.get(path);
				if (cbs) {
					cbs.forEach((cb: any): any => cb.exec(node));
					cbs.length = 0;
					this.loadingMap.delete(path);
				}
			})
		);
	}
}
