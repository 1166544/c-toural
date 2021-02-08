<template>
	<div>
		<!-- top-nav -->
		<div class="cars-views-h5-navbar">
			<h1>Orders</h1>
			<div class="cars-views-h5-nav-container">
				<p><img src="@/assets/slices13@2x.png" /></p>
				<p><img src="@/assets/slices12@2x.png" /></p>
				<div class="cars-views-h5-plus-btn">+</div>
			</div>
		</div>
		<!-- search container -->
		<div class="cars-views-h5-seearch-container">
			<form>
				<img class="cars-views-h5-search-button" src="@/assets/slices11@2x.png" />
				<input class="cars-views-h5-seearch" type="text" name="search" placeholder="Search Orders" />
			</form>
		</div>
		<!-- <div class="cars-views-h5-ad">广告层</div> -->
		<!-- <div class="cars-views-h5-product-list">产品列表</div> -->
		<!-- <div class="cars-views-h5-chat-box">对话层</div> -->
	</div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Ref, Vue, Watch } from 'vue-property-decorator';
import '@/views/ViewsH5.less';

/** css layout */
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
