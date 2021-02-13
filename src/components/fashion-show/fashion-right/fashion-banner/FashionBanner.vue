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
				<li v-for="(item, index) in rightTrackList" :key="item.leftTitle">
					<a>
						<div class="cards-fashion-show-right-banner-li" :class="updateStyle(index)">
							{{ item.leftTitle }}
						</div>
						<div class="cards-fashion-show-right-banner-li-right">
							<div class="cards-fashion-show-right-banner-li-top">{{ item.title }}</div>
							<div class="cards-fashion-show-right-banner-li-bottom">{{ item.subTitle }}</div>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ITrackPluginMenus } from '@/components/fashion-show/interfaces/IMenus';
import './FashionBanner.less';

/** FashionBanner */
@Component
export default class FashionBanner extends Vue {
	@Prop()
	public rightTrackList!: Array<ITrackPluginMenus>;

	/** 更新样式 */
	private updateStyle(index: number): string {
		let styleValue: string = 'cards-fashion-show-right-banner-green';
		switch (index) {
			case 0:
				styleValue = 'cards-fashion-show-right-banner-blue';
				break;
			case 1:
				styleValue = 'cards-fashion-show-right-banner-green';
				break;
			case 2:
				styleValue = 'cards-fashion-show-right-banner-purple';
				break;
		}

		return styleValue;
	}
}
</script>
