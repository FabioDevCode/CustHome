<script setup>
import { toast } from 'vue3-toastify';
import { ref } from 'vue';

const val = ref('');


function openTabWithSearch(tag) {
    if(!val.value.trim().length) {
        toast.error('Le champ de recherche est vide.', {
            position: 'top-left',
            theme: 'light',
            autoClose: 5000
        })
    }

    if(val.value.trim().length && tag) {
        if(prepareUrl(tag).length) {
            window.open(prepareUrl(tag), '_blank');
            val.value = '';
        }
    }
};

function prepareUrl(tag) {
    switch(tag) {
        case 'classic':
            return `https://www.google.com/search?q=${val.value.trim().split(' ').join('+')}`;
            break;
        case 'images':
            return `https://www.google.com/search?tbm=isch&q=${val.value.trim().split(' ').join('+')}`;
            break;
        case 'videos':
            return `https://www.google.com/search?tbm=vid&q=${val.value.trim().split(' ').join('+')}`;
            break;
        case 'maps':
            return ` https://www.google.com/maps/search/${val.value.trim().split(' ').join('+')}`;
            break;
        default:
            break;
    }
};
</script>

<template>
    <div id="bloc-search">
        <form @submit.prevent>
            <input v-model="val" type="text" placeholder="Effectuez une recherche sur Google...">
            <button id="search-in" @click="openTabWithSearch('classic')">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8z" fill="currentColor"></path></svg>
            </button>
        </form>

        <ul id="btn-search">
            <li>
                <button @click="openTabWithSearch('classic')">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8z" fill="currentColor"></path></svg>
                    <p>Recherche Classique</p>
                </button>
            </li>

            <li>
                <button @click="openTabWithSearch('images')">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M456 64H56a24 24 0 0 0-24 24v336a24 24 0 0 0 24 24h400a24 24 0 0 0 24-24V88a24 24 0 0 0-24-24zm-124.38 64.2a48 48 0 1 1-43.42 43.42a48 48 0 0 1 43.42-43.42zM76 416a12 12 0 0 1-12-12v-87.63L192.64 202l96.95 96.75L172.37 416zm372-12a12 12 0 0 1-12 12H217.63l149.53-149.53L448 333.84z" fill="currentColor"></path></svg>
                    <p>
                        Recherche Images
                    </p>
                </button>
            </li>
            <li>
                <button @click="openTabWithSearch('maps')">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 384 512"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192C0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67c-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80s-80 35.817-80 80s35.817 80 80 80z" fill="currentColor"></path></svg>
                    <p>
                        Recherche Maps
                    </p>
                </button>
            </li>
            <li>
                <button @click="openTabWithSearch('videos')">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><rect x="48" y="96" width="416" height="320" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="384" y="336" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="384" y="256" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="384" y="176" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="384" y="96" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="48" y="336" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="48" y="256" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="48" y="176" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="48" y="96" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="128" y="96" width="256" height="160" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="128" y="256" width="256" height="160" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect></svg>
                    <p>
                        Recherche Vidéos
                    </p>
                </button>
            </li>
        </ul>
    </div>
</template>


<style scoped>
    #bloc-search {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
		border-radius: 5px;
        padding: 5px;
        width: 100%;
        height: 100%;
    }

    #bloc-search form {
        display: flex;
        justify-content: center;
        height: 50px;
        width: 100%;
        border-radius: 50px;
        overflow: hidden;
        background-color: whitesmoke;
        border: 1px solid whitesmoke;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }

    #bloc-search form input {
        font-size: 1em;
        height: 100%;
        width: calc(100% - 50px);
        border-radius: 50px;
        background-color: whitesmoke;
        padding: 0 20px;
    }

    #bloc-search form:focus-within {
        border: 1px solid black;
    }

    #bloc-search form button {
        cursor: pointer;
        background-color: whitesmoke;
        height: 50px;
        width: 50px;
        border-radius: 60px;
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
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50px;
        border-radius: 50px;
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