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

		<!-- AD -->
		<div class="cars-views-h5-ad">
			<div class="cards-views-h5-mercedes">
				<img src="@/assets/slices10@2x.png" />
				<h3>Meredes-Maybach S8900</h3>
				<div class="cards-views-h5-chat">
					<div class="cards-views-h5-chat-btn">
						<img src="@/assets/slices7@2x.png" />
						12
					</div>
				</div>
			</div>
			<div class="cards-views-h5-edward">
				<h3>CLIENT:</h3>
				<h4>Edward Brown</h4>
				<div class="cards-views-h5-edward-img">
					<img src="@/assets/slices9@2x.png" />
				</div>
			</div>
			<div class="cards-views-h5-road"></div>
			<div class="cards-views-h5-brand"></div>
		</div>

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
