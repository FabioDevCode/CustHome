import { ref } from 'vue'
import { defineStore } from 'pinia'

export const modeStore = defineStore('mode', () => {
    const mode = ref('pro');
    const menu = ref(false);
    const menu_widget = ref(false);
    const edit = ref(false);

    function setPro() {
        mode.value = 'pro'
    }
    function setHobbie() {
        mode.value = 'hobbie'
    }
    function toggleMenu() {
        menu.value = !menu.value;
    }
    function toggleMenuWidget() {
        menu_widget.value = !menu_widget.value;
    }
    function toggleEdit() {
        edit.value = !edit.value;
    }

    return {
        mode,
        setPro,
        setHobbie,
        menu,
        toggleMenu,
        menu_widget,
        toggleMenuWidget,
        edit,
        toggleEdit
    }
});