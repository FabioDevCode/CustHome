import { ref } from 'vue'
import { defineStore } from 'pinia'


export const modeStore = defineStore('mode', () => {
    const mode = ref('pro');
    const menu = ref(false);
    const menu_widget = ref(false);


    function setPro() {
        mode.value = 'pro'
    }
    function setHobbie() {
        mode.value = 'hobbie'
    }
    function toggleMenu() {
        edit.value = false;
        menu.value = !menu.value;
    }
    function toggleMenuWidget() {
        menu_widget.value = !menu_widget.value;
    }





    const edit = ref(false);
    function toggleEdit() {
        edit.value = !edit.value;
    }

    const addtab = ref(false);
    function toggleAddTab() {
        addtab.value = !addtab.value;
    }

    const addLink = ref(false);
    function toggleAddLink() {
        addLink.value = !addLink.value;
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
        toggleEdit,
        addtab,
        toggleAddTab,
        addLink,
        toggleAddLink
    }
});