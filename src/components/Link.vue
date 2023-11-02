<script setup>
const props = defineProps({
    icon: '',
    url: '',
    name: ''
});
</script>


<template>
    <a :href="props.url" target="_blank">
        <!-- <img src="https://raw.githubusercontent.com/FabioDevCode/FabioDevCode/main/assets/fabiodevcode_new-logo.png" alt="test"> -->
        <p>
            {{ props.name }}
        </p>
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

    a img {
        height: 60%;
        margin-right: 20px;
    }

    a p {
        font-size: 1.2em;
        font-weight: 600;
    }

</style>