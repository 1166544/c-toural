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
		console.log(this.flatArray());
		console.log(this.unique());
	}

	private unique(arr: Array = [])
}

export default new Test();