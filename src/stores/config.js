import { ref } from 'vue'
import { defineStore } from 'pinia'

export const configStore = defineStore('config', () => {
    const theme = ref('dark');
    const defaultView = ref('pro');
    const widget_pro = ref(['horloge', 'google']);
    const widget_hobbie = ref(['horloge']);
    const links = ref([])
    const link_pro = ref([
        {
            icon: '',
            name: 'test',
            url: 'google.com'
        },
        {
            icon: 'logo_svg_linkedin',
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/feed/'
        }
    ]);
    const link_hobbie = ref([
        {
            icon: '',
            name: 'test',
            url: 'google.com'
        },
        {
            icon: 'logo_svg_linkedin',
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/feed/'
        }
    ]);


    function toggleTheme() {
        theme.value == 'dark' ? theme.value = 'light' : theme.value = 'dark';
        console.log(theme.value);
    }
    function setDark() {
        theme.value = 'dark';
    }
    function setLight() {
        theme.value = 'light';
    }

    // link is an Object
    function addConfigLink(object) {
        links.value.push(object);
        localStorage.setItem('CustHomeLinks', JSON.stringify(links.value));
    }


    return {
        links,
        addConfigLink,
        theme,
        toggleTheme,
        setDark,
        setLight
    }
});