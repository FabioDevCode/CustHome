import { ref } from 'vue'
import { defineStore } from 'pinia'

export const configStore = defineStore('config', () => {
    const theme = ref('dark');

    const data = ref({
        theme: 'dark',
        default: 'pro',
        widget_pro: ['horloge', 'google'],
        widget_hobbie: ['horloge'],
        link_pro: [
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
        ],
        link_hobbie: [
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
        ]
    })








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


    return {
        data,
        theme,
        toggleTheme,
        setDark,
        setLight
    }
});