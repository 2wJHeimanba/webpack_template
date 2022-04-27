<template>
    <div class="test" @click="addCount">index page fdklakdlfjdkalfjdkl fdsa --- {{name}} </div>
    <div>
        <Top />
        <a href="about.html"> to about page </a>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import Top from "../components/top.vue"

const name = ref<number>(0);

function addCount(){
    console.log(process.env.NODE_ENV)
    name.value = name.value + 1
}
</script>

<style scoped>
@import "../css/index.css"
</style>
