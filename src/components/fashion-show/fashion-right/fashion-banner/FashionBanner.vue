<template>
	<div class="cards-fashion-show-right-banner">
		<div class="cards-fashion-show-right-banner-container">
			<img src="@/assets/fashion/banner.png" />
		</div>
		<div class="cards-fashion-show-right-banner-box">
			<div class="cards-fashion-show-right-banner-title">
				<h1>Trackthor plugins</h1>
				<img src="@/assets/fashion/arrowdown2.png" />
			</div>
			<ul class="cards-fashion-show-right-banner-right">
				<li>
					<a>
						<div class="cards-fashion-show-right-banner-li cards-fashion-show-right-banner-blue">MR</div>
						<div class="cards-fashion-show-right-banner-li-right">
							<div class="cards-fashion-show-right-banner-li-top">Michal Rome</div>
							<div class="cards-fashion-show-right-banner-li-bottom">Senior UI Designer</div>
						</div>
					</a>
				</li>
				<li>
					<a>
						<div class="cards-fashion-show-right-banner-li cards-fashion-show-right-banner-green">DK</div>
						<div class="cards-fashion-show-right-banner-li-right">
							<div class="cards-fashion-show-right-banner-li-top">Dominika Kropp</div>
							<div class="cards-fashion-show-right-banner-li-bottom">Visual Designer</div>
						</div>
					</a>
				</li>
				<li>
					<a>
						<div class="cards-fashion-show-right-banner-li cards-fashion-show-right-banner-purple">MT</div>
						<div class="cards-fashion-show-right-banner-li-right">
							<div class="cards-fashion-show-right-banner-li-top">Marcin Twardowski</div>
							<div class="cards-fashion-show-right-banner-li-bottom">UX Designer</div>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import './FashionBanner.less';

/** FashionBanner */
@Component
export default class FashionBanner extends Vue {}
</script>
