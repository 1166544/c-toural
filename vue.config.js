const path = require('path');

function resolve(dir) {
	return path.join(__dirname, dir);
}

// vue.config.js
module.exports = {
	/*
Vue-cli3:
Crashed when using Webpack `import()` #2463
https://github.com/vuejs/vue-cli/issues/2463
*/
	parallel: true,
	publicPath: '/',

	css: {
		loaderOptions: {
			less: {
				modifyVars: {
					/* less 变量覆盖 */
					blue: '#4585F5',
					orange: '#FF843B',
					green: '#86e3b6',
					'button-border-radius': '8px'
				},
				javascriptEnabled: true
			},
			// in pc mode, it is not fit to layout on wide screen changed.
			postcss: {
				plugins: [
					// 计设稿宽度1/10 默认75
					require('postcss-px2rem')({ remUnit: 75 })
				]
			}
		}
	},

	pluginOptions: {
		// Vue CLI 3 plugin for Dll and DllReference pdfjs-dist
		dll: {
			entry: ['vue', 'vue-router', 'vuex', 'axios']
		}
	},
	devServer: {
		// development server port 8088
		port: 8088,
		host: '0.0.0.0',
		disableHostCheck: true
	},
	// disable source map in production
	productionSourceMap: false,
	lintOnSave: undefined,

	// babel-loader no-ignore node_modules/*
	transpileDependencies: []
};
