<script setup>
import { modeStore } from '@/stores/mode';
import { configStore } from '@/stores/config';
import Search from '@/components/Search.vue';
import Nav from '@/components/Nav.vue';
import Menu from '@/components/Menu.vue'
import { ref } from 'vue';

const sMode = modeStore()
const Config = configStore()


const logo = ref('https://fabiolopes844606271.files.wordpress.com/2018/03/prft.png');


</script>

<template>
	<section :id="Config.theme">
		<main>
			<Transition>
				<div id="pro-logo" class="global" v-if="sMode.mode === 'pro'">
					<img :src="logo" alt="logo">
				</div>
			</Transition>

			<Transition>
				<div id="pro-search" class="global" v-if="sMode.mode === 'pro'">
					<Search />
				</div>
			</Transition>

			<Transition>
				<div id="pro-link" class="global" v-if="sMode.mode === 'pro'">
					<Nav class="nav" />

				</div>
			</Transition>

			<!-- TEMPLATE -->

			<Transition>
				<div id="hobbie-title" class="global" v-if="sMode.mode === 'hobbie'">
					<Nav class="nav" />
				</div>
			</Transition>

			<Transition>
				<div id="hobbie-link" class="global" v-if="sMode.mode === 'hobbie'">

				</div>
			</Transition>

		</main>
	</section>

	<Transition name="slide-fade">
		<Menu />
	</Transition>
</template>


<style scoped>
	/* DARK THEME */
	#dark {
		background-color: var(--dark-bg);
	}
	#dark main {
		background-color: var(--dark-bg);
	}
	#dark main .global {
		background-color: var(--dark-bg);
	}


	/* LIGHT THEME */
	#light {
		background-color: var(--light-bg);
	}
	#light main {
		background-color: var(--light-bg);
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
		padding: 20px;
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
	#pro-logo {
		position: relative;
		/* background-color: crimson; */
		grid-column: 1 / 5;
  		grid-row: 1 / 5;

		display: flex;
		justify-content: center;
		align-items: flex-end;
	}

	#pro-logo img {
		/* display: block; */
		max-width: 80%;
		max-height: 60%;
		width: auto;
  		height: auto;
	}


	#pro-search {
		grid-column: 1 / 5;
  		grid-row: 5 / 9;
	}

	#pro-link {
		grid-column: 5 / 13;
  		grid-row: 1 / 9;

		display: grid;
		grid-template-columns: repeat(9, 1fr);
		grid-gap: 10px;
		grid-template-rows: repeat(8, 1fr);
	}

	#pro-link .nav {
		grid-column: 1 / 10;
		grid-row: 1 / 2;
	}



	/* HOBBIE TEMPLATE */
	#hobbie-title {
		grid-column: 1 / 13;
		grid-row: 1 / 2;
	}

	#hobbie-link {
		grid-column: 1 / 13;
		grid-row: 2 / 9;
	}


	.v-enter-active,
	.v-leave-active {
		transition: opacity 0.4s ease-in-out;
	}
	.v-enter-from,
	.v-leave-to {
		opacity: 0;
	}

	.slide-fade-enter-active {
		transition: all 0.4s ease-out;
	}

	.slide-fade-leave-active {
		transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
	}

	.slide-fade-enter-from,
	.slide-fade-leave-to {
		transform: translateX(20px);
		opacity: 0;
	}
</style>