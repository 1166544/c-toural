import { handler, gen_handler } from '../utils/Utils';

/**
 * 加载管理器
 *
 * @export
 * @class LoaderManager
 */
export class LoaderManager {
	private static inst: LoaderManager;
	private loadedResource: Map<string, boolean>;
	private loadedExternalUrlList: Map<string, boolean>;

	private constructor() {
		this.loadedResource = new Map();
		this.loadedExternalUrlList = new Map();
	}

	/**
	 * 单例
	 *
	 * @static
	 * @returns {LoaderManager}
	 * @memberof LoaderManager
	 */
	public static getInstance(): LoaderManager {
		if (!this.inst) {
			this.inst = new LoaderManager();
		}

		return this.inst;
	}

	/**
	 * 设置外部精灵
	 *
	 * @param {cc.Sprite} sprite
	 * @param {string} url
	 * @param {boolean} [reActive=false]
	 * @memberof LoaderManager
	 */
	public setExternalSprite(sprite: cc.Sprite, url: string, reActive: boolean = false): void {
		this.loadExternalAsset(
			url,
			gen_handler((tex: cc.Texture2D): any => {
				if (!sprite || !cc.isValid(sprite.node)) {
					cc.loader.release(url);

					return;
				}
				if (reActive) {
					sprite.node.active = true;
				}
				sprite.spriteFrame = new cc.SpriteFrame(tex);
			})
		);
	}

	/**
	 * 设置外部精灵帧
	 *
	 * @param {cc.Sprite} sprite
	 * @param {cc.SpriteFrame} frame
	 * @param {string} url
	 * @param {boolean} [reActive=false]
	 * @memberof LoaderManager
	 */
	public setExternalSpriteFrame(sprite: cc.Sprite, frame: cc.SpriteFrame, url: string, reActive: boolean = false): any {
		this.loadExternalAsset(
			url,
			gen_handler((tex: cc.Texture2D): any => {
				if (!sprite || !cc.isValid(sprite.node)) {
					cc.loader.release(url);

					return;
				}
				if (reActive) {
					sprite.node.active = true;
				}
				if (cc.isValid(frame)) {
					frame.setTexture(tex);
					sprite.spriteFrame = frame;
				}
			})
		);
	}

	/**
	 * 设置SPRITE
	 *
	 * @param {cc.Sprite} sprite
	 * @param {string} url
	 * @param {boolean} [reActive=false]
	 * @memberof LoaderManager
	 */
	public setSprite(sprite: cc.Sprite, url: string, reActive: boolean = false): any {
		this.loadRes(
			url,
			gen_handler((tex: cc.Texture2D): any => {
				if (!sprite || !cc.isValid(sprite.node)) {
					cc.loader.release(url);

					return;
				}
				if (reActive) {
					sprite.node.active = true;
				}
				sprite.spriteFrame = new cc.SpriteFrame(tex);
			})
		);
	}

	/**
	 * set sprite frame
	 *
	 * @param {cc.Sprite} sprite
	 * @param {cc.SpriteFrame} frame
	 * @param {string} url
	 * @param {boolean} [reActive=false]
	 * @memberof LoaderManager
	 */
	public setSpriteFrame(sprite: cc.Sprite, frame: cc.SpriteFrame, url: string, reActive: boolean = false): any {
		this.loadRes(
			url,
			gen_handler((tex: cc.Texture2D): any => {
				if (!sprite || !cc.isValid(sprite.node)) {
					cc.loader.release(url);

					return;
				}
				if (reActive) {
					sprite.node.active = true;
				}
				if (cc.isValid(frame)) {
					frame.setTexture(tex);
					sprite.spriteFrame = frame;
				}
			})
		);
	}

	/**
	 * set alias sprite frame
	 *
	 * @param {cc.Sprite} sprite
	 * @param {string} atlasUrl
	 * @param {string} spriteFrameName
	 * @param {boolean} [reActive=false]
	 * @memberof LoaderManager
	 */
	public setAtlasSprite(sprite: cc.Sprite, atlasUrl: string, spriteFrameName: string, reActive: boolean = false): any {
		this.loadRes(
			atlasUrl,
			gen_handler((atlas: cc.SpriteAtlas): any => {
				if (!sprite || !cc.isValid(sprite.node)) {
					cc.loader.release(atlasUrl);

					return;
				}
				if (reActive) {
					sprite.node.active = true;
				}
				sprite.spriteFrame = atlas.getSpriteFrame(spriteFrameName);
			}),
			cc.SpriteAtlas
		);
	}

	/**
	 * 从远程url下载资源
	 *
	 * @param {string} url
	 * @param {handler} cb
	 * @param {string} [type]
	 * @returns
	 * @memberof LoaderManager
	 */
	public loadExternalAsset(url: string, cb: handler, type?: string): any {
		const res: any = cc.loader.getRes(url);
		if (cc.isValid(res)) {
			// console.log("loadExternalAsset from cache");
			cb.exec(res);

			return;
		}
		cc.loader.load(type ? { url, type } : url, (err: any, res: any): any => {
			if (err) {
				cc.warn('loadExternalAsset error', url);

				return;
			}
			if (cc.isValid(res)) {
				this.cacheExternalAsset(url);
				cb.exec(res);
			}
		});
	}

