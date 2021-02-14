import Vue from 'vue';

/**
 * auto focus
 *
 * @export
 * @class DirectivesAutoFocus
 */
class DirectivesAutoFocus extends Vue {
	/**
	 * inserted
	 *
	 * @param {*} el
	 * @returns {*}
	 * @memberof DirectivesAutoFocus
	 */
	public inserted(el: HTMLElement): any {
		console.log('start focus monitor');
		if (el) {
			el.focus();
		}
	}
}

export default new DirectivesAutoFocus();
