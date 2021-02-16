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
				<li>
					<a>
						<img src="@/assets/circle/a1@2x.png" />
						<div class="circle-container-list-sub-item">
							<h1>Marc Webb</h1>
							<div class="circle-container-list-sub-item-dot">
								<h2>Dashboard design</h2>
								<div class="circle-container-list-sub-item-point"></div>
							</div>
							<p>Hi Laura, I like your works, and looking for it.</p>
						</div>
						<div class="circle-container-list-sub-time">20 min ago</div>
					</a>
				</li>
				<li>
					<a>
						<img src="@/assets/circle/a2@2x.png" />
						<div class="circle-container-list-sub-item">
							<h1>Cora Walters</h1>
							<div class="circle-container-list-sub-item-dot">
								<h2>Feeback</h2>
								<div class="circle-container-list-sub-item-point"></div>
							</div>
							<p>Here is my feedback, overall it looks very nice.</p>
						</div>
						<div class="circle-container-list-sub-time">5 hr ago</div>
					</a>
				</li>
				<li>
					<a>
						<img src="@/assets/circle/a3@2x.png" />
						<div class="circle-container-list-sub-item">
							<h1>Johnny Munoz</h1>
							<h2>Let's meet in NY</h2>
							<p>Hey Laura, What about to grab some beer?</p>
						</div>
						<div class="circle-container-list-sub-time">11:30</div>
					</a>
				</li>
				<li>
					<a>
						<div class="circle-container-list-sub-avata">J</div>
						<div class="circle-container-list-sub-item circle-container-list-sub-item-fix">
							<h1>Jesse Richards</h1>
							<h2>Introducing the new version</h2>
							<p></p>
						</div>
						<div class="circle-container-list-sub-time">8:38</div>
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
export default class CircleList extends Vue {}
</script>
