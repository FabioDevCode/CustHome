<script setup>
import { ref } from 'vue';
import { utilsStore } from '@/stores/utils';
import google_logo from '@/assets/img/google_logo.png';

const utils = utilsStore();
const val = ref('');


function openTabWithSearch(tag) {
    if(val.value.trim().length && tag) {
        window.open(utils.prepareUrl(tag, val), '_blank');
        val.value = '';
    }
};
</script>

<template>
    <div id="bloc-search">
        <form @submit.prevent>
            <img :src="google_logo" alt="logo google">
            <input v-model="val" type="text" placeholder="Effectuez une recherche sur Google.">
            <button id="search-in" @click="openTabWithSearch('classic')">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8z" fill="currentColor"></path></svg>
            </button>
        </form>
    </div>
</template>


<style scoped>
    /* DARK THEME */
    .dark li button {
        background-color: #CFD8DC;
        color: black;
    }
    .dark li button:hover {
        background-color: #ECEFF1;
    }


    /* LIGHT THEME */
    .light li button {
        background-color: #212121;
        color: whitesmoke;
    }
    .light li button:hover {
        background-color: #323232;
    }


    /* OTHERS CSS PROPERTIES */
    #bloc-search {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
		border-radius: 5px;
        width: 100%;
        min-width: 300px;
        height: max-content;
    }

    #bloc-search form {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 100%;
        border-radius: 5px;
        overflow: hidden;
        background-color: whitesmoke;
        border: 2px solid whitesmoke;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    #bloc-search form img {
        height: 40%;
        margin: 0 10px;
        opacity: .8;
    }


    #bloc-search form input {
        font-size: 1em;
        height: 100%;
        width: calc(100% - 50px);
        border-radius: 5px;
        background-color: whitesmoke;
        padding: 0 10px 0 0;
    }

    #bloc-search form:focus-within {
        border: 2px solid #1976D2;
    }

    #bloc-search form button {
        background-color: whitesmoke;
        height: 50px;
        width: 50px;
        border-radius: 5px;
    }

    #bloc-search form button svg {
        height: 20px;
        width: 20px;
        color: #444444;
    }

    #btn-search {
        width: 100%;
        height: max-content;
        display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 10px;
		grid-template-rows: repeat(2, 1fr);

    }

    #btn-search li {
        width: 100%;
        height: max-content;
        border-radius: 50px;
    }

    #btn-search li button {
        width: 100%;
        height: 50px;
        border-radius: 5px;
        padding: 5px;
    }

    #btn-search li button:active {
        transform: scale(.98);
    }

    #btn-search li button svg {
        height: 22px;
        width: 22px;
        margin-right: 12px;
    }

    #btn-search li button p {
        font-size: 1.15em;
        font-weight: 600;
    }
</style>