/**
 * complete logs
 *
 * @export
 * @class Test
 */
export class Test {
	constructor() {
		this.process();
	}

	/**
	 * delegate event
	 *
	 * @private
	 * @memberof Test
	 */
	private delegate(): void {
		// document.getElementById('test-id').onclick = (event: any): any => {
		// 	const newEvent: any = event || window.event;
		// 	const target: any = newEvent.target || newEvent.scrElement;
		// 	console.log(target, newEvent);
		// };
	}

	/**
	 * 扁平化ARRAY
	 *
	 * @private
	 * @memberof Test
	 */
	private flatArray(arr: Array<any> = [1, 3, 4, [32, 32, 2, 1, 'ddss']]): void {
		let result: any = [];
		for (let index: number = 0; index < arr.length; index++) {
			const element: any = arr[index];
			if (Array.isArray(element)) {
				// 如果遍历的元素为数组，继续递归
				result = result.concat(this.flatArray(element));
			} else {
				result.push(element);
			}
		}

		return result;
	}

	/**
	 * process
	 *
	 * @private
	 * @memberof Test
	 */
	private process(): void {
		// delegate event
		// this.delegate();
		// console.log(this.flatArray());
		// console.log(this.unique());
		// console.log(this.trimStr());
		console.log(this.startcombine());
	}

	/**
	 * combine
	 *
	 * @private
	 * @param {string} [str='abdd3fsfjlkfjfkjsl4jfd']
	 * @returns {string}
	 * @memberof Test
	 */
	private startcombine(str: string = 'abdd3fsfjlkfjfkjsl4jfd'): any {
		if (str.length === 1) {
			return [str];
		}

		let result: Array<any> = [];
		for (const i: any in str) {

		}
	}

	/**
	 * trim
	 *
	 * @private
	 * @param {string} [str=' ad  ds ']
	 * @returns {string}
	 * @memberof Test
	 */
	private trimStr(str: string = ' xxaddsxx '): string {
		return str.replace(/(^s+)|(s+$)/gi, '');
	}

	/**
	 * for unique
	 *
	 * @private
	 * @param {Array} [arr=[]]
	 * @returns {*}
	 * @memberof Test
	 */
	private unique(arr: Array<any> = [1, 1, 23, 3, 4, 5, 54, 5, 3, 323, 5, 33, 2, 2, 2, 2, 4]): any {
		const appeared: any = new Set();

		// filter()方法创建一个新的数组，新数组中元素通过检查指定数组中符合什么样件的所有元素组成
		return arr.filter((item: any): any => {
			const id: any = item + JSON.stringify(item);

			if (appeared.has(id)) {
				return false;
			} else {
				appeared.add(id);

				return true;
			}
		});
	}
}

export default new Test();
