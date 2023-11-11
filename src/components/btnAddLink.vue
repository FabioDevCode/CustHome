<script setup>
import { modeStore } from '@/stores/mode';
import { saveStore } from '@/stores/save';

const mode = modeStore();
const save = saveStore();

</script>

<template>
    <button id="edit" :class="save.theme" @click="mode.toggleAddLink()">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 256H112"></path></svg>
    </button>
</template>


<style scoped>
    button {
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        min-height: 50px;
        height: 100%;
        width: 100%;
        min-width: 250px;
        padding: 5px 20px;
        border-radius: 5px;
    }

    button svg {
        height: 22px;
    }

    #edit {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #edit svg {
        height: 30px;
    }

    #edit.dark {
        background: transparent;
        color: #00796B;
        border: 1px dashed #00796B;
        filter: grayscale(1);
    }

    #edit.dark:hover {
        background-color: #172819;
        filter: grayscale(0);
    }

    #edit.light {
        background: transparent;
        color: #00796B;
        border: 1px dashed #00796B;
        filter: grayscale(1);
    }

    #edit.light:hover {
        background-color: #9dd49f;
        filter: grayscale(0);
    }
</style>