<template>
	<div class="cards-fashion-show-right">
		<!-- fashion-top -->
		<FashionTop />

		<!-- banner -->
		<FashionBanner />

		<!-- sub-nav -->
		<FashionSubNav />

		<!-- product -->
		<FashionProduct />

		<!-- bottom -->
		<FashionBottom />

		<!-- copyright -->
		<div class="cards-fashion-show-copyrights">
			Copy rights @2021 trackthor all rights reserved.
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import './FashionRight.less';
import FashionBanner from '@/components/fashion-show/fashion-right/fashion-banner/FashionBanner.vue';
import FashionBottom from '@/components/fashion-show/fashion-right/fashion-bottom/FashionBottom.vue';
import FashionProduct from '@/components/fashion-show/fashion-right/fashion-product/FashionProduct.vue';
import FashionSubNav from '@/components/fashion-show/fashion-right/fashion-sub-nav/FashionSubNav.vue';
import FashionTop from '@/components/fashion-show/fashion-right/fashion-top/FashionTop.vue';

/** fashion left */
@Component({
	components: {
		FashionBanner,
		FashionBottom,
		FashionProduct,
		FashionSubNav,
		FashionTop
	}
})
export default class FashionRight extends Vue {
	constructor() {
		super();
	}
}
</script>
