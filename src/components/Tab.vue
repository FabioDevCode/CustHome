<script setup>
import btnAddTab from '@/components/btnAddTab.vue';

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
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z" fill="currentColor"></path></svg>
                        </button>
                    </span>
                </button>
            </li>

            <btnAddTab />
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
        padding-right: 45px;
        pointer-events: none;
    }

    li span {
        z-index: 1000;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-right: 10px;
    }

    li span button.btn-delete {
        pointer-events: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 24px !important;
        width: 24px !important;
        margin-right: 5px;
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