<script setup>
import { modeStore } from '@/stores/mode';
import { saveStore } from '@/stores/save';

const mode = modeStore();
const save = saveStore();

</script>


<template>
    <div id="tab-container" :class="save.theme">
        <ul>
            <li :key="tab" v-for="tab in save.tabs">
                <button v-if="tab == save.defaultTab" class="onglet active">{{ tab }}</button>
                <button v-else-if="!mode.edit" class="onglet" @click="save.chooseTab(tab)">{{ tab }}</button>
                <button v-else class="onglet todel">
                    {{ tab }}
                    <span>
                        <button class="btn-delete" @click="save.deleteTab(tab)">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"></path><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12"></path><path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path></g></svg>
                        </button>
                    </span>
                </button>
            </li>
			<Transition>
                <li v-if="mode.edit">
                    <button id="add-onglet" class="add-onglet" @click="mode.toggleAddTab()">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 256H112"></path></svg>
                    </button>
                </li>
            </Transition>
        </ul>
    </div>
</template>


<style scoped>
    @import '../assets/css/TabDark.css';
    @import '../assets/css/TabLight.css';


    #tab-container {
        height: 100%;
        min-height: 30px;
        overflow-x: auto;
        overflow-y: hidden;
    }

    ul {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        height: 100%;
        width: max-content;
    }

    li {
        position: relative;
        width: max-content;
        height: max-content;
    }

    button:not(.btn-delete) {
        cursor: pointer;
        font-weight: 400;
        height: 36px;
        border-radius: 5px;
        padding: 5px 15px;
        margin-right: 10px;
    }

    .active {
        pointer-events: none;
    }

    li button.todel:not(li span button.btn-delete ) {
        pointer-events: none;
        margin-right: 25px;
    }

    li span {
        z-index: 1000;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    li span button.btn-delete {
        pointer-events: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 24px !important;
        width: 24px !important;
        margin-right: 10px;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }

    li span button.btn-delete svg {
        z-index: 1000;
        height: 80%;
        width: auto;
    }

    #add-onglet {
        height: 30px;
        width: 30px;
        padding: 5px;
    }

    #add-onglet svg {
        height: 100%;
        width: auto;
    }

</style>