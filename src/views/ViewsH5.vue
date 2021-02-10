<template>
	<!-- <ApplyForm /> -->
	<FashionShow />
</template>

<script lang="ts">
import { Component, Emit, Prop, Ref, Vue, Watch } from 'vue-property-decorator';
// import ApplyForm from '@/components/apply-form/ApplyForm.vue';
import FashionShow from '@/components/fashion-show/FashionShow.vue';

/** css layout */
@Component({
	components: {
		// ApplyForm,
		FashionShow
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
