<script setup>










</script>

<template>
	<section>


		<main>

			<div class="grid-item">1</div>
			<div class="grid-item">2</div>
			<div class="grid-item">3</div>
			<div class="grid-item">4</div>
			<div class="grid-item">5</div>
			<div class="grid-item">6</div>
			<div class="grid-item">7</div>
			<div class="grid-item">8</div>
			<div class="grid-item">9</div>
			<div class="grid-item">10</div>
			<div class="grid-item">11</div>
			<div class="grid-item">12</div>

			<div class="grid-item">1</div>
			<div class="grid-item">2</div>
			<div class="grid-item">3</div>
			<div class="grid-item">4</div>
			<div class="grid-item">5</div>
			<div class="grid-item">6</div>
			<div class="grid-item">7</div>
			<div class="grid-item">8</div>
			<div class="grid-item">9</div>
			<div class="grid-item">10</div>
			<div class="grid-item">11</div>
			<div class="grid-item">12</div>

			<div class="grid-item">1</div>
			<div class="grid-item">2</div>
			<div class="grid-item">3</div>
			<div class="grid-item">4</div>
			<div class="grid-item">5</div>
			<div class="grid-item">6</div>
			<div class="grid-item">7</div>
			<div class="grid-item">8</div>
			<div class="grid-item">9</div>
			<div class="grid-item">10</div>
			<div class="grid-item">11</div>
			<div class="grid-item">12</div>

			<div class="grid-item">1</div>
			<div class="grid-item">2</div>
			<div class="grid-item">3</div>
			<div class="grid-item">4</div>
			<div class="grid-item">5</div>
			<div class="grid-item">6</div>
			<div class="grid-item">7</div>
			<div class="grid-item">8</div>
			<div class="grid-item">9</div>
			<div class="grid-item">10</div>
			<div class="grid-item">11</div>
			<div class="grid-item">12</div>

			<div class="grid-item">1</div>
			<div class="grid-item">2</div>
			<div class="grid-item">3</div>
			<div class="grid-item">4</div>
			<div class="grid-item">5</div>
			<div class="grid-item">6</div>
			<div class="grid-item">7</div>
			<div class="grid-item">8</div>
			<div class="grid-item">9</div>
			<div class="grid-item">10</div>
			<div class="grid-item">11</div>
			<div class="grid-item">12</div>

			<div class="grid-item">1</div>
			<div class="grid-item">2</div>
			<div class="grid-item">3</div>
			<div class="grid-item">4</div>
			<div class="grid-item">5</div>
			<div class="grid-item">6</div>
			<div class="grid-item">7</div>
			<div class="grid-item">8</div>
			<div class="grid-item">9</div>
			<div class="grid-item">10</div>
			<div class="grid-item">11</div>
			<div class="grid-item">12</div>

			<div class="grid-item">1</div>
			<div class="grid-item">2</div>
			<div class="grid-item">3</div>
			<div class="grid-item">4</div>
			<div class="grid-item">5</div>
			<div class="grid-item">6</div>
			<div class="grid-item">7</div>
			<div class="grid-item">8</div>
			<div class="grid-item">9</div>
			<div class="grid-item">10</div>
			<div class="grid-item">11</div>
			<div class="grid-item">12</div>

			<div class="grid-item">1</div>
			<div class="grid-item">2</div>
			<div class="grid-item">3</div>
			<div class="grid-item">4</div>
			<div class="grid-item">5</div>
			<div class="grid-item">6</div>
			<div class="grid-item">7</div>
			<div class="grid-item">8</div>
			<div class="grid-item">9</div>
			<div class="grid-item">10</div>
			<div class="grid-item">11</div>
			<div class="grid-item">12</div>
		</main>



	</section>
</template>


<style scoped>
	section {
		overflow: hidden;
		background-color: teal;
		height: 100vh;
		width: 100%;
		padding: 1.2em;
	}


	main {
		overflow: hidden;
		min-height: 100%;
		width: 100%;
		background-color: goldenrod;

		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-gap: 10px;
		grid-auto-rows: minmax(100px, 1fr);
	}

	.grid-item {
		background-color: #222;
	}


</style>