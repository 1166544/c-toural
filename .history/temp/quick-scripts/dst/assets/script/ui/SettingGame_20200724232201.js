
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/ui/SettingGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b6500f4BjNKuZQFsdRk6O+p', 'SettingGame');
// script/ui/SettingGame.ts

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const { ccclass, property } = cc._decorator;
/**
 * setting game
 *
 * @export
 * @class SettingGame
 * @extends {cc.Component}
 */
let SettingGame = /** @class */ (() => {
    var _a;
    let SettingGame = class SettingGame extends cc.Component {
        constructor() {
            super(...arguments);
            /**
             * 设置按钮.
             */
            this.settingButton = null;
        }
        /**
         * onload
         *
         * @protected
         * @memberof SettingGame
         */
        onLoad() {
            // 设置点击事件
            this.settingButton.on(cc.Node.EventType.TOUCH_START, this.settingPress, this);
            this.settingButton.on(cc.Node.EventType.TOUCH_END, this.settingPressCancel, this);
            this.settingButton.on(cc.Node.EventType.TOUCH_CANCEL, this.settingPressCancel, this);
        }
        /**
         * setting press
         *
         * @private
         * @memberof SettingGame
         */
        settingPress() {
            // 按钮缩放
            this.settingButton.scaleX = 1.2;
            this.settingButton.scaleY = 1.2;
        }
        /**
         * 按钮取消.
         *
         * @private
         * @memberof SettingGame
         * @returns
         * @example
         */
        settingPressCancel() {
            // 按钮缩放
            this.settingButton.scaleX = 1;
            this.settingButton.scaleY = 1;
        }
    };
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_a = typeof cc !== "undefined" && cc.Node) === "function" ? _a : Object)
    ], SettingGame.prototype, "settingButton", void 0);
    SettingGame = __decorate([
        ccclass
    ], SettingGame);
    return SettingGame;
})();
export { SettingGame };

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdWkvU2V0dGluZ0dhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDO0FBRTVDOzs7Ozs7R0FNRztBQUVIOztJQUFBLElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVksU0FBUSxFQUFFLENBQUMsU0FBUztRQUE3Qzs7WUFDQzs7ZUFFRztZQUVLLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBd0N2QyxDQUFDO1FBdENBOzs7OztXQUtHO1FBQ08sTUFBTTtZQUNmLFNBQVM7WUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM5RSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2xGLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEYsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0ssWUFBWTtZQUNuQixPQUFPO1lBQ1AsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNqQyxDQUFDO1FBRUQ7Ozs7Ozs7V0FPRztRQUNLLGtCQUFrQjtZQUN6QixPQUFPO1lBQ1AsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUMvQixDQUFDO0tBQ0QsQ0FBQTtJQXhDQTtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNLLEVBQUUsb0JBQUYsRUFBRSxDQUFDLElBQUk7c0RBQVE7SUFMMUIsV0FBVztRQUR2QixPQUFPO09BQ0ssV0FBVyxDQTZDdkI7SUFBRCxrQkFBQztLQUFBO1NBN0NZLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vKipcbiAqIHNldHRpbmcgZ2FtZVxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBTZXR0aW5nR2FtZVxuICogQGV4dGVuZHMge2NjLkNvbXBvbmVudH1cbiAqL1xuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBTZXR0aW5nR2FtZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cdC8qKlxuXHQgKiDorr7nva7mjInpkq4uXG5cdCAqL1xuXHRAcHJvcGVydHkoY2MuTm9kZSlcblx0cHJpdmF0ZSBzZXR0aW5nQnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcblxuXHQvKipcblx0ICogb25sb2FkXG5cdCAqXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQG1lbWJlcm9mIFNldHRpbmdHYW1lXG5cdCAqL1xuXHRwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuXHRcdC8vIOiuvue9rueCueWHu+S6i+S7tlxuXHRcdHRoaXMuc2V0dGluZ0J1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5zZXR0aW5nUHJlc3MsIHRoaXMpO1xuXHRcdHRoaXMuc2V0dGluZ0J1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuc2V0dGluZ1ByZXNzQ2FuY2VsLCB0aGlzKTtcblx0XHR0aGlzLnNldHRpbmdCdXR0b24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnNldHRpbmdQcmVzc0NhbmNlbCwgdGhpcyk7XG5cdH1cblxuXHQvKipcblx0ICogc2V0dGluZyBwcmVzc1xuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAbWVtYmVyb2YgU2V0dGluZ0dhbWVcblx0ICovXG5cdHByaXZhdGUgc2V0dGluZ1ByZXNzKCk6IHZvaWQge1xuXHRcdC8vIOaMiemSrue8qeaUvlxuXHRcdHRoaXMuc2V0dGluZ0J1dHRvbi5zY2FsZVggPSAxLjI7XG5cdFx0dGhpcy5zZXR0aW5nQnV0dG9uLnNjYWxlWSA9IDEuMjtcblx0fVxuXG5cdC8qKlxuXHQgKiDmjInpkq7lj5bmtoguXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBtZW1iZXJvZiBTZXR0aW5nR2FtZVxuXHQgKiBAcmV0dXJuc1xuXHQgKiBAZXhhbXBsZVxuXHQgKi9cblx0cHJpdmF0ZSBzZXR0aW5nUHJlc3NDYW5jZWwoKTogdm9pZCB7XG5cdFx0Ly8g5oyJ6ZKu57yp5pS+XG5cdFx0dGhpcy5zZXR0aW5nQnV0dG9uLnNjYWxlWCA9IDE7XG5cdFx0dGhpcy5zZXR0aW5nQnV0dG9uLnNjYWxlWSA9IDE7XG5cdH1cbn1cbiJdfQ==