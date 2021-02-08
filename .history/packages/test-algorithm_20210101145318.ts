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
	 * implement bind
	 *
	 * @memberof TestAlgorithm
	 */
	public bindMethod(): void {
		Function.prototype._bind = (ctx: any): any => {
			const self: any = this;

			return (): any => {
				self.call(ctx, ...arguments);
			};
		}; 

		/**
		 * a
		 *
		 * @param {*} m
		 * @param {*} n
		 * @param {*} o
		 * @returns {*}
		 */
		// tslint:disable-next-line:completed-docs
		function a(m: any, n: any, o: any): any {
			console.log(this.name + ' ' + m + ' ' + n + ' ' + o);
		}
		const b: any = {
			name: 'king',
		};

		// ds e
		a._bind(b)(7, 8, 9);
	}
}
