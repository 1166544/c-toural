<template>
	<div class="cards-fashion-show">
		<!-- left container -->
		<FashionLeft />

		<!-- right container -->
		<FashionRight />
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import './FashionShow.less';
import { FashionShow } from './FashionShow';
import FashionLeft from '@/components/fashion-show/fashion-left/FashionLeft.vue';
import FashionRight from '@/components/fashion-show/fashion-right/FashionRight.vue';

/** ApplyFormComponent */
@Component({
	components: {
		FashionLeft,
		FashionRight
	}
})
export default class ApplyFormComponent extends Vue {
	@Prop() private msg!: string;

	constructor() {
		super();

		console.log(new FashionShow());
	}
}
</script>