	/**
	 * 从远程url下载资源列表
	 *
	 * @param {string[]} urls
	 * @param {handler} cb
	 * @param {string[]} [types]
	 * @returns
	 * @memberof LoaderManager
	 */
	public loadExternalAssets(urls: string[], cb: handler, types?: string[]): any {
		let loadedRes: any = {};
		let unloaded_urls: string[] = [];
		urls.forEach((url: string): any => {
			let res: any = cc.loader.getRes(url);
			if (cc.isValid(res)) {
				loadedRes[url] = res;
			} else {
				unloaded_urls.push(url);
			}
		});
		if (unloaded_urls.length === 0) {
			cb.exec(loadedRes);

			return;
		}

		const loadTasks: Array<any> = [];
		unloaded_urls.forEach((url: string, i: number): any => {
			types ? loadTasks.push({ url, type: types[i] }) : loadTasks.push(url);
		});
		cc.loader.load(loadTasks, (errs: any, ress: any): any => {
			// cc.log("loadExternalAssets from remote url");
			if (errs) {
				cc.warn('loadExternalAssets error', errs);

				return;
			}
			let isValid: boolean = true;
			unloaded_urls.forEach((url: string): any => {
				const res: any = ress.getContent(url);
				if (!cc.isValid(res)) {
					isValid = false;

					return;
				}
				loadedRes[url] = res;
				this.cacheExternalAsset(url);
			});
			if (isValid) {
				cb.exec(loadedRes);
			}
		});
	}

	/**
	 * 从resources目录加载asset
	 *
	 * @param {string} url
	 * @param {handler} cb
	 * @param {typeof cc.Asset} [assetType]
	 * @returns {void}
	 * @memberof LoaderManager
	 */
	public loadRes(url: string, cb: handler, assetType?: typeof cc.Asset): any {
		let res: any = cc.loader.getRes(url, assetType);
		if (cc.isValid(res)) {
			cb.exec(res);

			return;
		}
		cc.loader.loadRes(url, assetType, (err: any, res: any): any => {
			if (err) {
				cc.warn('loadAsset error', url);

				return;
			}
			if (cc.isValid(res)) {
				this.cacheAsset(res);
				cb.exec(res);
			}
		});
	}

	/**
	 * 从resources目录加载asset列表，省略资源后缀
	 *
	 * @param {string[]} urls
	 * @param {handler} cb
	 * @param {typeof cc.Asset[]} [assetTypes]
	 * @param {string[]} [alias]
	 * @returns {*}
	 * @memberof LoaderManager
	 */
	public loadResArray(urls: string[], cb: handler, assetTypes?: typeof cc.Asset[], alias?: string[]): any {
		// 加载同名资源时，需要手动给出不同的别名
		let loadedRes: any = {};
		let unloadedUrls: string[] = [];
		let unloaded_alias: string[];
		let unloadedTypes: typeof cc.Asset[];

		if (alias) {
			unloaded_alias = [];
		}
		if (assetTypes) {
			unloadedTypes = [];
		}
		urls.forEach((url: any, idx: any): any => {
			const resType: any = assetTypes ? assetTypes[idx] : null;
			const resAlias: any = alias ? alias[idx] : null;
			const res: any = cc.loader.getRes(url, resType);
			if (cc.isValid(res)) {
				loadedRes[resAlias || url] = res;
			} else {
				unloadedUrls.push(url);
				if (resType) {
					unloadedTypes.push(resType);
				}
				if (resAlias) {
					unloaded_alias.push(resAlias);
				}
			}
		});
		if (unloadedUrls.length === 0) {
			cb.exec(loadedRes);

			return;
		}
		cc.loader.loadResArray(unloadedUrls, (err: any): any => {
			if (err) {
				cc.warn('loadResArray error', unloadedUrls);

				return;
			}
			let isValid: any = true;
			unloadedUrls.forEach((url: any, idx: any): any => {
				const resType: any = unloadedTypes ? unloadedTypes[idx] : null;
				const resAlias: any = unloaded_alias ? unloaded_alias[idx] : null;
				const res: any = cc.loader.getRes(url, resType);
				if (!cc.isValid(res)) {
					isValid = false;

					return;
				}
				loadedRes[resAlias || url] = res;
				this.cacheAsset(res);
			});
			if (isValid) {
				cb.exec(loadedRes);
			}
		});
	}

