<template>
	<header class="circle-container-top">
		<img src="@/assets/circle/arrow-left@2x.png" />
		<img src="@/assets/circle/avata@2x.png" />
	</header>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import '@/components/circle/circle-top/CircleTop.less';

/** circle top */
@Component
export default class CircleTop extends Vue {}
</script>
