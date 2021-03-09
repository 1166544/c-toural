import Vue from 'vue';
import 'amfe-flexible';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

import bootstrap from '@fdd-components/fdd-identify-lib/src/core/bootstrap/Bootstrap';
import { enviroment } from '@fdd-components/fdd-identify-lib/src/core/bootstrap/BootstrapEnvironment';
import { i18n, translate } from '@fdd-components/fdd-identify-lib/src/h5/i18n';

import '@/styles/StyleCommon.less';
import '@/styles/StyleReset.less';
import PluginsExtened from '@/plugins/PluginsExtened';

// 配置系统
import { ConfigDev } from './config/ConfigDev';
import { ConfigTest } from './config/ConfigTest';
import { ConfigHuidu } from './config/ConfigHuidu';
import { ConfigProd } from './config/ConfigProd';
import ConfigEnv from './config/ConfigEnv';

// 注入全局过滤器
Vue.filter('translate', translate);

// 注册自定义插件-包括混入、指令、扩充方法等
Vue.use(PluginsExtened);

// production tip
Vue.config.productionTip = false;

// 实例化
new Vue({
	i18n,
	router,
	store,
	created(): any {
		const configData: any = bootstrap(ConfigDev, ConfigTest, ConfigHuidu, ConfigProd, ConfigEnv, i18n.locale, Vue);
		if (configData.env === enviroment.DEV) {
			// 只有开发服启动模式才生效MOCK功能
			require('./mocks');
		}
	},
	render: (h: any): any => h(App)
}).$mount('#app');
