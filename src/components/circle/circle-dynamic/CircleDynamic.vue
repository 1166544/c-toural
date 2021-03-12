<template>
	<div class="circle-dynamic-container">
		<!-- 动态渲染模板 -->
		<template v-for="item in contentData.content.body">
			<component :is="item.component" :renderData="item" :key="item.uuid"></component>
		</template>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Bar from '@/components/circle/circle-dynamic/components/CircleDynamicBar.vue';
import Foo from '@/components/circle/circle-dynamic/components/CircleDynamicFoo.vue';

/** 动态渲染组件 */
@Component({
	components: {
		Bar,
		Foo
	}
})
export default class CircleDynamic extends Vue {
	/** 初始化数据结构 */
	public contentData: IContent = { content: { body: [] } };

	/** hook */
	public mounted(): void {
		this.contentData = {
			content: {
				body: [
					{
						uuid: 'BUY6Drn9e1',
						component: 'foo',
						headline: 'Foo'
					},
					{
						uuid: 'gJZoSLkfZV',
						component: 'bar',
						title: 'Bar'
					},
					{
						uuid: 'X1JAfdsZxy',
						component: 'foo',
						headline: 'Another headline'
					}
				]
			}
		};
	}
}

/** 渲染数据结构 */
export interface IContent {
	content?: IContentItem;
}

/** 渲染数据顶层 */
export interface IContentItem {
	body?: Array<IContentItemStructs>;
}

/** 渲染数据内容 */
export interface IContentItemStructs {
	uuid: string;
	component: string;
	headline?: string;
	title?: string;
}
</script>
