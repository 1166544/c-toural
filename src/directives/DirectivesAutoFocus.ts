import Vue from 'vue';
import { DirectiveBinding } from 'vue/types/options';
import { VNode } from 'vue/types/vnode';

/**
 * auto focus
 *
 * @export
 * @class DirectivesAutoFocus
 */
class DirectivesAutoFocus extends Vue {
	/**
	 * bind hook
	 *
	 * @param {HTMLElement} el
	 * @param {DirectiveBinding} binding
	 * @param {VNode} vnode
	 * @memberof DirectivesAutoFocus
	 */
	public bind(el: HTMLElement, binding: DirectiveBinding, vnode: VNode): void {
		const innerHTML: any = `
			name: ${JSON.stringify(binding.name)}
			value:
			${JSON.stringify(binding.value)}
			expression:
			${JSON.stringify(binding.expression)}
			'argument: '
			${JSON.stringify(binding.arg)}
			modifiers:
			${JSON.stringify(binding.modifiers)}
			vnode keys:
			${Object.keys(vnode).join(', ')}`;
		console.log(innerHTML);
	}

	/**
	 * inserted hook
	 *
	 * @param {*} el
	 * @returns {*}
	 * @memberof DirectivesAutoFocus
	 */
	public inserted(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, oldVnode: VNode): any {
		console.log('start focus monitor');
		if (el) {
			el.focus();
		}
	}
}

export default new DirectivesAutoFocus();
