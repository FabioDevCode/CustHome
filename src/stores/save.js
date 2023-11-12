import { ref } from 'vue'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify';


export const saveStore = defineStore('save', () => {
    const version = ref('1.0.0');
    const theme = ref('dark');
    const widget = ref(true);
    const widgetList = ref(['Horloge', 'Google']);
    const defaultTab = ref('Home');
    const tabs = ref(['Home']);
    const linkViews = ref({Home: []});



    // FUNCTIONS
    function synchroniseLocalSave(object) {
        version.value = object.version ? object.version : version.value;
        theme.value = object.theme ? object.theme : 'dark';
        widget.value = object.widget ? object.widget : true;
        widgetList.value = object.widgetList ? object.widgetList : ['Horloge', 'Google'];
        defaultTab.value = object.defaultTab ? object.defaultTab : 'Home';
        tabs.value = object.tabs ? object.tabs : ['Home'];
        linkViews.value = object.linkViews ? object.linkViews : {Home: []};
    };

    function controlImport(object) {
        const acceptedKey = ['version', 'theme', 'widget', 'widgetList', 'defaultTab', 'tabs', 'linkViews'];
        for(const [key, value] of Object.entries(object)) {
            if(!acceptedKey.includes(key)) {
                return false;
            }
        }
        return true;
    }

    function importConfig(object) {
        synchroniseLocalSave(object);
        localStorage.setItem('CustHome', JSON.stringify(object));
        toast.success("Configuration importée avec succès.", {
            theme: 'dark',
            position: 'bottom-left',
            autoClose: 3000,
        });
    }

    function toggleWidget() {
        widget.value = !widget.value;
        const localSave = JSON.parse(localStorage.getItem('CustHome'));
        localSave.widget = widget.value;
        localStorage.setItem('CustHome', JSON.stringify(localSave));
    };

    function toggleTheme() {
        theme.value == 'dark' ? theme.value = 'light' : theme.value = 'dark';
        const localSave = JSON.parse(localStorage.getItem('CustHome'));
        localSave.theme = theme.value;
        localStorage.setItem('CustHome', JSON.stringify(localSave));
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
            position: 'bottom-left',
            autoClose: 3000,
        });
    };

    function chooseTab(tab) {
        defaultTab.value = tab;

        const localSave = JSON.parse(localStorage.getItem('CustHome'));
        localSave.defaultTab = tab;
        localStorage.setItem('CustHome', JSON.stringify(localSave));
    };

    function deleteTab(tab) {
        tabs.value.splice(tabs.value.indexOf(tab), 1);
        delete linkViews.value[tab];

        const localSave = JSON.parse(localStorage.getItem('CustHome'));
        localSave.tabs.splice(localSave.tabs.indexOf(tab), 1);
        delete localSave.linkViews[tab];
        localStorage.setItem('CustHome', JSON.stringify(localSave));

        toast.success("Onglet supprimé avec succès.", {
            theme: 'dark',
            position: 'bottom-left',
            autoClose: 3000,
        });
    }

    function addNewLink(link) {
        linkViews.value[defaultTab.value].push(link);
        const localSave = JSON.parse(localStorage.getItem('CustHome'));
        localSave.linkViews[defaultTab.value].push(link);
        localStorage.setItem('CustHome', JSON.stringify(localSave));
        toast.success("Lien ajouté avec succès.", {
            theme: 'dark',
            position: 'bottom-left',
            autoClose: 3000,
        });
    }

    function deleteLink(link) {
        const thisLink = (el) => el.name == link.name;

        const index = linkViews.value[defaultTab.value].findIndex(thisLink);
        linkViews.value[defaultTab.value].splice(index, 1);

        const localSave = JSON.parse(localStorage.getItem('CustHome'));
        localSave.linkViews[defaultTab.value].splice(index, 1);
        localStorage.setItem('CustHome', JSON.stringify(localSave));

        toast.success("Lien supprimé avec succès.", {
            theme: 'dark',
            position: 'bottom-left',
            autoClose: 3000,
        });
    }



    return {
        version,
        synchroniseLocalSave,
        controlImport,
        importConfig,
        widget,
        toggleWidget,
        theme,
        toggleTheme,
        tabs,
        defaultTab,
        addNewTab,
        chooseTab,
        deleteTab,
        linkViews,
        addNewLink,
        deleteLink
    }
});