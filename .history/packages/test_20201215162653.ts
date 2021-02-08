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
        const arr: Array<any> = []
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
