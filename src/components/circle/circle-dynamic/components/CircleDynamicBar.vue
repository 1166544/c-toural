<template>
	<div>
		A Bar component with the title:
		<span>{{ renderData.title }}</span>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IContentItemStructs } from '@/components/circle/circle-dynamic/CircleDynamic.vue';

/** 动态渲染组件 Bar */
@Component
export default class CircleDynamicBar extends Vue {
	@Prop()
	public renderData!: IContentItemStructs;

	constructor() {
		super();
	}

	/** 注册组件名 */
	public get name(): string {
		return 'bar';
	}

	/** hook */
	public mounted(): void {
		// hole
	}
}
</script>
