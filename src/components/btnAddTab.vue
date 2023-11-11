<script setup>
import { modeStore } from '@/stores/mode';
import { saveStore } from '@/stores/save';

const mode = modeStore();
const save = saveStore();


</script>


<template>
    <li :class="save.theme">
        <button id="add-onglet" class="add-onglet" @click="mode.toggleAddTab()">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 256H112"></path></svg>
        </button>
    </li>
</template>


<style scoped>
    li {
        position: relative;
        width: max-content;
        height: max-content;
    }

    #add-onglet {
        height: 30px;
        width: 30px;
        border-radius: 5px;
        padding: 5px;
    }

    #add-onglet svg {
        height: 100%;
        width: auto;
    }

    li.dark button.add-onglet {
        background-color: transparent;
        color: #00796B;
        border: 1px dashed #00796B;
        filter: grayscale(1);
    }

    li.dark button.add-onglet:hover {
        background-color: #172819;
        filter: grayscale(0);
    }

    li.light button.add-onglet {
        background-color: transparent;
        color: #00796B;
        border: 1px dashed #00796B;
        filter: grayscale(1);
    }

    li.light button.add-onglet:hover {
        background-color: #9dd49f;
        filter: grayscale(0);
    }

</style>