<template>
	<div class="circle-container">
		<!-- top start -->
		<CircleTop />
		<!-- top end -->

		<!-- cover start -->
		<CircleCover />
		<!-- cover end -->

		<!-- banner start -->
		<CircleBanner />
		<!-- banner end -->

		<!-- list start -->
		<div class="circle-container-list-sep"></div>
		<CircleList />
		<!-- list end -->

		<!-- bottom start -->
		<CircleBottom />
		<!-- bottom end -->
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import '@/components/circle/CircleShow.less';
import CircleTop from '@/components/circle/circle-top/CircleTop.vue';
import CircleBanner from '@/components/circle/circle-banner/CircleBanner.vue';
import CircleList from '@/components/circle/circle-list/CircleList.vue';
import CircleBottom from '@/components/circle/circle-bottom/CircleBottom.vue';
import CircleCover from '@/components/circle/circle-cover/CircleCover.vue';
import { FashionShowGreeter } from '@/components/fashion-show/FashionShowGreeter';

/** circle */
@Component({
	components: {
		CircleTop,
		CircleBanner,
		CircleList,
		CircleBottom,
		CircleCover
	}
})
export default class CircleShow extends Vue {
	constructor() {
		super();

		/** 实例化调用  */
		const fashionGreeting: FashionShowGreeter<string> = new FashionShowGreeter<string>('String test');
		console.log(fashionGreeting.greet());

		/** 实例化调用 */
		const fashionGreetingNumbrer: FashionShowGreeter<number> = new FashionShowGreeter<number>(123);
		console.log(fashionGreetingNumbrer.greet());
	}
}
</script>
