<script setup>
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
import { modeStore } from '@/stores/mode';
import { saveStore } from '@/stores/save';

const mode = modeStore();
const save = saveStore();


const name = ref('');
const url = ref('');


function saveNewLink() {
    if(!name.value.length || !url.value.length) {
        return toast.error("Un champ est vide.", {
            theme: 'dark',
            position: 'bottom-left',
            autoClose: 2000,
        });
    }

    save.addNewLink({
        name: name.value,
        url: url.value
    });

    name.value = '';
    url.value = '';
}

</script>


<template>
    <div id="modal-link" v-if="mode.addLink">
        <form @submit.prevent>
            <h4>LIEN</h4>

            <input type="text" v-model="url" placeholder="Url du lien" autofocus>
            <input type="text" v-model="name" placeholder="Nom du lien">

            <button class="add" @click="saveNewLink()">
                Ajouter le lien à {{ save.defaultTab }}
            </button>
            <button class="back-edit" @click="mode.toggleAddLink()">
                Fermer
            </button>
        </form>
    </div>
</template>


<style scoped>
    #modal-link {
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

    #modal-link form {
        border-radius: 10px;
        padding: 10px;
        height: max-content;
        min-height: max-content;
        width: 25vw;
        min-width: 320px;
        background-color: #1b2125;
    }

    #modal-link form h4 {
        font-size: 30px;
        display: inline-block;
        height: 40px;
        width: 100%;
        margin-bottom: 10px;
        color: rgba(245, 245, 245, .2);
    }

    #modal-link form input {
        font-size: 1rem;
        height: 40px;
        width: 100%;
        border-radius: 5px;
        background-color: whitesmoke;
        padding: 0 10px;
        margin-bottom: 10px;
    }

    #modal-link form button {
        border-radius: 5px;
    }

    #modal-link form button.add {
        height: 40px;
        width: 100%;
        background-color: #00796B;
        color: whitesmoke;
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 10px;
    }

    #modal-link form button.back-edit {
        height: 40px;
        width: 100%;
        background-color: #FF1744;
        font-weight: 600;
        font-size: 1rem;
    }


</style>