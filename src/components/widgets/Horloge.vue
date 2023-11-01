<script setup>
import { onMounted, ref } from 'vue';

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
    <div id="horloge">
        <p>
            {{ hours }}
        </p>
        <span>:</span>
        <p>
            {{ mins }}
        </p>
        <span>:</span>
        <p>
            {{ secs }}
        </p>
    </div>
</template>


<style scoped>
    #horloge {
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
        background-color: rgba(25, 118, 210, .3);
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }

    #horloge span {
        margin: 0 5px;
    }

    #horloge p {
        display: inline-block;
        display: flex;
        justify-content: start;
        align-items: center;
        width: 110px;
    }

</style>