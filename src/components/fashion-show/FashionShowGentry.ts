/**
 * T DEMO
 *
 * @export
 * @class FashionShowGentry
 * @template T
 */
export class FashionShowGentry<T> {
	private data: Array<T> = [];

	/**
	 * push
	 *
	 * @param {T} item
	 * @returns {Array<T>}
	 * @memberof FashionShowGentry
	 */
	public push(item: T): number {
		return this.data.push(item);
	}

	/**
	 * pop
	 *
	 * @returns {(T | undefined)}
	 * @memberof FashionShowGentry
	 */
	public pop(): T | undefined {
		return this.data.shift();
	}
}

/** test */
const quene: FashionShowGentry<number> = new FashionShowGentry<number>();

quene.push(1);
// quene.push('1');
// quene.push('1');
// quene.push(d);
