<template>
	<div>
		<div class="cars-navbar">
			<h1>Orders</h1>
			<div class="cars-nav-container">
				<p><img src="@/assets/slices13@2x.png" /></p>
				<p><img src="@/assets/slices12@2x.png" /></p>
				<div class="cars-plus-btn">+</div>
			</div>
		</div>
		<!-- <div class="cars-seearch">搜索层</div>
		<div class="cars-ad">广告层</div>
		<div class="cars-product-list">产品列表</div>
		<div class="cars-chat-box">对话层</div> -->
	</div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Ref, Vue, Watch } from 'vue-property-decorator';

/** 申请表校验单元 */
@Component({
	components: {}
})
export default class ViewsApplyForm extends Vue {
	@Prop()
	public value!: string;

	public constructor() {
		super();
	}
}
</script>

<style scoped>
@import url('./ViewsH5.less');
</style>
