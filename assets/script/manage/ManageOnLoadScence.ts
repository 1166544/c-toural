const { ccclass, property } = cc._decorator;

/**
 * 加载场景
 *
 * @export
 * @class OnLoadScence
 * @extends {cc.Component}
 */
@ccclass
export class OnLoadScence extends cc.Component {

	/**
	 * process bar
	 *
	 * @private
	 * @type {cc.Node}
	 * @memberof OnLoadScence
	 */
	@property(cc.Node)
	private processBar: cc.Node = null;

	/**
	 * 进度条填充
	 */
	@property(cc.Sprite)
	private processUi: cc.Sprite = null;
	/**
	 * 开始游戏按钮
	 */
	@property(cc.Node)
	private startButton: cc.Node = null;

	/**
	 * 加载
	 *
	 * @protected
	 * @memberof OnLoadScence
	 */
	protected onLoad(): void {
		// 设置点击事件
		this.startButton.on(cc.Node.EventType.TOUCH_START, this.changeScence, this);
		this.startButton.on(cc.Node.EventType.TOUCH_END, this.changeScenceOver, this);
		this.startButton.on(cc.Node.EventType.TOUCH_CANCEL, this.changeScenceOver, this);
	}

	/**
	 * 切换场景
	 *
	 * @example
	 */
	private changeScence(): void {
		// 进度条显示
		this.processBar.opacity = 255;
		let i: number = 0;
		const that: any = this;

		// 加载进度条
		this.schedule(
			(): any => {
				that.processUi.fillRange = i / 100;
				i += 10;
			},
			0.05,
			10
		);
		// 跳转场景
		this.scheduleOnce((): any => {
			// 进度条加载完成,跳转场景
			cc.director.loadScene('game');
		}, 0.5);
	}

	/**
	 * 按钮取消
	 *
	 * @example
	 */
	private changeScenceOver(): void {
		// hole
	}
}
