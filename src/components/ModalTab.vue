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
    <div id="modal-tab" v-if="mode.addtab">
        <form @submit.prevent>
            <h4>AJOUTER UN ONGLET</h4>

            <input v-model="new_tab" type="text" placeholder="Nom du nouvel onglet" autofocus>

            <button class="add" @click="addNewTabWithResetInput()">
                Ajouter l'onglet
            </button>
            <button class="back-edit" @click="mode.toggleAddTab()">
                Fermer
            </button>
        </form>
    </div>
</template>



<style scoped>

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