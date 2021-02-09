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
	 * process
	 *
	 * @private
	 * @memberof Test
	 */
	private process(): void {
		// delegate event
		this.delegate();
		this.flatArray();
	}

	/**
	 * 扁平化ARRAY
	 *
	 * @private
	 * @memberof Test
	 */
	private flatArray(): void {
        const arr: Array<any> = [1, 3, 4, [32, 32, 2, 1, 'ddss']];
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            
        }
	}

	/**
	 * delegate event
	 *
	 * @private
	 * @memberof Test
	 */
	private delegate(): void {
		document.getElementById('test-id').onclick = (event: any): any => {
			event = event || window.event;
			const target: any = event.target || event.scrElement;
			console.log(target);
		};
	}
}

export default new Test();