	/**从resources目录加载prefab(省略资源后缀)，加载成功后生成prefab实例*/
	public loadPrefabObj(url: string, cb: handler): any {
		let res: cc.Prefab = cc.loader.getRes(url, cc.Prefab);
		if (cc.isValid(res)) {
			let node: cc.Node = cc.instantiate(res);
			cb.exec(node);

			return;
		}
		// err is typeof Error, err.message
		cc.loader.loadRes(url, cc.Prefab, (err: any, res: cc.Prefab): any => {
			if (err) {
				cc.warn('loadPrefabObj error', url);

				return;
			}
			if (cc.isValid(res)) {
				this.cacheAsset(res);
				let node: cc.Node = cc.instantiate(res);
				cb.exec(node);
			}
		});
	}

	/**从resources目录加载prefab列表(省略资源后缀)，加载成功后生成prefab实例*/
	public loadPrefabObjArray(urls: string[], cb: handler): any {
		let loaded_obj: any = {};
		let unloadedUrls: string[] = [];
		urls.forEach((url: string): any => {
			const res: cc.Prefab = cc.loader.getRes(url, cc.Prefab);
			if (cc.isValid(res)) {
				loaded_obj[url] = cc.instantiate(res);
			} else {
				unloadedUrls.push(url);
			}
		});
		if (unloadedUrls.length === 0) {
			cb.exec(loaded_obj);

			return;
		}
		cc.loader.loadResArray(unloadedUrls, cc.Prefab, (err: any): any => {
			if (err) {
				cc.warn('loadPrefabObjArray error', unloadedUrls);

				return;
			}
			let isValid: any = true;
			unloadedUrls.forEach((url: any): any => {
				const res: cc.Prefab = cc.loader.getRes(url, cc.Prefab);
				if (!cc.isValid(res)) {
					isValid = false;

					return;
				}
				loaded_obj[url] = cc.instantiate(res);
				this.cacheAsset(res);
			});
			if (isValid) {
				cb.exec(loaded_obj);
			}
		});
	}

	/**
	 * 加载预置体目录内容
	 *
	 * @param {string} dirPath
	 * @param {handler} cb
	 * @memberof LoaderManager
	 */
	public loadPrefabDir(dirPath: string, cb: handler): any {
		let map: any = {};
		cc.loader.loadResDir(dirPath, cc.Prefab, (err: any, res_arr: any[], urls: string[]): any => {
			if (err) {
				cc.warn('loadPrefabObjDir error', dirPath);

				return;
			}
			let isValid: any = true;
			urls.forEach((url: any): any => {
				const res: cc.Prefab = cc.loader.getRes(url, cc.Prefab);
				if (!cc.isValid(res)) {
					isValid = false;

					return;
				}
				map[url] = res;
				this.cacheAsset(res);
			});
			if (isValid) {
				cb.exec(map);
			}
		});
	}

	public loadPrefabObjDir(dir_path: string, cb: handler): void {
		let map: any = {};
		cc.loader.loadResDir(dir_path, cc.Prefab, (err: any, res_arr: any[], urls: string[]) => {
			if (err) {
				cc.warn('loadPrefabObjDir error', dir_path);
				return;
			}
			let isValid = true;
			urls.forEach((url) => {
				const res: cc.Prefab = cc.loader.getRes(url, cc.Prefab);
				if (!cc.isValid(res)) {
					isValid = false;
					return;
				}
				map[url] = cc.instantiate(res);
				this.cacheAsset(res);
			});
			if (isValid) {
				cb.exec(map);
			}
		});
	}

	private cacheAsset(asset: cc.Asset) {
		if (cc.isValid(asset)) {
			const key: string = cc.loader._getReferenceKey(asset);
			if (key) {
				this.loadedResource.set(key, true);
			}
		}
	}

	private cacheExternalAsset(url: string) {
		this.loadedExternalUrlList.set(url, true);
	}

	public releaseAll(excludeMap = null) {
		const leftRes: Map<string, boolean> = new Map();
		this.loadedResource.forEach((_, res) => {
			const deps = cc.loader.getDependsRecursively(res);
			deps.forEach((d) => {
				if (!d) {
					return;
				}
				// cc.log(`loaderMgr release loadedRes, dep=${d}, exclude=${excludeMap ? excludeMap[d] : false}`);
				if (!excludeMap || !excludeMap[d]) {
					cc.loader.release(d);
				} else {
					leftRes.set(d, true);
				}
			});
		});
		this.loadedResource.clear();
		leftRes.forEach((_, d) => {
			this.loadedResource.set(d, true);
		});

		// 释放外部资源
		this.loadedExternalUrlList.forEach((_, url) => {
			// cc.log(`loaderMgr release loadedExternalRes, url=${url}`);
			cc.loader.release(url);
		});
		this.loadedExternalUrlList.clear();

		cc.sys.garbageCollect();
		// this.dump();
	}

	public dump() {
		cc.log('---------------------loader_mgr dump begin--------------------------');
		const cache = cc.loader._cache;
		let count = 0;
		for (let id in cache) {
			count++;
			cc.log(`id=${id}, value=${cache[id]}`);
		}
		cc.log(`---------------------loader_mgr dump end, totalCount=${count}--------------------------`);
	}
}
