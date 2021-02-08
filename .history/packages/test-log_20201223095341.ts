/**
 * colorful log
 *
 * @export
 * @class TestColorFullLog
 */
export class TestColorFullLog {
	/**
	 * @description 打印一个 [ title | text ] 样式的信息
	 * @param {String} title title text
	 * @param {String} info info text
	 * @param {String} type style
	 */
	public capsule(title: any, info: any, type: any = 'primary'): void {
		console.log(`%c ${title} %c ${info} %c`, 'background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;', `background:${typeColor(type)}; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;`, 'background:transparent');
	}

	/**
	 * @description 打印彩色文字
	 */
	public colorful(textArr: any): void {
		console.log(`%c${textArr.map((t) => t.text || '').join('%c')}`, ...textArr.map((t) => `color: ${typeColor(t.type)};`));
	}

	public danger(text: any): void {
		this.colorful([{ text, type: 'danger' }]);
	}

	public default(text: any): void {
		this.colorful([{ text }]);
	}

	public primary(text: any): void {
		this.colorful([{ text, type: 'primary' }]);
	}

	public success(text: any): void {
		this.colorful([{ text, type: 'success' }]);
	}

	public warning(text: any): void {
		this.colorful([{ text, type: 'warning' }]);
	}

	/**
	 * type color
	 * @description 返回这个样式的颜色值
	 * @param {String} type 样式名称 [ primary | success | warning | danger | text ]
	 */
	private typeColor(type: string = 'default'): string {
		let color: string = '';
		switch (type) {
			case 'default':
				color = '#303133';
				break;
			case 'primary':
				color = '#409EFF';
				break;
			case 'success':
				color = '#67C23A';
				break;
			case 'warning':
				color = '#E6A23C';
				break;
			case 'danger':
				color = '#F56C6C';
				break;
			default:
				break;
		}

		return color;
	}
}
