<script setup>
import { onMounted, ref } from 'vue';
import { modeStore } from '@/stores/mode';
import { saveStore } from '@/stores/save';
// Widgets
import Horloge from '@/components/widgets/Horloge.vue';
import Google from '@/components/widgets/Google.vue';
import Npm  from '@/components/widgets/Npm.vue';
// Components
import Nav from '@/components/Nav.vue';
import Menu from '@/components/Menu.vue'
import MenuWidget from '@/components/MenuWidget.vue';
import Link from '@/components/Link.vue';
import Tab from '@/components/Tab.vue';
import ModalLink from '@/components/ModalLink.vue';
import ModalTab from '@/components/ModalTab.vue';


const mode = modeStore()
const save = saveStore()


onMounted(() => {
	const localSave = JSON.parse(localStorage.getItem('CustHome'));
	if(localSave && Object.entries(localSave).length) {
		save.synchroniseLocalSave(localSave);
	} else {
		localStorage.setItem('CustHome', JSON.stringify({
			theme: save.theme,
			widget: save.widget,
			widgetList: save.widgetList,
			defaultTab: save.defaultTab,
			tabs: save.tabs,
			linkViews:  save.linkViews
		}))
	}
});
</script>

<template>
	<section :id="save.theme">
		<main>
			<Transition>
				<div v-if="save.widget" id="pro-widget" class="global">
					<Horloge class="widget" />
					<Google class="widget" />
					<!-- <Npm class="widget" /> -->
				</div>
			</Transition>
			<Transition>
				<div v-if="save.widget" id="pro-title" class="global">
					<div class="container-nav">
						<Nav class="nav" />
					</div>
					<Tab />
				</div>
				<div v-else id="pro-title" class="global without-widget">
					<div class="container-nav">
						<Nav class="nav" />
					</div>
					<Tab />
				</div>
			</Transition>
			<Transition>
				<div v-if="save.widget" id="pro-link" class="global">
					<div class="container-link">
						<Link class="link" :url="link.url" :name="link.name" :key="link.name" v-for="link in save.linkViews[save.defaultTab]" />
						<Transition>
							<Link v-if="mode.edit" class="link edit" edit="edit" @click="mode.toggleAddLink()" />
						</Transition>
					</div>
				</div>
				<div v-else id="pro-link" class="global without-widget">
					<div class="container-link">
						<Link class="link" :url="link.url" :name="link.name" :key="link.name" v-for="link in save.linkViews[save.defaultTab]" />
						<Transition>
							<Link v-if="mode.edit" class="link edit" edit="edit" @click="mode.toggleAddLink()" />
						</Transition>
					</div>
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
	<Transition>
		<ModalLink />
	</Transition>
	<Transition>
		<ModalTab />
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
        /* background-color: #171e28; */
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
		overflow: hidden;
		padding: 10px;
		border-radius: 10px;
	}

	section {
		overflow: hidden;
		position: relative;
		height: 100vh;
		width: 100%;
		padding: 10px;
		/* background-color: teal !important; */
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
		overflow-y: auto;
		overflow-x: hidden;
		grid-column: 5 / 13;
  		grid-row: 2 / 9;
	}

	#pro-link.without-widget {
		grid-column: 1 / 13;
  		grid-row: 2 / 9;
	}

	#pro-link .container-link {
		height: max-content;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		grid-gap: 20px;
		grid-template-rows: repeat(auto, 1fr);
	}

	#pro-link.without-widget .container-link {
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	}


	#pro-title {
		overflow: hidden;
		min-height: 70px;
		grid-column: 5 / 13;
		grid-row: 1 / 2;
		/*  */
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-gap: 10px;
		grid-template-rows: repeat(2, 1fr);
	}

	#pro-title.without-widget {
		grid-column: 1 / 13;
		grid-row: 1 / 2;
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