<template>
	<header class="cards-fashion-show-right-top">
		<div class="cards-fashion-show-right-top-search-box">
			<form>
				<img src="@/assets/fashion/search.png" />
				<input placeholder="Enter search content here" v-model="inputMessage" />
				<h1>{{ inputMessage }}</h1>
			</form>
		</div>
		<div class="cards-fashion-show-right-top-right">
			<img src="@/assets/fashion/blockrect.png" />
			<img src="@/assets/fashion/mrrect.png" />
			<div class="cards-fashion-show-right-top-text">
				<h1>Michal Rome</h1>
				<h2>mrome@valuelogic.com</h2>
			</div>
			<div class="cards-fashion-show-right-top-right-arrow">
				<img src="@/assets/fashion/arrowdown.png" />
			</div>
		</div>
	</header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import './FashionTop.less';

/** FashionTop */
@Component
export default class FashionTop extends Vue {
	/** 双向绑定 */
	public inputMessage: string = '';
}
</script>
