import { ConstConfig } from "../config/ConstConfig";

const {ccclass, property} = cc._decorator;

@ccclass
export class GameOver extends cc.Component {

    /**
     * 碰撞检测
     * @param other
     * @param self 
     */
    public onCollisionEnter(other: any, self: any): void {
        // 如果角色触碰到了终点,切换场景 over
        if(other.node.group == ConstConfig.HERO_GROUP_NAME){
            cc.director.loadScene("over");
        }
    }
}