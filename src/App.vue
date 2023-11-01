<script setup>
import { modeStore } from '@/stores/mode';
import { configStore } from '@/stores/config';
// Widgets
import Horloge from '@/components/widgets/Horloge.vue';
import Google from '@/components/widgets/Google.vue';
import Npm  from '@/components/widgets/Npm.vue';
// Components
import Nav from '@/components/Nav.vue';
import Menu from '@/components/Menu.vue'
import MenuWidget from '@/components/MenuWidget.vue';


const mode = modeStore()
const config = configStore()


</script>

<template>
	<section :id="config.theme">
		<main>
			<Transition>
				<div id="pro-widget" class="global" v-if="mode.mode === 'pro'">
					<Horloge class="widget" />
					<Google class="widget" />
					<Npm class="widget" />
				</div>
			</Transition>

			<Transition>
				<div id="pro-title" class="global" v-if="mode.mode === 'pro'">
					<Nav class="nav" />
				</div>
			</Transition>

			<Transition>
				<div id="pro-link" class="global" v-if="mode.mode === 'pro'">

				</div>
			</Transition>

			<!-- TEMPLATE -->
			<Transition>
				<div id="hobbie-title" class="global" v-if="mode.mode === 'hobbie'">
					<Nav class="nav" />
				</div>
			</Transition>
			<Transition>
				<div id="hobbie-link" class="global" v-if="mode.mode === 'hobbie'">

				</div>
			</Transition>
		</main>
	</section>

	<Transition name="slide-fade">
		<Menu />
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
	#pro-widget {
		overflow: hidden;
		grid-column: 1 / 5;
  		grid-row: 1 / 9;
	}

	#pro-widget .widget {
		margin-bottom: 10px;
	}

	#pro-widget .w-horloge {
		grid-row: 1 / 3;
	}


	#pro-link {
		overflow: hidden;
		grid-column: 5 / 13;
  		grid-row: 2 / 9;
		display: grid;
		grid-template-columns: repeat(9, 1fr);
		grid-gap: 10px;
		grid-template-rows: repeat(8, 1fr);
	}

	#pro-title {
		overflow: hidden;
		grid-column: 5 / 13;
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