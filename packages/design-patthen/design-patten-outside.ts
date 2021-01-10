/**
 * 外观模式
 * 子系统中的一组接口提供一个一致的界面，定义一个高层接口，这个接口使子系统更加容易使用
 * 核心：可以通过请求外观接口来达到访问子系统，也可以选择越过外观来直接访问子系统
 * @export 
 * @class TestDesignPatten
 */
export class DesignPattenOutside {
	constructor() {
		this.init();
	}

	/**
	 * 外观方法
	 * 统一处理，方便调用
	 *
	 * @memberof DesignPattenOutside
	 */
	public execute(): void {
		this.start();
		this.doing();
		this.end();
	}

	/**
	 * 初始化
	 *
	 * @memberof DesignPattenOutside
	 */
	public init(): void {
		// 直接调用高层函数，也可以选择越过它调用相关函数
		this.execute();
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
