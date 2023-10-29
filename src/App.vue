<script setup>
import Search from '@/components/Search.vue';
import { ref } from 'vue';

const pro_mode = ref(true);
const hobbie_mode = ref(false);
const logo = ref('https://raw.githubusercontent.com/FabioDevCode/FabioDevCode/main/assets/fabiodevcode_new-logo.png');


const search = ref('');


</script>

<template>
	<section>
		<main>
			<div id="pro-logo" class="global" v-if="pro_mode">
				<img :src="logo" alt="logo">
			</div>

			<div id="pro-search" class="global" v-if="pro_mode">
				<Search />
			</div>

			<div id="pro-link" class="global" v-if="pro_mode">
				LINKS
			</div>

			<!-- TEMPLATE -->

			<div id="hobbie-title" class="global" v-if="hobbie_mode">
				HOBBIE TITLE
			</div>

			<div id="hobbie-link" class="global" v-if="hobbie_mode">
				HOBBIE LINKS
			</div>
		</main>
	</section>
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

</style>