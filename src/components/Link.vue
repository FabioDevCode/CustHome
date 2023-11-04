<script setup>
const props = defineProps({
    edit: '',
    icon: '',
    url: '',
    name: ''
});
</script>


<template>
    <a :href="props.url" target="_blank" :id="edit">
        <p v-if="props.name">{{ props.name }}</p>
        <svg v-if="!props.name && props.edit === 'edit'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 256H112"></path></svg>
    </a>
</template>


<style scoped>
    a {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        min-height: 50px;
        height: 100%;
        width: 100%;
        min-width: 250px;
        padding: 5px 20px;
        background-color: #CFD8DC;
        border-radius: 5px;
    }

    #edit {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #172819;
        color: #00796B;
        border: 1px dashed #00796B;
    }

    #edit svg {
        height: 30px;
    }

    a img {
        height: 60%;
        margin-right: 20px;
    }

    a p {
        font-size: 1.2em;
        font-weight: 600;
    }

</style>