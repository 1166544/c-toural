<template>
	<div class="home auto-info"></div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Ref, Vue, Watch } from 'vue-property-decorator';

/** 申请表校验单元 */
@Component({
	components: {}
})
export default class ViewsApplyForm extends Vue {
	@Prop()
	public value!: string;

	public constructor() {
		super();
	}
}
</script>

<style scoped></style>
