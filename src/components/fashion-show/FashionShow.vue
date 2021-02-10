<template>
	<div class="cards-fashion-show">
		<!-- left container -->
		<div class="cards-fashion-show-left">
			<div class="cards-fashion-show-left-logo">
				<img src="@/assets/fashion/logo.png" />
			</div>
			<ul class="cards-fashion-show-left-list">
				<li class="cards-fashion-show-left-list-first">
					<a><img src="@/assets/fashion/home.png" class="cards-fashion-show-left-list-home" />Home</a>
				</li>
				<li>
					<a><img src="@/assets/fashion/person.png" class="cards-fashion-show-left-list-project" />Clients</a>
				</li>
				<li>
					<a><img src="@/assets/fashion/human.png" class="cards-fashion-show-left-list-time" />Time tracking</a>
				</li>
				<li class="cards-fashion-show-left-list-sep1">
					<a><img src="@/assets/fashion/clock.png" class="cards-fashion-show-left-list-time" />Time tracking</a>
				</li>
				<li>
					<a><img src="@/assets/fashion/keyboard.png" class="cards-fashion-show-left-list-hardware" />Hardware</a>
				</li>
				<li>
					<a><img src="@/assets/fashion/document.png" class="cards-fashion-show-left-list-documents" />Documents</a>
				</li>
			</ul>
			<div class="cards-fashion-show-left-brand">
				<p></p>
				<div>bottom</div>
			</div>
		</div>
		<!-- right container -->
		<div class="cards-fashion-show-right">
			<div class="cards-fashion-show-right-top">top</div>
			<div class="cards-fashion-show-right-banner">banner</div>
			<div class="cards-fashion-show-right-sub-nav">sub-nav</div>
			<div class="cards-fashion-show-right-sub-nav">product</div>
			<div class="cards-fashion-show-right-sub-nav">bottom</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import './FashionShow.less';
import { FashionShow } from './FashionShow';

/** ApplyFormComponent */
@Component
export default class ApplyFormComponent extends Vue {
	@Prop() private msg!: string;

	constructor() {
		super();

		console.log(new FashionShow());
	}
}
</script>
