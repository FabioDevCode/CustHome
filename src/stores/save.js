import { ref } from 'vue'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify';


export const saveStore = defineStore('save', () => {
    const theme = ref('dark');

    const widget = ref(true);
    const widgetList = ref(['Horloge', 'Google']);

    const defaultTab = ref('Home');
    const tabs = ref(['Home']);
    const linkViews = ref({Home: []});





    // FUNCTIONS
    function synchroniseLocalSave(object) {
        theme.value = object.theme ? object.theme : 'dark';
        widget.value = object.widget ? object.widget : true;
        widgetList.value = object.widgetList ? object.widgetList : ['Horloge', 'Google'];
        defaultTab.value = object.defaultTab ? object.defaultTab : 'Home';
        tabs.value = object.tabs ? object.tabs : ['Home'];
        linkViews.value = object.linkViews ? object.linkViews : {Home: []};
    };

    function toggleWidget() {
        widget.value = !widget.value;
    }

    function addNewTab(nameTab) {
        tabs.value.push(nameTab);
        linkViews.value[nameTab] = [];

        const localSave = JSON.parse(localStorage.getItem('CustHome'));
        localSave.tabs.push(nameTab);
        localSave.linkViews[nameTab] = [];
        localStorage.setItem('CustHome', JSON.stringify(localSave));

        toast.success("Onglet ajouté avec succès.", {
            theme: 'dark',
            position: 'top-center',
            autoClose: 2000,
        });
    }

    function chooseTab(tab) {
        defaultTab.value = tab;
    }

    function addNewLink(link) {
        linkViews.value[defaultTab.value].push(link);

        const localSave = JSON.parse(localStorage.getItem('CustHome'));
        localSave.linkViews[defaultTab.value].push(link);
        localStorage.setItem('CustHome', JSON.stringify(localSave));

        toast.success("Lien ajouté avec succès.", {
            theme: 'dark',
            position: 'top-center',
            autoClose: 2000,
        });
    }




    // function toggleTheme() {
    //     theme.value == 'dark' ? theme.value = 'light' : theme.value = 'dark';
    //     console.log(theme.value);
    // }
    // function setDark() {
    //     theme.value = 'dark';
    // }
    // function setLight() {
    //     theme.value = 'light';
    // }

    // // link is an Object
    // function addsaveLink(object) {
    //     console.log(object)
    //     // links.value.push(object);
    //     // localStorage.setItem('CustHomeLinks', JSON.stringify(links.value));
    // }

    return {
        synchroniseLocalSave,
        widget,
        toggleWidget,
        theme,
        tabs,
        defaultTab,
        addNewTab,
        chooseTab,
        linkViews,
        addNewLink
    }
});