<template>
	<div class="cards-fashion-show">
		<!-- left container -->
		<FashionLeft :navDataList="pageData.navDataList" />

		<!-- right container -->
		<FashionRight :pageData="pageData" />
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import './FashionShow.less';
import { FashionShow } from './FashionShow';
import FashionLeft from '@/components/fashion-show/fashion-left/FashionLeft.vue';
import FashionRight from '@/components/fashion-show/fashion-right/FashionRight.vue';
import { IPageData } from '@/components/fashion-show/interfaces/IPageData';

/** ApplyFormComponent */
@Component({
	components: {
		FashionLeft,
		FashionRight
	}
})
export default class ApplyFormComponent extends Vue {
	@Prop() private msg!: string;

	/** 页面数据结构 */
	public pageData!: IPageData;

	constructor() {
		super();
	}

	/** init */
	public created(): void {
		this.pageData = new FashionShow().getPageData();
	}
}
</script>
