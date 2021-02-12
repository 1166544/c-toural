<template>
	<div class="cards-fashion-show-right-bottom">
		<div class="cards-fashion-show-right-bottom-top">
			<h1>Good morning,Michal</h1>
			<p>Here whats happening in yur VL account today</p>
		</div>
		<ul class="cards-fashion-show-right-bottom-bottom">
			<li>
				<div class="cards-fashion-show-right-bottom-bottom-item">
					<div class="cards-fashion-show-right-bottom-bottom-item-title">
						<h1>Long Time</h1>
						<h2>+</h2>
					</div>
					<ul>
						<li class="cards-fashion-show-right-bottom-bottom-item-spa">
							<a class="cards-fashion-show-right-bottom-bottom-item-li">
								<div class="cards-fashion-show-right-bottom-bottom-item-li-left">
									<div class="cards-fashion-show-right-bottom-bottom-item-li-round">
										<img src="@/assets/fashion/clock.png" />
									</div>
									<h1>VLweb_203</h1>
								</div>
								<h2>4H</h2>
							</a>
						</li>
						<li class="cards-fashion-show-right-bottom-bottom-item-spa">
							<a class="cards-fashion-show-right-bottom-bottom-item-li">
								<div class="cards-fashion-show-right-bottom-bottom-item-li-left">
									<div class="cards-fashion-show-right-bottom-bottom-item-li-round">
										<img src="@/assets/fashion/clock.png" />
									</div>
									<h1>VLweb_204</h1>
								</div>
								<h2>2H</h2>
							</a>
						</li>
						<li class="cards-fashion-show-right-bottom-bottom-item-spa">
							<a class="cards-fashion-show-right-bottom-bottom-item-li">
								<div class="cards-fashion-show-right-bottom-bottom-item-li-left">
									<div class="cards-fashion-show-right-bottom-bottom-item-li-round">
										<img src="@/assets/fashion/clock.png" />
									</div>
									<h1>VLweb_205</h1>
								</div>
								<h2>1H</h2>
							</a>
						</li>
					</ul>
				</div>
			</li>
			<li>
				<div class="cards-fashion-show-right-bottom-bottom-item">
					<div class="cards-fashion-show-right-bottom-bottom-item-title">
						<h1>Calendar</h1>
						<h2>+</h2>
					</div>
					<ul>
						<li class="cards-fashion-show-right-bottom-bottom-item-spa cards-fashion-show-right-bottom-bottom-item-spa-blue">
							<a class="cards-fashion-show-right-bottom-bottom-item-li">
								<div class="cards-fashion-show-right-bottom-bottom-item-li-left">
									<div class="cards-fashion-show-right-bottom-bottom-item-li-round">
										<img src="@/assets/fashion/schedule.png" />
									</div>
									<h1>Webflow Trainings</h1>
								</div>
								<h2>22:11</h2>
							</a>
						</li>
						<li class="cards-fashion-show-right-bottom-bottom-item-spa cards-fashion-show-right-bottom-bottom-item-spa-blue">
							<a class="cards-fashion-show-right-bottom-bottom-item-li">
								<div class="cards-fashion-show-right-bottom-bottom-item-li-left">
									<div class="cards-fashion-show-right-bottom-bottom-item-li-round">
										<img src="@/assets/fashion/schedule.png" />
									</div>
									<h1>Dominika 1-1</h1>
								</div>
								<h2>01.12</h2>
							</a>
						</li>
						<li class="cards-fashion-show-right-bottom-bottom-item-spa cards-fashion-show-right-bottom-bottom-item-spa-blue">
							<a class="cards-fashion-show-right-bottom-bottom-item-li">
								<div class="cards-fashion-show-right-bottom-bottom-item-li-left">
									<div class="cards-fashion-show-right-bottom-bottom-item-li-round">
										<img src="@/assets/fashion/schedule.png" />
									</div>
									<h1>Call with Krzysiek</h1>
								</div>
								<h2>05.12</h2>
							</a>
						</li>
					</ul>
				</div>
			</li>
			<li class="cards-fashion-show-right-bottom-bottom-last">
				<div class="cards-fashion-show-right-bottom-bottom-item">
					<div class="cards-fashion-show-right-bottom-bottom-item-title">
						<h1>Documents</h1>
						<h2></h2>
					</div>
					<ul>
						<li class="cards-fashion-show-right-bottom-bottom-item-spa cards-fashion-show-right-bottom-bottom-item-spa-green">
							<a class="cards-fashion-show-right-bottom-bottom-item-li">
								<div class="cards-fashion-show-right-bottom-bottom-item-li-left">
									<div class="cards-fashion-show-right-bottom-bottom-item-li-round">
										<img src="@/assets/fashion/document.png" />
									</div>
									<h1>Timesheet.doc</h1>
								</div>
								<h2>11kb</h2>
							</a>
						</li>
						<li class="cards-fashion-show-right-bottom-bottom-item-spa cards-fashion-show-right-bottom-bottom-item-spa-green">
							<a class="cards-fashion-show-right-bottom-bottom-item-li">
								<div class="cards-fashion-show-right-bottom-bottom-item-li-left">
									<div class="cards-fashion-show-right-bottom-bottom-item-li-round">
										<img src="@/assets/fashion/document.png" />
									</div>
									<h1>Business Value.pdf</h1>
								</div>
								<h2>2.45mb</h2>
							</a>
						</li>
						<li class="cards-fashion-show-right-bottom-bottom-item-spa cards-fashion-show-right-bottom-bottom-item-spa-green">
							<a class="cards-fashion-show-right-bottom-bottom-item-li">
								<div class="cards-fashion-show-right-bottom-bottom-item-li-left">
									<div class="cards-fashion-show-right-bottom-bottom-item-li-round">
										<img src="@/assets/fashion/document.png" />
									</div>
									<h1>Client Proposal.pdf</h1>
								</div>
								<h2>54kb</h2>
							</a>
						</li>
					</ul>
				</div>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import './FashionBottom.less';

/** Fashion bottom */
@Component
export default class FashionBottom extends Vue {}
</script>
