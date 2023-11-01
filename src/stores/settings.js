import { ref } from 'vue'
import { defineStore } from 'pinia'

export const settingStroe = defineStore('settings', () => {
    const WIDGETS = [
        'Google',
        'Npm',
        'Horloge'
    ];

    const RULES = {
        maxWidgetPro: 8,
        maxWidgetHobbie: 3
    }

    return {
        WIDGETS,
        RULES
    }
});