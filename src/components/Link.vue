<script setup>
import { modeStore } from '@/stores/mode';
import { saveStore } from '@/stores/save';

const mode = modeStore();
const save = saveStore();


function deleteThisLink(name, url) {
    save.deleteLink({name, url});
}

const props = defineProps({
    edit: '',
    trash: true,
    // icon: '',
    url: '',
    name: ''
});
</script>


<template>
    <a v-if="!mode.edit" :href="props.url" target="_blank" :class="save.theme">
        <p v-if="props.name">{{ props.name }}</p>
    </a>

    <a v-else target="_blank" :id="edit" :class="save.theme">
        <p v-if="props.name">{{ props.name }}</p>
        <svg v-if="!props.name && props.edit === 'edit'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 256H112"></path></svg>
        <span v-if="mode.edit && edit != 'edit'">
            <button @click="deleteThisLink(props.name, props.url)">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z" fill="currentColor"></path></svg>
            </button>
        </span>
    </a>
</template>


<style scoped>
    @import '@/assets/css/LinkDark.css';
    @import '@/assets/css/LinkLight.css';

    a {
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

    a span {
        z-index: 1000;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    a span button {
        pointer-events: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 32px;
        width: 32px;
        margin-right: 10px;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
    a span button svg {
        height: 22px;
        color: white !important;
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

    a img {
        height: 60%;
        margin-right: 20px;
    }

    a p {
        font-size: 1.2em;
        font-weight: 600;
    }

</style>