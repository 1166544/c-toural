<template>
	<div class="cards-fashion-show-left">
		<div class="cards-fashion-show-left-top">
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
				<h1>Idea-driven tool</h1>
				<p>Do you have any creative idea of how to add power to our TrackThor?Feel free to contact us</p>
				<button>Write message</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import './FashionLeft.less';

/** fashion left */
@Component
export default class FashionLeft extends Vue {
	constructor() {
		super();
	}
}
</script>
