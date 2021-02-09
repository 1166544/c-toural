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
			<div class="cards-views-h5-road">
				<p>ON THE ROAD</p>
				<h3>10:28 a.m.</h3>
			</div>
			<div class="cards-views-h5-brand">
				<div class="cards-views-h5-brand-top">
					<img src="@/assets/slices6@2x.png" />
					<h3>Mercedes-Bens, Ford</h3>
					<div class="cards-views-h5-brand-top-container">
						<div class="cards-views-h5-brand-top-btn">
							<img src="@/assets/slices5@2x.png" />
							3
						</div>
					</div>
				</div>
				<div class="cards-views-h5-brand-middle">
					<div class="cards-views-h5-brand-break">
						<h1>IENT:</h1>
						<h3>Daniel Harrison</h3>
					</div>
					<div class="cards-views-h5-brand-middle-btn">
						<img src="@/assets/slices9@2x.png" />
					</div>
				</div>
				<div class="cards-views-h5-brand-bottom">
					<p>VER SELECTION</p>
					<h3>10:23 a.m.</h3>
				</div>
			</div>
		</div>

		<!-- product list -->
		<div class="cars-views-h5-product-list">
			<div class="cars-views-h5-product-list-title">
				<div class="cars-views-h5-product-list-left-title">
					<h1>BEING PROCESSED</h1>
					<h3>June 28, 2021 10:14 PM</h3>
				</div>
				<div class="cars-views-h5-product-list-right-title">
					ORDER IS ACCEPTED
				</div>
			</div>
			<!-- url list -->
			<ul class="cars-views-h5-product-list-ul">
				<li>
					<div class="cars-views-h5-product-list-item">
						<!-- top -->
						<div class="cars-views-h5-product-list-item-top">
							<img src="@/assets/slices4@2x.png" />
							<div class="cars-views-h5-product-list-item-right">
								<h1>VEHICLE</h1>
								<h2>Mercedes-Benz</h2>
								<h3>A250 AMG</h3>
							</div>
						</div>
						<!-- bottom -->
						<div class="cars-views-h5-product-list-item-bottom">
							<!-- left -->
							<div class="cars-views-h5-product-list-item-bottom-left">
								<h1>DRIVER</h1>
								<h2>Vincent Stevenson</h2>
							</div>
							<!-- center -->
							<div class="cars-views-h5-product-list-item-bottom-center">
								<h1>PRICE</h1>
								<h2>$999</h2>
							</div>
							<!-- right -->
							<div class="cars-views-h5-product-list-item-bottom-right">
								<div class="cars-views-h5-product-list-item-bottom-right-chat">
									<img src="@/assets/slices3@2x.png" />
								</div>
								<div class="cars-views-h5-product-list-item-bottom-right-plus">
									+
								</div>
							</div>
						</div>
					</div>

					<div class="cars-views-h5-product-list-item">
						<!-- top -->
						<div class="cars-views-h5-product-list-item-top">
							<img src="@/assets/slices2@2x.png" />
							<div class="cars-views-h5-product-list-item-right">
								<h1>VEHICLE</h1>
								<h2>Ford Mustang</h2>
								<h3>GT-Fastback</h3>
							</div>
						</div>
						<!-- bottom -->
						<div class="cars-views-h5-product-list-item-bottom">
							<!-- left -->
							<div class="cars-views-h5-product-list-item-bottom-left">
								<h1>DRIVER</h1>
								<h2>Peter Lambert</h2>
							</div>
							<!-- center -->
							<div class="cars-views-h5-product-list-item-bottom-center">
								<h1>PRICE</h1>
								<h2>$1399</h2>
							</div>
							<!-- right -->
							<div class="cars-views-h5-product-list-item-bottom-right">
								<div class="cars-views-h5-product-list-item-bottom-right-chat">
									<img src="@/assets/slices3@2x.png" />
								</div>
								<div class="cars-views-h5-product-list-item-bottom-right-plus">
									+
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
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
