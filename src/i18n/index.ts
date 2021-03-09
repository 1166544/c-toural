import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

/**
 * i18n
 */
const i18n: any = new VueI18n({
	locale: 'en', // if you need get the browser language use following "window.navigator.language"
	fallbackLocale: 'en',
	messages: {
		en: require('./i18en.json'),
		cn: require('./i18cn.json')
	},
	silentTranslationWarn: true
});

/**
 * translate
 * @param key
 */
const translate: any = (key: string): any => {
	if (!key) {
		return '';
	}

	return i18n.t(key);
};

if (module.hot) {
	module.hot.accept(['./i18en.json', './i18cn.json'], () => {
		i18n.setLocaleMessage('en', require('./i18en.json'));
		i18n.setLocaleMessage('cn', require('./i18cn.json'));
		// console.log('hot reload', this, arguments);
	});
}

export { i18n, translate }; // export above method
