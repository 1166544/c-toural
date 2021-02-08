import { handler, gen_handler } from '../utils/Utils';
import { loader_mgr } from './LoaderManager';

/**
 * 加载队列
 *
 * @export
 * @class LoaderLoadingQueue
 */
export class LoaderLoadingQueue {
	private static _inst: LoaderLoadingQueue;
	private _loadingMap: Map<string, handler[]>;

	constructor() {
		this._loadingMap = new Map();
	}

	/**
	 * 单例
	 *
	 * @static
	 * @returns
	 * @memberof LoaderLoadingQueue
	 */
	public static getInstance(): any {
		if (!this._inst) {
			this._inst = new LoaderLoadingQueue();
		}

		return this._inst;
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
		let cbs: any = this._loadingMap.get(path);
		if (!cbs) {
			cbs = [];
			this._loadingMap.set(path, cbs);
		}
		cbs.push(cb);
		if (cbs.length > 1) {
			return;
		}
		loader_mgr.get_inst().loadPrefabObj(
			path,
			gen_handler((node: cc.Node): any => {
				const cbs: any = this._loadingMap.get(path);
				if (cbs) {
					cbs.forEach((cb: any): any => cb.exec(node));
					cbs.length = 0;
					this._loadingMap.delete(path);
				}
			})
		);
	}

	/**
	 * 清除
	 *
	 * @memberof LoaderLoadingQueue
	 */
	public clear() {
		this._loadingMap.clear();
	}
}
