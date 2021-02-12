<template>
	<ul class="cards-fashion-show-right-sub-nav">
		<li>
			<a>
				<img src="@/assets/fashion/fashion.png" />
				<div class="cards-fashion-show-right-sub-nav-item">
					<h1>QUALITY MATERIALS</h1>
					<p>Gurnte 100% polyuretuned and 100% popular</p>
				</div>
			</a>
		</li>
		<li>
			<a>
				<img src="@/assets/fashion/shipping.png" />
				<div class="cards-fashion-show-right-sub-nav-item">
					<h1>FREE SHIPPING</h1>
					<p>We free shipping for all offers over $199</p>
				</div>
			</a>
		</li>
		<li>
			<a>
				<img src="@/assets/fashion/shell.png" />
				<div class="cards-fashion-show-right-sub-nav-item">
					<h1>SECURE PAYMENT</h1>
					<p>George 100% pure payment online on our website</p>
				</div>
			</a>
		</li>
	</ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import './FashionSubNav.less';

/** fashion sub nav */
@Component
export default class FashionSubNav extends Vue {}
</script>
