/**
 * algorithm
 *
 * @export
 * @class TestAlgorithm
 */
export class TestAlgorithm {
	/**
	 * deep clonse
	 *
	 * @param {*} obj
	 * @returns {*}
	 * @memberof TestAlgorithm
	 */
	public deepClone(obj: any): any {
		// exclude null
		if (obj === null) {
			return obj;
		}

		// exclude date
		if (obj instanceof Date) {
			return new Date(obj);
		}

		// exclude reg
		if (obj instanceof RegExp) {
			return new RegExp(obj);
		}

		// basic data
		if (typeof obj !== 'object') {
			return obj;
		}

		const cloneObj: any = new obj.constructor();
		for (const key in obj) {
			if (obj.hasOwnProperty(key)) {
				cloneObj[key] = this.deepClone(obj[key]);
			}
		}

		return cloneObj;
	}

	/**
	 * green
	 *
	 * @memberof TestAlgorithm
	 */
	public green(): void {
		console.log('green');
	}

	/**
	 * red
	 *
	 * @memberof TestAlgorithm
	 */
	public red(): void {
		console.log('red');
	}

	/**
	 * yellow
	 *
	 * @memberof TestAlgorithm
	 */
	public yellow(): void {
		console.log('yellow');
	}

	/**
	 * task
	 *
	 * @param {*} timer
	 * @param {*} light
	 * @returns {Promise<any>}
	 * @memberof TestAlgorithm
	 */
	public task(timer: any, light: any): Promise<any> {
		return new Promise((resolve: any, reject: any): any => {
			setTimeout((): any => {
				switch (light) {
					case 'red':
						this.red();
						break;
					case 'yellow':
						this.yellow();
						break;
					case 'green':
						this.green();
						break;
				}
			}, timer);
		});
	}

	/**
	 * step console green yellow red light
	 *
	 * @returns {Promise<any>}
	 * @memberof TestAlgorithm
	 */
	public async step(): Promise<any> {
		await this.task(3000, 'red');
		await this.task(1000, 'green');
		await this.task(2000, 'yellow');
		this.step();
	}
}