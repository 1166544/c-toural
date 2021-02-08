/**
 * 外观模式
 * 子系统中的一组接口提供一个一致的界面，定义一个高层接口，这个接口使子系统更加容易使用
 * 核心： 可以通过请求外观接口来达到访问子系统，也可以选择越过外观来直接访问子系统
 * @export
 * @class TestDesignPatten
 */
export class DesignPattenOutside {
	constructor() {
		// hole
	}

	/**
	 * start
	 *
	 * @memberof DesignPattenOutside
	 */
	public start(): void {
		console.log('start');
	}

	/**
	 * doing
	 *
	 * @memberof DesignPattenOutside
	 */
	public doing(): void {
		console.log('doing');
	}

	/**
	 * end
	 *
	 * @memberof DesignPattenOutside
	 */
	public end(): void {
		console.log('end');
	}
}

export default new DesignPattenOutside();
