import { ConstConfig } from '../config/ConstConfig';

const {ccclass, property} = cc._decorator;

/**
 * Game
 *
 * @export
 * @class GameOver
 * @extends {cc.Component}
 */
@ccclass
export class GameOver extends cc.Component {

    /**
     * 碰撞检测.
     *
     * @param other - 其它.
     * @param self - 自已.
     * @example
     */
    public onCollisionEnter(other: any, self: any): void {
        // 如果角色触碰到了终点,切换场景 over
        if (other.node.group === ConstConfig.HERO_GROUP_NAME) {
            cc.director.loadScene('over');
        }
    }
}
