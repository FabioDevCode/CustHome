<script setup>
import { onMounted, ref } from 'vue';
import { saveStore } from '@/stores/save';

const save = saveStore();


const hours = ref('00');
const mins = ref('00');
const secs = ref('00');

function updateTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = h <= 9 ? `${h}`.padStart(2, 0) : h;
    m = m <= 9 ? `${m}`.padStart(2, 0) : m;
    s = s <= 9 ? `${s}`.padStart(2, 0) : s;
    hours.value = h;
    mins.value = m;
    secs.value = s;
};

onMounted(() => {
    setInterval(() => updateTime(), 1000)
});
</script>


<template>
    <div id="horloge" :class="save.theme">
        <p class="hours">
            {{ hours }}
        </p>
        <span>:</span>
        <p class="mins">
            {{ mins }}
        </p>
        <span>:</span>
        <p class="secs">
            {{ secs }}
        </p>
    </div>
</template>


<style scoped>
    @import '@/assets/css/widget/HorlogeDark.css';
    @import '@/assets/css/widget/HorlogeLight.css';

    #horloge {
        overflow: hidden;
        font-family: 'Chakra Petch', sans-serif;
        border-radius: 5px;
        width: 100%;
        min-width: 350px;
        height: 120px;
        font-size: 5.5em;
        min-height: max-content;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    #horloge span {
        margin: 0 5px;
    }

    #horloge p {
        display: inline-block;
        display: flex;
        align-items: center;
        width: 110px;
    }

    .hours {
        justify-content: end;
    }
    .mins {
        justify-content: center;
    }
    .secs {
        justify-content: start;
    }

</style>