import { ConstConfig } from '../config/ConstConfig';
const { ccclass, property } = cc._decorator;

/**
 * monster 1
 *
 * @export
 * @class Monster1
 * @extends {cc.Component}
 */
@ccclass
export class Monster1 extends cc.Component {
	/**
	 * 怪物1
	 */
	@property(cc.Node)
	private monster1: cc.Node = null;

	/**
	 * Monster1血量，默认为20
	 */
	private static monster1Blood: number = ConstConfig.MONSTER1_BLOOD;

	/**
	 * 怪物跳跃次数
	 */
	private static runTag: number = 0;

	/**
	 * onload
	 *
	 * @protected
	 * @memberof Monster1
	 */
	protected onLoad(): void {
		const monsterAnimation1: cc.Animation = this.monster1.getComponent(cc.Animation);

		cc.log(this.monster1.position);

		// 每隔5秒跳跃
		this.schedule(this.monster1Run, 5);
	}

	/**
	 * start
	 *
	 * @protected
	 * @memberof Monster1
	 */
	protected start(): void {
		// hole
	}

	/**
	 * update
	 *
	 * @protected
	 * @memberof Monster1
	 */
	protected update(): void {
		// hole
	}

	/**
	 * 蛤蟆怪1自动跳跃函数
	 *
	 * @example
	 */
	private monster1Run(): void {
		const monsterAnimation1: cc.Animation = this.monster1.getComponent(cc.Animation);

		if (Monster1.runTag !== 0) {
			// 获取monster1动画
			Monster1.runTag = 0;
			this.monster1.scaleX = -1.5;
			monsterAnimation1.play('monster1Run');

			// x: 952.9921310122072 y: -102.21121065669007
			const moveBegin: cc.ActionInterval = cc.moveTo(0.3, 953 - 200, -102);
			const moveOn: cc.ActionInterval = cc.moveTo(0.3, 953 - 100, -102 + 80);
			const moveEnd: cc.ActionInterval = cc.moveTo(0.3, 953, -102);
			const seq: cc.ActionInterval = cc.sequence(moveBegin, moveOn, moveEnd);

			this.monster1.runAction(seq);
		} else {
			// 获取monster1动画
			this.monster1.scaleX = 1.5;
			monsterAnimation1.play('monster1Run');

			// x: 952.9921310122072     y: -102.21121065669007
			const moveBegin: cc.ActionInterval = cc.moveTo(0.3, 953, -102);
			const moveOn: cc.ActionInterval = cc.moveTo(0.3, 953 - 100, -102 + 80);
			const moveEnd: cc.ActionInterval = cc.moveTo(0.3, 953 - 200, -102);
			const seq: cc.ActionInterval = cc.sequence(moveBegin, moveOn, moveEnd);

			this.monster1.runAction(seq);
			Monster1.runTag++;
		}
	}

	/**
	 * 碰撞检测
	 *
	 * @param other - Other
	 * @param self - Self
	 * @example
	 */
	public onCollisionEnter(other: any, self: any): void {
		// 如果碰撞到了攻击特效
		if (other.node.group === ConstConfig.ATTACK_GROUP_NAME) {
			// 播放闪烁动画
			const action: cc.ActionInterval = cc.blink(1, 5);
			const callFun: cc.ActionInstant = cc.callFunc(this.displayHero, this);
			const seq: cc.ActionInterval = cc.sequence(action, callFun);

			// 血量减少
			this.monster1.runAction(seq);
			Monster1.monster1Blood -= ConstConfig.HERO_ATTACK;
			// 判断血量
			if (Monster1.monster1Blood <= 0) {
				this.monster1.destroy();
			}
		}
	}

	/**
	 * 显示人物.
	 *
	 * @example
	 */
	private displayHero(): void {
		this.monster1.opacity = 255;
		this.monster1.active = true;
	}
}
