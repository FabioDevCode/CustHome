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
    const customColor = ref(false);
    const colors = ref({
        bg_color: "#151515"
    });


    // FUNCTIONS
    function synchroniseLocalSave(object) {
        version.value = object.version ? object.version : '1.0.0';
        theme.value = object.theme ? object.theme : 'dark';
        widget.value = object.widget ? object.widget : true;
        widgetList.value = object.widgetList ? object.widgetList : ['Horloge', 'Google'];
        defaultTab.value = object.defaultTab ? object.defaultTab : 'Home';
        tabs.value = object.tabs ? object.tabs : ['Home'];
        linkViews.value = object.linkViews ? object.linkViews : {Home: []};
        customColor.value = object.customColor ? object.customColor : false;
        colors.value = object.colors ? object.colors : {bg_color: "#151515"};

        if(customColor.value) {
            document.documentElement.style.setProperty('--dark-bg', colors.value.bg_color);
            document.documentElement.style.setProperty('--light-bg', colors.value.bg_color);
        }
    };

    function getInitialConfig() {
        return {
            version: version.value,
            theme: theme.value,
            widget: widget.value,
            widgetList: widgetList.value,
            defaultTab: defaultTab.value,
            tabs: tabs.value,
            linkViews: linkViews.value,
            customColor: customColor.value,
            colors: colors.value,
        }
    };

    function controlImport(object) {
        const acceptedKey = ['version', 'theme', 'widget', 'widgetList', 'defaultTab', 'tabs', 'linkViews'];
        const authorizedThemeValue = ['dark', 'light'];
        const typeKey = {
            version: 'string',
            theme: 'string',
            widget: 'boolean',
            widgetList: 'array',
            defaultTab: 'string',
            tabs: 'array',
            linkViews: 'object',
            customColor: 'boolean',
            colors: 'array'
        }

        for(const [key, value] of Object.entries(object)) {
            if(!acceptedKey.includes(key)) {
                return false;
            }
            switch(typeKey[key]) {
                case 'string':
                case 'object':
                case 'boolean':
                    if(!typeof value === typeKey[key]) {
                        return false;
                    }
                    break;
                case 'array':
                    if(!Array.isArray(value)) {
                        return false;
                    }
                    break;
                default:
                    return false;
            }
            if(key === 'theme' && !authorizedThemeValue.includes(value)) {
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

        if(!customColor.value) {
            switch(theme.value) {
                case 'dark':
                    colors.value.bg_color = '#151515';
                    localSave.colors.bg_color = '#151515';
                    break;
                case 'light':
                    colors.value.bg_color = '#ECEFF1';
                    localSave.colors.bg_color = '#ECEFF1';
                    break;
            }
        }

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

    function toggleCustomColor() {
        customColor.value = !customColor.value

        const localSave = JSON.parse(localStorage.getItem('CustHome'));
        localSave.customColor = customColor.value;

        if(customColor.value == false) {
            document.documentElement.style.setProperty('--dark-bg', '#151515');
            document.documentElement.style.setProperty('--light-bg', '#ECEFF1');

            switch(theme.value) {
                case 'dark':
                    colors.value.bg_color = '#151515';
                    localSave.colors.bg_color = '#151515';
                    break;
                case 'light':
                    colors.value.bg_color = '#ECEFF1';
                    localSave.colors.bg_color = '#ECEFF1';
                    break;
            }
        }

        localStorage.setItem('CustHome', JSON.stringify(localSave));
    }

    function saveBgColor(color) {
        colors.value.bg_color = color;
        document.documentElement.style.setProperty('--dark-bg', color);
        document.documentElement.style.setProperty('--light-bg', color);

        const localSave = JSON.parse(localStorage.getItem('CustHome'));
        localSave.colors.bg_color = color;
        localStorage.setItem('CustHome', JSON.stringify(localSave));
    }



    return {
        version,
        getInitialConfig,
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
        deleteLink,
        customColor,
        toggleCustomColor,
        colors,
        saveBgColor,
    }
});