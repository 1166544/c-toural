import Vue, { VNode } from 'vue';
import VueRouter, { Route } from 'vue-router';
// declare module 'nprogress';
// declare module 'numeral';
declare module 'vuex-class';

declare global {
	namespace JSX {
		// tslint:disable no-empty-interface
		interface Element extends VNode {}
		// tslint:disable no-empty-interface
		interface ElementClass extends Vue {}
		interface IntrinsicElements {
			[elem: string]: any;
		}
	}
}

declare module 'vue/types/options' {
	interface ComponentOptions<
		V extends Vue,
		Data = DefaultData<V>,
		Methods = DefaultMethods<V>,
		Computed = DefaultComputed,
		PropsDef = PropsDefinition<DefaultProps>,
		Props = DefaultProps
	> {
		asyncData?: Function;
		fetch?: Function;
		head?: object | Function;
		layout?: string | Function;
		middleware?: string | string[];
		scrollToTop?: boolean;
		transition?: String | object | Function;
		validate?: Function;
		watchQuery?: boolean | string[];
		i18n?: any | Function;
		store?: any;
	}
}
