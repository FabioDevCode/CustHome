<script setup>
import { ref } from 'vue'
import { modeStore } from '@/stores/mode';

const sMode = modeStore()



function toggleMode() {
    switch(sMode.mode) {
        case 'pro':
            sMode.$setHobbie();
            break;
        case 'hobbie':
            sMode.$setPro();
            break;
    }
};

// function openMenu() {
//     sMode.$toggleMenu();
// }
</script>


<template>
    <nav>
        <ul>
            <li id="mode">
                <button @click="toggleMode()">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M400 148l-21.12-24.57A191.43 191.43 0 0 0 240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 0 0 181.07-128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></path><path d="M464 97.42V208a16 16 0 0 1-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z" fill="currentColor"></path></svg>
                </button>
            </li>

            <li id="pencil">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4L18.5 9.5a1.5 1.5 0 0 0-4-4L4 16v4"></path><path d="M13.5 6.5l4 4"></path></g></svg>
                </button>
            </li>
            <li id="menu" @click="sMode.$toggleMenu()">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" fill="currentColor"></path></svg>
                </button>
            </li>
        </ul>
    </nav>
</template>


<style scoped>
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
        width: 140px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    nav ul li {
        height: 40px;
        width: 40px;
        border-radius: 50px;
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    nav ul li button {
        cursor: pointer;
        height: 100%;
        width: 100%;
        border-radius: 100%;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        background-color: whitesmoke;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    nav ul li button:active {
        transform: scale(.95);
    }

    nav ul li button svg {
        height: 26px;
        width: 26px;

    }

</style>