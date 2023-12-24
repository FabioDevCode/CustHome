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
    function toggleMenuWidget() {
        menu_widget.value = !menu_widget.value;
    }



    function openMenu() {
        edit.value = false;
        addtab.value = false;
        addLink.value = false;
        menu.value = true;
    }
    function closeMenu() {
        edit.value = false;
        menu.value = false;
        addtab.value = false;
        addLink.value = false;
    }

    const edit = ref(false);
    function toggleEdit() {
        edit.value = !edit.value;
    }

    const addtab = ref(false);
    function toggleAddTab() {
        edit.value = false;
        addtab.value = !addtab.value;
    }
    function openAddTab() {
        edit.value = false;
        addLink.value = false;
        addtab.value = true;
    }
    function closeAddTab() {
        edit.value = false;
        addLink.value = false;
        addtab.value = false;
    }


    const addLink = ref(false);
    function openAddLink() {
        edit.value = false;
        addtab.value = false;
        addLink.value = true;
    }
    function closeAddLink() {
        edit.value = false;
        addtab.value = false;
        addLink.value = false;
    }





    return {
        mode,
        setPro,
        setHobbie,
        menu,
        openMenu,
        closeMenu,
        menu_widget,
        toggleMenuWidget,
        edit,
        toggleEdit,
        addtab,
        toggleAddTab,
        openAddTab,
        closeAddTab,
        addLink,
        openAddLink,
        closeAddLink,
    }
});