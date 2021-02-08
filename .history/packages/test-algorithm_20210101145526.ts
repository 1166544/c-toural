/**
 * algorithm
 *
 * @export
 * @class TestAlgorithm
 */
export class TestAlgorithm {

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
		return new Promise(
			(resolve: any, reject: any): any => {
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
			}
		);
	}

	public step: any = async () => {
		await this.task(3000, 'red');
		await this.task(1000, 'green');
		await this.task(2000, 'yellow');
		step();
	};
}
