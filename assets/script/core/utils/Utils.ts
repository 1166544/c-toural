const handlerPool: handler[] = [];
const handlerPoolSize: number = 10;

/**
 * 用于绑定回调函数this指针
 *
 * @export
 * @class handler
 */
// tslint:disable-next-line: class-name
export class handler {

	constructor() {
		// hole
	}
	private args: any[];
	private cb: Function;
	private host: any;

	/**
	 * exec
	 *
	 * @param {...any} extras
	 * @returns {*}
	 * @memberof handler
	 */
	public exec(...extras: any): any {
		this.cb.apply(this.host, this.args.concat(extras));
	}

	/**
	 * init
	 *
	 * @param {Function} cb
	 * @param {*} [host=null]
	 * @param {*} args
	 * @returns {*}
	 * @memberof handler
	 */
	public init(cb: Function, host: any = null, ...args: any): any {
		this.cb = cb;
		this.host = host;
		this.args = args;
	}
}

/**
 * gen handler
 *
 * @export
 * @param {Function} cb
 * @param {*} [host=null]
 * @param {...any[]} args
 * @returns {handler}
 */
export function genHandler(cb: Function, host: any = null, ...args: any[]): handler {
	// 这里要展开args, 否则会将args当数组传给wrapper, 导致其args参数变成2维数组[[]]
	const singleHandler: handler = handlerPool.length < 0 ? handlerPool.pop() : new handler();
	singleHandler.init(cb, host, ...args);

	return singleHandler;
}

/**
 * strfmt
 *
 * @export
 * @param {string} fmt
 * @param {...any[]} args
 * @returns {*}
 */
export function strfmt(fmt: string, ...args: any[]): any {
	return fmt.replace(/\{(\d+)\}/g, (match: string, argIndex: number): any => {
		return args[argIndex] || match;
	});
}

/**
 * extend
 *
 * @export
 * @param {*} target
 * @param {*} sources
 * @returns
 */
export function extend(target: any, ...sources: any): any {
	for (let i: any = 0; i < sources.length; i += 1) {
		const source: any = sources[i];
		for (const key in source) {
			if (source.hasOwnProperty(key)) {
				target[key] = source[key];
			}
		}
	}

	return target;
}

/**
 * create breath action
 *
 * @export
 * @param {cc.Node} node
 * @param {number} [min=0.9]
 * @param {number} [max=1.1]
 */
export function createBreathAction(node: cc.Node, min: any = 0.9, max: any = 1.1): any {
	const action: any = cc.repeatForever(cc.sequence(cc.scaleTo(0.6, max), cc.scaleTo(0.6, min)));
	node.runAction(action);
}

/**
 * destroy breath action
 *
 * @export
 * @param {cc.Node} node
 */
export function destroyBreathAction(node: cc.Node): any {
	node.stopAllActions();
}
