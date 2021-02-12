<template>
	<div class="cards-fashion-show-right-product">
		<ul class="cards-fashion-show-right-product-ul">
			<li>
				<a>
					<img src="@/assets/fashion/hat.png" />
					<h1>Classic Hat</h1>
				</a>
			</li>
			<li>
				<a>
					<img src="@/assets/fashion/wallet.png" />
					<h1>Mini Wallet</h1>
				</a>
			</li>
			<li>
				<a>
					<img src="@/assets/fashion/belt.png" />
					<h1>Belt Bag</h1>
				</a>
			</li>
			<li class="cards-fashion-show-right-product-li">
				<a>
					<img src="@/assets/fashion/shoes.png" />
					<h1>Shoes</h1>
				</a>
			</li>
		</ul>
		<!-- right content -->
		<div class="cards-fashion-show-right-product-right">
			<div class="cards-fashion-show-right-product-right-top">
				<div class="cards-fashion-show-right-product-right-left">
					<h1>Client workshops</h1>
					<h2>10:00 - 17:00</h2>
				</div>
				<div class="cards-fashion-show-right-product-right-right">
					<h1 class="cards-fashion-show-right-banner-purple">MS</h1>
					<h1 class="cards-fashion-show-right-banner-green">UK</h1>
					<h1 class="cards-fashion-show-right-banner-blue">+5</h1>
				</div>
			</div>
			<div class="cards-fashion-show-right-product-right-bottom">
				<div class="cards-fashion-show-right-product-right-bottom-box">
					<h1 class="cards-fashion-show-right-product-right-bottom-box-h1">November</h1>
					<ul class="cards-fashion-show-right-product-right-bottom-box-ul">
						<li class="cards-fashion-show-right-product-right-bottom-box-ul-li">
							<a>
								<h1 class="cards-fashion-show-right-product-right-bottom-box-item">16</h1>
								<h2>Fri</h2>
							</a>
						</li>
						<li>
							<a>
								<h1 class="cards-fashion-show-right-product-right-bottom-box-item-style">17</h1>
								<h2>Sat</h2>
							</a>
						</li>
						<li>
							<a>
								<h1 class="cards-fashion-show-right-product-right-bottom-box-item-style">18</h1>
								<h2>Sun</h2>
							</a>
						</li>
					</ul>
				</div>
				<div class="cards-fashion-show-right-product-right-bottom-box cards-fashion-show-right-product-right-bottom-box-copy">
					<h1 class="cards-fashion-show-right-product-right-bottom-box-h1 cards-fashion-show-right-product-right-bottom-box-title">
						December
					</h1>
					<ul class="cards-fashion-show-right-product-right-bottom-box-ul">
						<li class="cards-fashion-show-right-product-right-bottom-box-ul-li">
							<a>
								<h1
									class="cards-fashion-show-right-product-right-bottom-box-item cards-fashion-show-right-product-right-bottom-box-item-copy"
								>
									19
								</h1>
								<h2>Mon</h2>
							</a>
						</li>
						<li>
							<a>
								<h1
									class="cards-fashion-show-right-product-right-bottom-box-item-style cards-fashion-show-right-product-right-bottom-box-item-copy cards-fashion-show-right-product-right-bottom-box-item-border"
								>
									20
								</h1>
								<h2>Tue</h2>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import './FashionProduct.less';

/** fashion product */
@Component
export default class FashionProduct extends Vue {}
</script>
