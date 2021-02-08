import { ConstConfig } from '../config/ConstConfig';
const { ccclass, property } = cc._decorator;

/**
 * play attack effect r
 *
 * @export
 * @class PlayAttackEffectR
 * @extends {cc.Component}
 */
@ccclass
export class PlayAttackEffectR extends cc.Component {
	/**
	 * 技能运行速度.
	 */
	private speed: number = ConstConfig.ATTACKEFFECT_SPEED;

	/**
	 * onload
	 *
	 * @protected
	 * @memberof PlayAttackEffectR
	 */
	protected onLoad(): void {
		cc.log('释放技能');
	}

	/**
	 * update
	 *
	 * @protected
	 * @param {number} dt
	 * @memberof PlayAttackEffectR
	 */
	protected update(dt: number): void {
		this.node.x -= this.speed * dt;
	}

	/**
	 * on collision enter
	 *
	 * @param {*} other
	 * @param {*} self
	 * @memberof PlayAttackEffectR
	 */
	public onCollisionEnter(other: any, self: any): void {
		this.node.destroy();
		cc.log('清除技能');
	}
}
