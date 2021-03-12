<template>
	<div>
		A Foo component with the dynamic:
		<span>{{ renderData.headline }}</span>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IContentItemStructs } from '@/components/circle/circle-dynamic/CircleDynamic.vue';

/** 动态渲染组件 Foo */
@Component
export default class CircleDynamicFoo extends Vue {
	@Prop()
	public renderData!: IContentItemStructs;

	constructor() {
		super();
	}

	/** 注册组件名 */
	public get name(): string {
		return 'foo';
	}

	/** hook */
	public mounted(): void {
		// hole
	}
}
</script>
