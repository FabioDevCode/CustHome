<script setup>
import { ref } from 'vue';
import { toast } from 'vue3-toastify';

import { modeStore } from '@/stores/mode';
import { saveStore } from '@/stores/save';

const mode = modeStore();
const save = saveStore();


const new_tab = ref('');

function addNewTabWithResetInput() {
    if(!new_tab.value.length) {
        return toast.error("Le champs est vide.", {
            theme: 'dark',
            position: 'bottom-left',
            autoClose: 2000,
        });
    }

    save.addNewTab(new_tab.value);
    new_tab.value = '';
};
</script>


<template>
    <div id="modal-tab" v-if="mode.addtab" :class="save.theme">
        <span id="overlay-close" @click="mode.closeAddTab()"></span>
        <form @submit.prevent>
            <h4>ONGLET</h4>

            <input v-model="new_tab" type="text" placeholder="Nom du nouvel onglet" autofocus>

            <button class="add" @click="addNewTabWithResetInput()">
                Ajouter l'onglet
            </button>
            <button class="back-edit" @click="mode.closeAddTab()">
                Fermer
            </button>
        </form>
    </div>
</template>



<style scoped>
    @import '../assets/css/ModalDark.css';
    @import '../assets/css/ModalLight.css';

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
    }

    #overlay-close {
        position: absolute;
        left: 0;
        height: 100%;
        width: 20%;
        background-color: transparent;
        width: 100%
    }

    #modal-tab form {
        z-index: 10000;
        border-radius: 10px;
        padding: 10px;
        height: max-content;
        min-height: max-content;
        width: 25vw;
        min-width: 320px;
    }

    #modal-tab form h4 {
        font-size: 30px;
        display: inline-block;
        height: 40px;
        width: 100%;
        margin-bottom: 10px;
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
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 10px;
    }

    #modal-tab form button.back-edit {
        height: 40px;
        width: 100%;
        font-size: 1rem;
        font-weight: 600;
    }
</style>