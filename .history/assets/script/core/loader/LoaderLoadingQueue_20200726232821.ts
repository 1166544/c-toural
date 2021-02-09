import { handler, gen_handler } from '../util';
import { loader_mgr } from './LoaderManager';

export class LoaderLoadingQueue {
	private static _inst: LoaderLoadingQueue;
	private _loadingMap: Map<string, handler[]>;
	private constructor() {
		this._loadingMap = new Map();
	}

	static getInst() {
		if (!this._inst) {
			this._inst = new LoaderLoadingQueue();
		}

		return this._inst;
	}

	loadPrefabObj(path: string, cb: handler) {
		let cbs = this._loadingMap.get(path);
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
			gen_handler((node: cc.Node) => {
				const cbs = this._loadingMap.get(path);
				if (cbs) {
					cbs.forEach((cb) => cb.exec(node));
					cbs.length = 0;
					this._loadingMap.delete(path);
				}
			})
		);
	}

	clear() {
		this._loadingMap.clear();
	}
}