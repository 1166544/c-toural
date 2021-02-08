<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script <script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

/** App */
@Component
export default class App extends Vue {
	/** create */
	public created(): void {
		// hole
	}
}
</script>

<style lang="less"></style>
