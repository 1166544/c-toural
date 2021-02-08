import { handler } from '../utils/Utils';

/**
 * API服务
 *
 * @export
 * @class NetworkHttpService
 */
export class NetworkHttpService {
	private static instance: NetworkHttpService;

	constructor() {
		// hole
	}

	/**
	 * 单例
	 *
	 * @static
	 * @returns {NetworkHttpService}
	 * @memberof NetworkHttpService
	 */
	public static getInstance(): NetworkHttpService {
		if (!this.instance) {
			this.instance = new NetworkHttpService();
		}

		return this.instance;
	}

	/**
	 * get
	 *
	 * @param {string} url
	 * @param {*} headers
	 * @param {*} params
	 * @param {handler} cb
	 * @memberof NetworkHttpService
	 */
	public doGet(url: string, headers: any, params: any, cb: handler): any {
		if (params) {
			if (url.indexOf('?') === -1) {
				// tslint:disable-next-line: no-parameter-reassignment
				url += '?';
			}

			// tslint:disable-next-line: no-parameter-reassignment
			url += this.getQueryString(params);
		}
		this.doHttp(url, headers, null, 'GET', cb);
	}

	/**
	 * post
	 *
	 * @param {string} url
	 * @param {*} headers
	 * @param {*} params
	 * @param {handler} cb
	 * @memberof NetworkHttpService
	 */
	public doPost(url: string, headers: any, params: any, cb: handler): any {
		this.doHttp(url, headers, params, 'POST', cb);
	}

	/**
	 * download
	 *
	 * @memberof NetworkHttpService
	 */
	public doDownload(): any {
		// hole
	}

	/**
	 * do http
	 *
	 * @private
	 * @param {string} url
	 * @param {*} headers
	 * @param {*} params
	 * @param {string} method
	 * @param {handler} cb
	 * @memberof NetworkHttpService
	 */
	private doHttp(url: string, headers: any, params: any, method: string, cb: handler): any {
		const xhr: XMLHttpRequest = new XMLHttpRequest();
		xhr.responseType = 'text';
		xhr.onreadystatechange = this.onReadyStateChange.bind(this, xhr, cb);
		xhr.ontimeout = this.onTimeout.bind(this, xhr, url);
		xhr.onerror = this.onError.bind(this, xhr, url);
		xhr.onabort = this.onAbort.bind(this, xhr, url);

		cc.log(`HttpService, doHttp url=${url}, method=${method}, parmas=${params}`);
		xhr.open(method, url, true);
		if (headers) {
			this.setHttpHeaders(xhr, headers);
		}
		if (cc.sys.isNative) {
			this.setHttpHeaders(xhr, { 'Accept-Encoding': 'gzip,deflate' });
		}
		if (params && typeof params === 'object') {
			// tslint:disable-next-line: no-parameter-reassignment
			params = JSON.stringify(params);
		}
		xhr.send(params);
	}

	/**
	 * on ready state change
	 *
	 * @private
	 * @param {XMLHttpRequest} xhr
	 * @param {handler} cb
	 * @memberof NetworkHttpService
	 */
	private onReadyStateChange(xhr: XMLHttpRequest, cb: handler): any {
		cc.log(`HttpService, onReadyStateChange, readyState=${xhr.readyState}, status=${xhr.status}`);
		if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
			cc.log(`HttpService, onReadyStateChange, responseText=${xhr.responseText}`);
			let data: any;
			// tslint:disable-next-line: no-use-before-declare
			let code: any = HttpCode.kUnknown;
			const response: any = JSON.parse(xhr.responseText);
			if (response && response.code) {
				code = response.code;
				data = response.content;
			} else {
				// tslint:disable-next-line: no-use-before-declare
				code = HttpCode.kSuccess;
				data = response;
			}
			this.notifyCallback(cb, code, data);
			this.removeXhrEvent(xhr);
		}
	}

	/**
	 * on time out
	 *
	 * @private
	 * @param {XMLHttpRequest} xhr
	 * @param {string} url
	 * @memberof NetworkHttpService
	 */
	private onTimeout(xhr: XMLHttpRequest, url: string): any {
		cc.warn(`${url}, request ontimeout`);
		this.removeXhrEvent(xhr);
	}

	/**
	 * on error
	 *
	 * @private
	 * @param {XMLHttpRequest} xhr
	 * @param {string} url
	 * @memberof NetworkHttpService
	 */
	private onError(xhr: XMLHttpRequest, url: string): any {
		cc.warn(`${url}, request onerror`);
		this.removeXhrEvent(xhr);
	}

	/**
	 * on abort
	 *
	 * @private
	 * @param {XMLHttpRequest} xhr
	 * @param {string} url
	 * @memberof NetworkHttpService
	 */
	private onAbort(xhr: XMLHttpRequest, url: string): any {
		cc.warn(`${url}, request onabort`);
		this.removeXhrEvent(xhr);
	}

	/**
	 * remove xhr event
	 *
	 * @private
	 * @param {XMLHttpRequest} xhr
	 * @memberof NetworkHttpService
	 */
	private removeXhrEvent(xhr: XMLHttpRequest): any {
		xhr.ontimeout = null;
		xhr.onerror = null;
		xhr.onabort = null;
		xhr.onreadystatechange = null;
	}

	/**
	 * notify callback
	 *
	 * @private
	 * @param {handler} cb
	 * @param {number} code
	 * @param {*} [data]
	 * @memberof NetworkHttpService
	 */
	private notifyCallback(cb: handler, code: number, data?) {
		if (cb) {
			cb.exec(code, data);
		}
	}

	private setHttpHeaders(xhr: XMLHttpRequest, headers) {
		for (let key in headers) {
			xhr.setRequestHeader(key, headers[key]);
		}
	}

	private getQueryString(params) {
		const tmps: string[] = [];
		for (let key in params) {
			tmps.push(`${key}=${params[key]}`);
		}
		return tmps.join('&');
	}
}

export enum HttpCode {
	kSuccess = 0,
	kTimeout = 10000,
	kUnknown = 10001,
	kSessionTimeout = -8,
	kIAmInBlocklist = -3013,
	kUserIsInMyBlocklist = -3014,
}
