<script setup>
import { modeStore } from '@/stores/mode';
import Search from '@/components/Search.vue';
import Nav from '@/components/Nav.vue';
import { ref } from 'vue';

const sMode = modeStore()

const logo = ref('https://raw.githubusercontent.com/FabioDevCode/FabioDevCode/main/assets/fabiodevcode_new-logo.png');



</script>

<template>
	<section>
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
		<div v-if="sMode.menu" class="overlay-menu">
			<div id="menu-bar">
				<button @click="sMode.$toggleMenu()">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z" fill="currentColor"></path></svg>
				</button>

				<ul>
					<li>
						List menu 1
					</li>
					<li>
						List menu 1
					</li>
					<li>
						List menu 1
					</li>
				</ul>
			</div>
		</div>
	</Transition>
</template>


<style scoped>
	.global {
		padding: 10px;
		background-color: lightskyblue;
		background-color: #22272E;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
		border-radius: 10px;
	}

	section {
		overflow: hidden;
		background-color: whitesmoke;
		background-color: #151515;
		height: 100vh;
		width: 100%;
		padding: 10px;
	}

	main {
		min-height: 100%;
		width: 100%;
		/* background-color: goldenrod; */
		border-radius: 10px;

		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-gap: 10px;
		grid-template-rows: repeat(8, 1fr);
	}

	/* PRO TEMPLATE */
	#pro-logo {
		grid-column: 1 / 5;
  		grid-row: 1 / 6;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	#pro-logo img {
		/* display: block; */
		max-width: 80%;
		max-height: 80%;
		width: auto;
  		height: auto;
	}


	#pro-search {
		grid-column: 1 / 5;
  		grid-row: 6 / 9;
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



    .overlay-menu {
        position: absolute;
        height: 100vh;
        width: 100%;
		padding: 10px;
		display: flex;
		justify-content: flex-end;
		top: 0;
        background-color: rgba(0, 0, 0, .5);
    }

	#menu-bar {
		height: 100%;
		width: min(100%, 400px);
		border-radius: 10px;
		padding: 15px;
		background-color: #1b2125;

		display: flex;
		flex-direction: column;
		align-items: flex-end;

	}

	#menu-bar button {
		cursor: pointer;
		height: 40px;
		width: 40px;
        border-radius: 100%;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        background-color: whitesmoke;
        display: flex;
        justify-content: center;
        align-items: center;
	}

	#menu-bar ul {
		height: max-content;
		min-height: 300px;
		width: 100%;
		border-radius: 5px;
		margin: 20px 0;
		background-color: #232934
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