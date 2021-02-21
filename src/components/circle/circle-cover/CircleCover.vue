<template>
	<div class="circle-container-cover">
		<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1516625895,2697376264&fm=26&gp=0.jpg" />
		<span></span>
		<span></span>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import '@/components/circle/circle-cover/CircleCover.less';

/** 封面组件 */
export default class CircleCover extends Vue {
	constructor() {
		super();
	}
}
</script>
