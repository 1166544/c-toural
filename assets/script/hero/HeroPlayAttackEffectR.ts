import { ConstConfig } from '../config/ConfigConst';
const { ccclass, property } = cc._decorator;

/**
 * 播放攻击特效
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
		this.node.x += this.speed * dt;
	}
}
