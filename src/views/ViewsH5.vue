<template>
	<div>
		<ApplyForm />
	</div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Ref, Vue, Watch } from 'vue-property-decorator';
import ApplyForm from '@/components/apply-form/ApplyForm.vue';

/** css layout */
@Component({
	components: {
		ApplyForm
	}
})
export default class ViewsApplyForm extends Vue {
	@Prop()
	public value!: string;

	public constructor() {
		super();
	}
}
</script>
