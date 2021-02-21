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
import { IAppsState } from '@/store/modules/apps';

/** apps module */
const appsModule: any = namespace('apps');

/** circle top */
@Component
export default class CircleTop extends Vue {
	/** 访问apps.state.name  */
	@appsModule.State((state: IAppsState): any => state.name)
	public name!: string;

	/** 更改apps.state.name */
	@appsModule.Action('saveName')
	public saveName!: Function;

	/** mounted */
	public mounted(): any {
		console.log('name from store', this.name);

		// 测试：一段时间后更改全局apps.state.name
		setTimeout((): any => {
			this.saveName('This is changed state name ');
			console.log('Changedd name:: ', this.name);
		}, 1000);
	}
}
</script>
