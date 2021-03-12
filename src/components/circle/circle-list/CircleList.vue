<template>
	<div class="circle-container-list">
		<div class="circle-container-list-top">
			<div class="circle-container-list-top-circle">
				<img src="@/assets/circle/correct@2x.png" />
			</div>
			<h1>Payment sucessful</h1>
			<p>You successfuly paid 250 USD to Laure Norbert.</p>
		</div>
		<div class="circle-container-list-sub">
			<h1>Hello Laura,</h1>
			<p>you have <span>2</span> new important emails today</p>
			<ul>
				<li v-for="item in renderList" :key="item.title">
					<a>
						<img :src="item.src" v-if="item.src" />
						<div class="circle-container-list-sub-avata" v-if="!item.src">J</div>
						<div class="circle-container-list-sub-item" v-if="item.desc">
							<h1>{{ item.title }}</h1>
							<div class="circle-container-list-sub-item-dot">
								<h2>{{ item.subTitle }}</h2>
								<div class="circle-container-list-sub-item-point"></div>
							</div>
							<p>{{ item.desc }}</p>
						</div>
						<div v-if="!item.desc" class="circle-container-list-sub-item circle-container-list-sub-item-fix">
							<h1>{{ item.title }}</h1>
							<h2>{{ item.subTitle }}</h2>
							<p></p>
						</div>
						<div class="circle-container-list-sub-time">{{ item.time }}</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import '@/components/circle/circle-list/CircleList.less';

/** circle list */
@Component
export default class CircleList extends Vue {
	/** 渲染列表 */
	protected renderList: Array<IRenderListItem> = [];

	/** mounted */
	public mounted(): void {
		const timeout: any = setTimeout(() => {
			this.renderList.push({
				src: 'https://fanyi-cdn.cdn.bcebos.com/static/translation/img/header/logo_40c4f13.svg',
				title: 'Cora Walters',
				subTitle: 'Feeback',
				desc: 'Here is my feedback, overall it looks very nice.',
				time: '5 hr ago'
			});
			this.renderList.push({
				src: 'https://fanyi-cdn.cdn.bcebos.com/static/translation/img/header/logo_40c4f13.svg',
				title: 'Johnny Munoz',
				subTitle: "Let's meet in NY",
				desc: 'Hey Laura, What about to grab some beer?',
				time: '11:30'
			});
			this.renderList.push({
				title: 'Jesse Richards',
				subTitle: 'Introducing the new version',
				time: '8:38'
			});

			clearTimeout(timeout);
		}, 2000);
	}
}

/** 渲染数据结构 */
export interface IRenderListItem {
	src?: string;
	title: string;
	subTitle: string;
	desc?: string;
	time: string;
}
</script>
