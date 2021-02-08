/**
 * algorithm
 *
 * @export
 * @class TestAlgorithm
 */
export class TestAlgorithm {
	/**
	 * implement bind
	 *
	 * @memberof TestAlgorithm
	 */
	public bindMethod(): void {
        Function.prototype._bind = (ctx: any): any => {
            let self: any = this;

            return (): any => {
                self.call(ctx, ...arguments)
            }
        }
    }
}
