<script setup>
import { ref } from 'vue';
// STORES
import { modeStore } from '@/stores/mode';
import { saveStore } from '@/stores/save';

const mode = modeStore();
const save = saveStore();


const new_tab = ref('');

function addNewTabWithResetInput() {
    save.addNewTab(new_tab.value);
    new_tab.value = '';
};
</script>


<template>
    <div id="tab-container">
        <ul>
            <li :key="tab" v-for="tab in save.tabs">
                <button v-if="tab == save.defaultTab" class="onglet active">{{ tab }}</button>
                <button v-else class="onglet" @click="save.chooseTab(tab)">{{ tab }}</button>
            </li>
			<Transition>
                <li v-if="mode.edit">
                    <button id="add-onglet" @click="mode.toggleAddTab()">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 256H112"></path></svg>
                    </button>
                </li>
            </Transition>
        </ul>
    </div>

    <!-- MODAL -->
    <Transition>
        <div id="modal-tab" v-if="mode.addtab">
            <form @submit.prevent>
                <h4>AJOUTER UN ONGLET</h4>

                <input v-model="new_tab" type="text" placeholder="Nom du nouvel onglet">
                <button class="add" @click="addNewTabWithResetInput()">
                    Ajouter l'onglet
                </button>
                <button class="back-edit" @click="mode.toggleAddTab()">
                    Fermer
                </button>
            </form>
        </div>
    </Transition>
</template>


<style scoped>
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
        width: max-content;
        height: max-content;
    }

    button {
        cursor: pointer;
        font-weight: 400;
        height: 36px;
        border-radius: 5px;
        padding: 5px 15px;
        margin-right: 10px;
    }

    .onglet {
        color: #4a5b78;
        background-color: #252d3a;
    }

    .active {
        pointer-events: none;
        color: #171e28;
        background-color: #1976D2;
    }


    #add-onglet {
        height: 30px;
        width: 30px;
        padding: 5px;
        /* background-color: #171e28;
        color: #1976D2;
        border: 1px dashed #1976D2; */
        background-color: #172819;
        color: #00796B;
        border: 1px dashed #00796B;
    }

    #add-onglet svg {
        height: 100%;
        width: auto;
    }


    /* MODAL */
    #modal-tab {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, .5);
    }

    #modal-tab form {
        border-radius: 10px;
        padding: 10px;
        height: max-content;
        min-height: max-content;
        width: 25vw;
        min-width: 320px;
        background-color: #1b2125;
    }

    #modal-tab form h4 {
        font-size: 30px;
        display: inline-block;
        height: 40px;
        width: 100%;
        margin-bottom: 10px;
        color: rgba(245, 245, 245, .2);
    }

    #modal-tab form input {
        font-size: 1rem;
        height: 40px;
        width: 100%;
        border-radius: 5px;
        background-color: whitesmoke;
        padding: 0 10px;
        margin-bottom: 10px;

    }

    #modal-tab form button {
        border-radius: 5px;
    }

    #modal-tab form button.add {
        height: 40px;
        width: 100%;
        background-color: #00796B;
        color: whitesmoke;
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 10px;
    }

    #modal-tab form button.back-edit {
        height: 40px;
        width: 100%;
        background-color: #FF1744;
        font-size: 1rem;
        font-weight: 600;
    }



</style>