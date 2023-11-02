<script setup>
import { ref } from 'vue'
import { modeStore } from '@/stores/mode';
import { configStore } from '@/stores/config';

const mode = modeStore()
const config = configStore()



function toggleMode() {
    switch(mode.mode) {
        case 'pro':
            mode.setHobbie();
            break;
        case 'hobbie':
            mode.setPro();
            break;
    }
};
</script>


<template>
    <nav :class="config.theme">
        <ul>
            <li id="mode">
                <button @click="toggleMode()">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M400 148l-21.12-24.57A191.43 191.43 0 0 0 240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 0 0 181.07-128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></path><path d="M464 97.42V208a16 16 0 0 1-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z" fill="currentColor"></path></svg>
                </button>
            </li>
            <li id="link-edit">
                <button @click="mode.toggleEdit()">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14a3.5 3.5 0 0 0 5 0l4-4a3.5 3.5 0 0 0-5-5l-.5.5"></path><path d="M14 10a3.5 3.5 0 0 0-5 0l-4 4a3.5 3.5 0 0 0 5 5l.5-.5"></path></g></svg>
                </button>
            </li>
            <li>
                <button @click="mode.toggleMenuWidget()">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M16.66 4.52l2.83 2.83l-2.83 2.83l-2.83-2.83l2.83-2.83M9 5v4H5V5h4m10 10v4h-4v-4h4M9 15v4H5v-4h4m7.66-13.31L11 7.34L16.66 13l5.66-5.66l-5.66-5.65zM11 3H3v8h8V3zm10 10h-8v8h8v-8zm-10 0H3v8h8v-8z" fill="currentColor"></path></svg>
                </button>
            </li>
            <li id="menu" @click="mode.toggleMenu()">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" fill="currentColor"></path></svg>
                </button>
            </li>
        </ul>
    </nav>
</template>


<style scoped>
    /* DARK THEME */
    .dark ul li button {
        background-color: #CFD8DC;
    }
    .dark ul li button:hover {
        background-color: #ECEFF1;
    }


    /* LIGHT THEME */
    .light ul li button {
        background-color: #212121;
        color: whitesmoke;
    }
    .light ul li button:hover {
        background-color: #323232;
    }


    /* OTHERS CSS PROPERTIES */
    nav {
        overflow: hidden;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        padding: 5px;
        display: flex;
        justify-content:flex-end;
        align-items: flex-start;
    }

    nav ul {
        height: max-content;
        width: 150px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    nav ul li {
        height: 30px;
        width: 30px;
        border-radius: 5px;
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    nav ul li button {
        height: 100%;
        width: 100%;
        border-radius: 5px;
    }

    nav ul li button:active {
        transform: scale(.98);
    }

    nav ul li button svg {
        height: 22px;
        width: 22px;

    }

</style>