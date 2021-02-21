/**
 * 泛型示例
 *
 * @export
 * @class FashionShowGreeter
 */
export class FashionShowGreeter<T> {
	private greeting!: T;

	constructor(message: T) {
		this.greeting = message;
	}

	/**
	 * 泛型调用
	 *
	 * @returns {T}
	 * @memberof FashionShowGreeter
	 */
	public greet(): T {
		return this.greeting;
	}
}
