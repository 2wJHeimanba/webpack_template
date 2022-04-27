<template>
    <div>
        {{name}}
        <a href="index.html"> to index page </a>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"

const name = ref<string>("vans");

</script>