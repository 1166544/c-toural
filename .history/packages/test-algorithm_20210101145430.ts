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
			(resolve, reject) => {
				setTimeout(() => {
					switch(light) {
						case 'red':
						red();
						break;
						case 'yellow':
						yellow();
						break;
						case 'green':
						green();
						break;
					}
				}, timer);
			}
		);
	}
	let step = async () => {
		await task(3000, 'red');
		await task(1000, 'green');
		await task(2000, 'yellow');
		step();
	}
}
