<script setup>
import { onMounted, ref } from 'vue';
import { modeStore } from '@/stores/mode';
import { configStore } from '@/stores/config';
// Widgets
import Horloge from '@/components/widgets/Horloge.vue';
import Google from '@/components/widgets/Google.vue';
import Npm  from '@/components/widgets/Npm.vue';
// Components
import Nav from '@/components/Nav.vue';
import Menu from '@/components/Menu.vue'
import MenuLink from '@/components/MenuLink.vue'
import MenuWidget from '@/components/MenuWidget.vue';
import Link from '@/components/Link.vue';
import LogoCustHome from '@/components/LogoCustHome.vue';


const mode = modeStore()
const config = configStore()


onMounted(() => {
	const savedLinks = JSON.parse(localStorage.getItem('CustHomeLinks'));
	if(savedLinks?.length) {
		config.links = savedLinks
	}
});
</script>

<template>
	<section :id="config.theme">
		<main>
			<Transition>
				<div id="pro-widget" class="global" v-if="mode.mode === 'pro'">
					<Horloge class="widget" />
					<Google class="widget" />
					<!-- <Npm class="widget" /> -->

				</div>
			</Transition>

			<Transition>
				<div id="pro-title" class="global" v-if="mode.mode === 'pro'">
					<LogoCustHome />

					<div class="container-nav">
						<Nav class="nav" />
					</div>
				</div>
			</Transition>

			<Transition>
				<div id="pro-link" class="global" v-if="mode.mode === 'pro'">
					<Link class="link" :url="link.url" :name="link.name" :key="link.name" v-for="link in config.links" />

				</div>
			</Transition>

			<!-- TEMPLATE -->
			<Transition>
				<div id="hobbie-title" class="global" v-if="mode.mode === 'hobbie'">
					<LogoCustHome />

					<div class="container-nav">
						<Nav class="nav" />
					</div>
				</div>
			</Transition>
			<Transition>
				<div id="hobbie-link" class="global" v-if="mode.mode === 'hobbie'">
					<Link class="link" :url="link.url" :name="link.name" :key="link.name" v-for="link in config.links" />


				</div>
			</Transition>
		</main>
	</section>


	<Transition name="slide-fade">
		<Menu />
	</Transition>
	<Transition name="slide-fade">
		<MenuLink />
	</Transition>
	<Transition name="slide-fade">
		<MenuWidget />
	</Transition>
</template>


<style scoped>
	/* DARK THEME */
	#dark {
		background-color: var(--dark-bg);
	}
	#dark main {
		background-color: var(--dark-bg);
		background-color: transparent;
	}
	#dark main .global {
		background-color: var(--dark-bg);
        background-color: #171e28;
	}


	/* LIGHT THEME */
	#light {
		background-color: var(--light-bg);
	}
	#light main {
		background-color: var(--light-bg);
		background-color: transparent;
	}
	#light main .global {
		background-color: var(--light-bg);
	}



	.global {
		padding: 10px;
		border-radius: 10px;
	}

	section {
		overflow: hidden;
		position: relative;
		height: 100vh;
		width: 100%;
		padding: 10px;
	}

	main {
		height: 100%;
		width: 100%;
		border-radius: 10px;
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-gap: 10px;
		grid-template-rows: repeat(8, 1fr);
	}

	/* PRO TEMPLATE */
	#pro-widget {
		overflow: hidden;
		grid-column: 1 / 5;
  		grid-row: 1 / 9;
	}

	#pro-widget .widget {
		margin-bottom: 20px;
	}

	#pro-widget .w-horloge {
		grid-row: 1 / 3;
	}


	#pro-link {
		overflow: hidden;
		grid-column: 5 / 13;
  		grid-row: 2 / 9;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 20px;
		grid-template-rows: repeat(12, 1fr);
	}

	#pro-title {
		overflow: hidden;
		grid-column: 5 / 13;
		grid-row: 1 / 2;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.container-nav {
		padding: 0px;
		height: 100%;
	}

	/* HOBBIE TEMPLATE */
	#hobbie-title {
		overflow: hidden;
		grid-column: 1 / 13;
		grid-row: 1 / 2;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	#hobbie-link {
		overflow: hidden;
		grid-column: 1 / 13;
		grid-row: 2 / 9;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-gap: 20px;
		grid-template-rows: repeat(9, 1fr);
	}

</style>