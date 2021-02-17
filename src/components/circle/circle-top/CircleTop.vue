<template>
	<header class="circle-container-top">
		<img src="@/assets/circle/arrow-left@2x.png" />
		{{ name }}
		<img src="@/assets/circle/avata@2x.png" />
	</header>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import '@/components/circle/circle-top/CircleTop.less';
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';

/** apps module */
const appsModule: any = namespace('apps');

/** circle top */
@Component
export default class CircleTop extends Vue {
	/** 访问state.name */
	@appsModule.State((state: any): any => state.name)
	public name!: string;

	/** 更改state.name */
	@appsModule.Action('saveName')
	public saveName: any;

	/** mounted */
	public mounted(): any {
		console.log('name from store', this.name);

		setTimeout((): any => {
			this.saveName('This is changed state name');
			console.log('changedd name', this.name);
		}, 1000);
	}
}
</script>
