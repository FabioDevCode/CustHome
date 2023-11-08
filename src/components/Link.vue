<script setup>
import { modeStore } from '@/stores/mode';
import { saveStore } from '@/stores/save';

const mode = modeStore();
const save = saveStore();


function deleteThisLink(url, name) {
    save.deleteLink({url, name});
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
    <a v-if="!mode.edit" :href="props.url" target="_blank" :id="edit" :class="save.theme">
        <p v-if="props.name">{{ props.name }}</p>
        <svg v-if="!props.name && props.edit === 'edit'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 256H112"></path></svg>
    </a>

    <a v-else target="_blank" :id="edit" :class="save.theme">
        <p v-if="props.name">{{ props.name }}</p>
        <svg v-if="!props.name && props.edit === 'edit'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 256H112"></path></svg>
        <span v-if="mode.edit && edit != 'edit'">
            <button @click="deleteThisLink(props.url, props.name)">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"></path><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12"></path><path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path></g></svg>
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
        margin-right: -10px;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
    a span button svg {
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

    a img {
        height: 60%;
        margin-right: 20px;
    }

    a p {
        font-size: 1.2em;
        font-weight: 600;
    }

</style>