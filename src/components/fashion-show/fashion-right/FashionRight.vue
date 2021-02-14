<template>
	<div class="cards-fashion-show-right">
		<!-- fashion-top -->
		<FashionTop />

		<!-- banner -->
		<FashionBanner :rightTrackList="pageData.rightTrackList" />

		<!-- sub-nav -->
		<FashionSubNav />

		<!-- product -->
		<FashionProduct />

		<!-- bottom -->
		<FashionBottom />

		<!-- copyright -->
		<footer class="cards-fashion-show-copyrights">Copy rights @{{ years }} trackthor all rights reserved.</footer>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import './FashionRight.less';
import FashionBanner from '@/components/fashion-show/fashion-right/fashion-banner/FashionBanner.vue';
import FashionBottom from '@/components/fashion-show/fashion-right/fashion-bottom/FashionBottom.vue';
import FashionProduct from '@/components/fashion-show/fashion-right/fashion-product/FashionProduct.vue';
import FashionSubNav from '@/components/fashion-show/fashion-right/fashion-sub-nav/FashionSubNav.vue';
import FashionTop from '@/components/fashion-show/fashion-right/fashion-top/FashionTop.vue';
import { IPageData } from '@/components/fashion-show/interfaces/IPageData';

/** fashion left */
@Component({
	components: {
		FashionBanner,
		FashionBottom,
		FashionProduct,
		FashionTop: (): any => import('./fashion-top/FashionTop.vue'), // 动态载入组件
		FashionSubNav: (): any => import('./fashion-sub-nav/FashionSubNav.vue') // 动态载入组件
	}
})
export default class FashionRight extends Vue {
	public yearsValue: string = '';

	@Prop()
	public pageData!: IPageData;

	constructor() {
		super();
	}

	public get years(): string {
		return this.yearsValue;
	}

	/** mounted */
	public mounted(): void {
		this.yearsValue = new Date().getFullYear().toString();
	}
}
</script>
