<template>
    <div class="top-component" @click="age+=1">
        name:{{name}}<br />
        age:{{age}}
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const name = "top component";
const age = ref<number>(25);



</script>

<style lang="css" scoped>
.top-component{
    color:cyan;
}
</style>