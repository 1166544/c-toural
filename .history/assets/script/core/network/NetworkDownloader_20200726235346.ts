/**
 * 下载器
 * 同个文件只会下载一次,并发下载数量限制,失败重试机制
 *
 * @export
 * @class NetworkDownloader
 */
export class NetworkDownloader {
	private static instance: NetworkDownloader;
	private jsbDownloaderPool: any[];
	private maxDownloadingCnt: number;
	private downloadingCnt: number;
	private downloadQueue: DownloadItem[]; // 等待下载列表
	private downloadedMap: Map<string, DownloadTask>; // 已下载资源列表，url -> DownloadTask
	private downloadingMap: Map<string, DownloadItem[]>; // 下载同一个url的item列表

	private constructor() {
		if (!CC_JSB) {
			cc.warn('Downloader is a NATIVE ONLY feature.');
		}
		this.maxDownloadingCnt = 2;
		this.downloadingCnt = 0;
	}

	/**
	 * 单例
	 *
	 * @static
	 * @returns
	 * @memberof NetworkDownloader
	 */
	public static getInstance(): any {
		if (!this.instance) {
			this.instance = new NetworkDownloader();
		}

		return this.instance;
	}

	/**
	 * download file
	 *
	 * @param {DownloadItem} item
	 * @returns
	 * @memberof NetworkDownloader
	 */
	public downloadFile(item: DownloadItem): any {
		const requestURL: any = item.requestURL;

		// 之前下载过
		const task: any = this.downloadedMap ? this.downloadedMap.get(requestURL) : null;
		if (task && item.onFileTaskSuccess) {
			item.onFileTaskSuccess(task);
			this.downloadQueueItem();

			return;
		}

		// 大于最大并发数量，需要等待当前item下载完成
		if (this.downloadingCnt >= this.maxDownloadingCnt) {
			this.downloadQueue = this.downloadQueue || [];
			this.downloadQueue.push(item);

			return;
		}

		// 同一url只下载一次
		this.downloadingMap = this.downloadingMap || new Map();
		let downloadingItems: any = this.downloadingMap.get(requestURL);
		if (!downloadingItems) {
			downloadingItems = [];
			this.downloadingMap.set(requestURL, downloadingItems);
		}
		downloadingItems.push(item);
		if (downloadingItems.length > 1) {
			return;
		}

		// 创建下载任务
		let jsbDownloader: any = this.popJsbDownloader();
		jsbDownloader.setOnTaskProgress(this.onTaskProgress.bind(this, requestURL));
		jsbDownloader.setOnFileTaskSuccess(this.onFileTaskSuccess.bind(this, requestURL, jsbDownloader));
		jsbDownloader.setOnTaskError(this.onTaskError.bind(this, requestURL, jsbDownloader));
		jsbDownloader.createDownloadFileTask(requestURL, item.storagePath);
		this.downloadingCnt++;
		cc.log(`Downloader, downloadFile, url=${requestURL}, downloadingCnt=${this.downloadingCnt}`);
	}

	/**
	 * purge
	 *
	 * @memberof NetworkDownloader
	 */
	public purge(): any {
		if (this.jsbDownloaderPool) {
			this.jsbDownloaderPool.length = 0;
		}
	}

	/**
	 * download queue item
	 *
	 * @private
	 * @returns
	 * @memberof NetworkDownloader
	 */
	private downloadQueueItem(): any {
		if (!this.downloadQueue || this.downloadQueue.length < 1) {
			cc.log('Downloader, no queue or all queue item had been downloaded');

			return;
		}
		const item: any = this.downloadQueue.pop();
		this.downloadFile(item);
	}

	/**
	 * on task progress
	 *
	 * @private
	 * @param {string} requestURL
	 * @param {DownloadTask} task
	 * @param {number} bytesReceived
	 * @param {number} totalBytesReceived
	 * @param {number} totalBytesExpected
	 * @memberof NetworkDownloader
	 */
	private onTaskProgress(requestURL: string, task: DownloadTask, bytesReceived: number, totalBytesReceived: number, totalBytesExpected: number): any {
		if (this.downloadingMap) {
			const downloadingItems: any = this.downloadingMap.get(requestURL);
			downloadingItems.forEach((item: any): any => {
				if (item.onTaskProgress) {
					item.onTaskProgress(task, bytesReceived, totalBytesReceived, totalBytesExpected);
				}
			});
		}
	}

	/**
	 * on faile task success
	 *
	 * @private
	 * @param {string} requestURL
	 * @param {*} jsbDownloader
	 * @param {DownloadTask} task
	 * @memberof NetworkDownloader
	 */
	private onFileTaskSuccess(requestURL: string, jsbDownloader: any, task: DownloadTask): any {
		// 保存下载后的地址
		this.downloadedMap = this.downloadedMap || new Map();
		this.downloadedMap.set(requestURL, task);

		// 通知downloadItem下载完成
		if (this.downloadingMap) {
			const downloadingItems: any = this.downloadingMap.get(requestURL);
			downloadingItems.forEach((item: any): any => {
				if (item.onFileTaskSuccess) {
					item.onFileTaskSuccess(task);
				}
			});
			downloadingItems.length = 0;
			this.downloadingMap.delete(requestURL);
		}

		this.pushJsbDownloader(jsbDownloader);
		this.downloadingCnt--;
		cc.log(`Downloader, onFileTaskSuccess, url=${requestURL}, downloadingCnt=${this.downloadingCnt}`);
		this.downloadQueueItem();
	}

	/**
	 * on task error
	 *
	 * @private
	 * @param {string} requestURL
	 * @param {*} jsbDownloader
	 * @param {DownloadTask} task
	 * @param {number} errCode
	 * @param {number} errCodeInternal
	 * @param {string} errStr
	 * @memberof NetworkDownloader
	 */
	private onTaskError(requestURL: string, jsbDownloader: any, task: DownloadTask, errCode: number, errCodeInternal: number, errStr: string): any {
		if (this.downloadingMap) {
			const downloadingItems: any = this.downloadingMap.get(requestURL);
			downloadingItems.forEach((item) => {
				if (item.onTaskError) {
					item.onTaskError(task, errCode, errStr);
				}
			});
			downloadingItems.length = 0;
			this.downloadingMap.delete(requestURL);
		}

		this.pushJsbDownloader(jsbDownloader);
		this.downloadingCnt--;
		cc.log(`Downloader, onTaskError, url=${requestURL}, downloadingCnt=${this.downloadingCnt}`);
		this.downloadQueueItem();
	}

	private popJsbDownloader() {
		let jsbDownloader = null;
		if (this.jsbDownloaderPool) {
			jsbDownloader = this.jsbDownloaderPool.pop();
		}
		if (!jsbDownloader) {
			jsbDownloader = new jsb.Downloader();
		}
		return jsbDownloader;
	}

	private pushJsbDownloader(jsbDownloader) {
		jsbDownloader.setOnTaskProgress(null);
		jsbDownloader.setOnFileTaskSuccess(null);
		jsbDownloader.setOnTaskError(null);
		this.jsbDownloaderPool = this.jsbDownloaderPool || [];
		this.jsbDownloaderPool.push(jsbDownloader);
	}
}

interface DownloadItem {
	requestURL: string;
	storagePath: string;
	onTaskProgress?: (task: DownloadTask, bytesReceived: number, totalBytesReceived: number, totalBytesExpected: number) => void;
	onTaskError?: (task: DownloadTask, errCode: number, errStr: string) => void;
	onFileTaskSuccess?: (task: DownloadTask) => void;
}

export interface DownloadTask {
	requestURL: string;
	storagePath: string;
}
