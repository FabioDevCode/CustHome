import { ref } from 'vue'
import { defineStore } from 'pinia'

export const configStore = defineStore('config', () => {
    const theme = ref('dark');



    function $toggleTheme() {
        theme.value == 'dark' ? theme.value = 'light' : theme.value = 'dark';
        console.log(theme.value);
    }
    function $setDark() {
        theme.value = 'dark';
    }
    function $setLight() {
        theme.value = 'light';
    }



    return {
        theme,
        $toggleTheme,
        $setDark,
        $setLight
    }
});