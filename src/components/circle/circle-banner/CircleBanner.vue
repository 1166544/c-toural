<template>
	<div class="circle-container-banner">
		<div class="circle-container-banner-top">
			<h1>730</h1>
			<div class="circle-container-banner-sub">
				<h1>Visitors last 7 days</h1>
				<div class="circle-container-banner-icon">>></div>
			</div>
		</div>
		<ul class="circle-container-banner-ul">
			<li><a>By time</a></li>
			<li><a>By country</a></li>
			<li><a class="circle-container-banner-sp">By source</a></li>
		</ul>
		<div class="circle-container-banner-box">
			<div class="circle-container-banner-box-container circle-container-banner-box-search">Search</div>
			<div class="circle-container-banner-box-container circle-container-banner-box-direct">Direct</div>
			<div class="circle-container-banner-box-container circle-container-banner-box-social">Social</div>
			<div class="circle-container-banner-box-container circle-container-banner-box-other">Other</div>
		</div>
		<div class="circle-container-banner-price">
			{{ name }}
			<h1>Amount</h1>
			<h2>$250</h2>
			<div class="circle-container-banner-ul">
				<ul>
					<li>
						<a>
							<div class="circle-container-banner-item-top">Recipient</div>
							<div class="circle-container-banner-item-bottom">Laure Norbert</div>
						</a>
					</li>
					<li>
						<a>
							<div class="circle-container-banner-item-top">From</div>
							<div class="circle-container-banner-item-bottom">Peter Smith account</div>
						</a>
					</li>
					<li>
						<a>
							<div class="circle-container-banner-item-top">Payer reference</div>
							<div class="circle-container-banner-item-bottom">452-d32s-328</div>
						</a>
					</li>
					<li>
						<a>
							<div class="circle-container-banner-item-top">Execution day</div>
							<div class="circle-container-banner-item-bottom">48690778</div>
						</a>
					</li>
					<li>
						<a>
							<div class="circle-container-banner-item-top">Note</div>
							<div class="circle-container-banner-item-bottom">Add a note</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="circle-container-banner-button">
			<button>
				Continue
				<img src="@/assets/circle/arrow-right@2x.png" />
			</button>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import '@/components/circle/circle-banner/CircleBanner.less';
import { namespace } from 'vuex-class';
import { IAppsState } from '@/store/modules/apps';

/** apps module */
const appsModule: any = namespace('apps');

/** circle banner */
@Component
export default class CircleBanner extends Vue {
	@appsModule.State((state: IAppsState): any => state.name)
	public name!: string;
}
</script>
