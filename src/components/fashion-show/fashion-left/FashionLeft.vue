<template>
	<nav class="cards-fashion-show-left">
		<div class="cards-fashion-show-left-top">
			<div class="cards-fashion-show-left-logo">
				<img src="@/assets/fashion/logo.png" />
			</div>
			<ul class="cards-fashion-show-left-list">
				<li
					v-for="(value, index) in navDataList"
					:key="value.nameValue"
					v-bind:class="{ 'cards-fashion-show-left-list-first': index === 0, 'cards-fashion-show-left-list-sep1': index === 3 }"
				>
					<a>
						<img src="@/assets/fashion/home.png" :class="value.imgClass" v-if="index === 0" />
						<img src="@/assets/fashion/human.png" :class="value.imgClass" v-if="index === 1" />
						<img src="@/assets/fashion/clock.png" :class="value.imgClass" v-if="index === 2" />
						<img src="@/assets/fashion/keyboard.png" :class="value.imgClass" v-if="index === 3" />
						<img src="@/assets/fashion/document.png" :class="value.imgClass" v-if="index === 4" />
						{{ value.nameValue }}
					</a>
				</li>
			</ul>
		</div>
		<div class="cards-fashion-show-left-brand">
			<div class="cards-fashion-show-left-brand-top">
				<div class="cards-fashion-show-left-brand-top-circle-outer">
					<div class="cards-fashion-show-left-brand-top-circle">
						<img src="@/assets/fashion/question.png" />
					</div>
				</div>
			</div>
			<div class="cards-fashion-show-left-brand-bottom">
				<h1>{{ idealTitle }}</h1>
				<p>Do you have any creative idea of how to add power to our TrackThor?Feel free to contact us</p>
				<button @click="changeIdealTitle()">Write message</button>
			</div>
		</div>
	</nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import './FashionLeft.less';
import { IMenus } from '@/components/fashion-show/interfaces/IMenus';

/** fashion left */
@Component
export default class FashionLeft extends Vue {
	public idealTitle: string = 'Idea-driven tool';

	/** menus */
	@Prop()
	public navDataList!: Array<IMenus>;

	constructor() {
		super();
	}

	/** created */
	public created(): void {
		// hole
	}

	/** change title */
	private changeIdealTitle(): void {
		this.idealTitle = Math.random() < 0.5 ? this.idealTitle.toUpperCase() : this.idealTitle.toLowerCase();
	}
}
</script>
